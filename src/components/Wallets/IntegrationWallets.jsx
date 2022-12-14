import { useWeb3React } from "@web3-react/core";
import { useMemo, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {Injected,WalletConnect } from "./Connectors";
import { useContextAPI } from "../../features/contextapi";

const networks = {
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"]
  }
};

const changeNetwork = async ({ networkName, setError }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName]
        }
      ]
    });
  } catch (err) {
    setError(err.message);
  }
};


export function IntegrationWallets() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {setSigner , setMessage} = useContextAPI()
  const { active, activate , library , account } = useWeb3React();

  useMemo(() => {
    if (library !== undefined) {
      setSigner(library.getSigner(account))
    }
  }, [library, account])


  async function conToMetaMask() {
    if (typeof window.ethereum == "undefined") {
      setMessage({message: "MetaMask is Not installed!", color: "danger" , isMessage: true})
      // alert("MetaMask is Not installed!");

    }else {
      try {
        setError();
        await changeNetwork({ networkName: 'polygon', setError });
        await activate(Injected);

        window.ethereum.request({ method: "net_version" }).then((chainID) => {
          if(chainID == 137){
            setMessage({message: "Wallet Connected", color: "success" , isMessage: true})
          }else {
            setMessage({message: "Change Network", color: "danger" , isMessage: true})
            
          }
        });
      } catch (error) {
        console.error('error');
        setMessage({message: "Wallet Connection Error.", color: "danger" , isMessage: true})

        console.error(error);
      }
    }
  }
  async function conToWalletConnect() {
    try {
      // await changeNetwork({ networkName: 'polygon', setError });
      await activate(WalletConnect);
      setMessage({message: "Wallet Connected", color: "success" , isMessage: true})
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>

      <button className="btn btn-primary m-1 px-4 rounded-pill fs-5" onClick={handleShow}>
        Connect Wallet
      </button>

      <Modal show={show} onHide={handleClose} style={{ zIndex: "11111" }}>
        <Modal.Header closeButton>
          <Modal.Title>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">

            <div className={`wallet_btn row  py-3 mx-1 px-4 my-2`} onClick={conToMetaMask}>
              <div className="col text-start fs-5">MetaMask</div>
              <div className="col text-end">
                <img className={`wallet_img`}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
                  alt="Metamask"
                />
                <img />
              </div>
            </div>

            {/* <div
              className={`wallet_btn row  py-3 mx-1 px-4 my-2`}
              onClick={conToWalletConnect}
            >
              <div className="col text-start fs-5">Connect Wallet</div>
              <div className="col text-end">
                <img
                  className={`wallet_img`}
                  src="https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png"
                  alt="Connect"
                />
              </div>
            </div> */}
      
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

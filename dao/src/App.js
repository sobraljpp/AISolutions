import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from './pages/Layout';
import { useState } from "react";

function App() {

  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState("");


  async function requestAccount() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]); 
        console.log(accounts[0]);
        setError(""); 
      } catch (error) {
        setError("Não foi possível conectar à carteira MetaMask. Por favor, verifique se ela está instalada e desbloqueada.");
      }
    } else {
      setError("Não há MetaMask disponível.");
    }
  }

    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout walletAddress={walletAddress} requestAccount={requestAccount} />} >
                  <Route path="/" element={<Login walletAddress={walletAddress} error={error} requestAccount={requestAccount} />}></Route>
                  <Route path="/Home" element={<Home />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

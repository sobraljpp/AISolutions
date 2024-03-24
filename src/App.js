import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from './pages/Layout';
import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";

function App() {

    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />} >
                  <Route path="/" element={<Login />}></Route>
                  <Route path="/Home" element={<Home />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

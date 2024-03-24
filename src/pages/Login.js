import { useState } from 'react';
import { Link } from "react-router-dom";

export default function Login({walletAddress, error, requestAccount}) {

  return ( 
    <div className="App">
      <header className="App-header">
        {walletAddress ? (
          <div>
            <h3>Wallet conectada!</h3>
            <Link to="/Home"> <h4>Entrar</h4> </Link>
            {            }
          </div>
        ) : (
          <div>
            <h3>Login:</h3>
            <button onClick={requestAccount}>Conecte sua Wallet</button>
            {error && <p>{error}</p>}
          </div>
        )}
      </header>
    </div>
  );
}

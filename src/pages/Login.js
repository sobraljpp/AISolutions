import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return ( 
    <div className="App">
      <header className="App-header">
        {true ? (
          <div>
            <h3>Wallet conectada!</h3>
            <Link to="/Home"> <h4>Entrar</h4> </Link>
            {            }
          </div>
        ) : (
          <div>
            <h3>Login:</h3>
            <button onClick={() => navigate('/')}>Conecte sua Wallet</button>
            {true && <p>{"Cavalo"}</p>}
          </div>
        )}
      </header>
    </div>
  );
}

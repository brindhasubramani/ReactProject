import React from 'react';
import {Link} from 'react-router-dom';
import './login1.css';
function Login(){
    return(
        <div>
            <center>
            <div class="login">
              <h1>Real Estate</h1>
            <div class="form">
              <h4>Login</h4>
              <form class="login-form">
                <input type="text" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
                <input type="password" placeholder="password" required />
                <button>login</button>
                <h4>Don't Have a account?</h4>
                <Link  to='/register'>Register</Link>
              </form>  
              </div>
            </div>
            </center>
        </div>

    );
}

export default Login;

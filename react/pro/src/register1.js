import React from 'react'
import './register1.css';
export default function Register(){
  return (
    <div className="wrapper">
    <div className="title">
      Registration Form
    </div>
    <div class="form">
       <div class="inputfield">
          <label>First Name</label>
          <input type="text" class="input"/>
       </div>  
        <div class="inputfield">
          <label>Last Name</label>
          <input type="text" class="input"/>
       </div>  
        <div class="inputfield">
          <label>Email Address</label>
          <input type="text" class="input"/>
       </div> 
       <div class="inputfield">
          <label>Password</label>
          <input type="password" class="input"/>
       </div>  
      <div class="inputfield">
          <label>Confirm Password</label>
          <input type="password" class="input"/>
       </div> 
      <div class="inputfield terms">
          <label class="check">
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <p>I Agree to the terms and conditions</p>
       </div> 
      <div class="inputfield">
        <input type="submit" value="Register" class="btn"/>
      </div>
    </div>
</div>
  );
}
// export default Register;
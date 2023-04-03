import React, { useState } from 'react';
import './login.css';

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleMember(e) {
    e.preventDefault();

    const endpoint = isSignup ? 'https://project-c92s.onrender.com/user/signup' : 'https://project-c92s.onrender.com/user/login';

    // Send request
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    const thisSection = document.querySelector('.login_section');
    thisSection.classList.add('remove');
  }

  const handleToggle = () => {
    setIsSignup((prevState) => !prevState);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className="login_section">
      <form className={`member_form ${isSignup ? 'new' : ''}`} onSubmit={handleMember}>
        {/* ============ page 1 ============= */}
        <div className="member_page_1 member_pages">
          <div className="member_form_title">
            <h1>Login Form</h1>
          </div>
        </div>

        <div className="member_form_toggles">
          <section className="toggles_container" onClick={handleToggle}>
            <div>
              <h1>Login</h1>
            </div>
            <div>
              <h1>Signup</h1>
            </div>
            <i id="slider"></i>
          </section>
        </div>

        <div className="member_page_1 member_pages halfTwo">
          <div className="member_form_inputs">
            <input type="email" placeholder="Email Address" value={email} onChange={handleEmailChange} />
            <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </div>
          <div className="error_container">
            <span id="member_err">Invalid Email or Password</span>
          </div>

          <div className="member_form_bottom">
            <button type="submit" className="member_form_submit">
              {isSignup ? 'Signup' : 'Login'}
            </button>
            <span>
              {isSignup ? 'Already have an account? Login instead' : 'Not a Member? Signup now'}
            </span>
          </div>
        </div>


                {/* ============ Page 2 =========== */}
                <div className='member_page_2 member_pages'>
                    <div className='member_form_title'>
                        <h1>Signup Form</h1>
                    </div>
                </div>
                { 
                <div className='member_form_toggles'>
                    <section className='toggles_container'>
                        <div><h1>Login</h1></div>
                        <div><h1>Signup</h1></div>
                        <i id='slider'></i>
                    </section>
                </div> }

                <div className='member_page_2 member_pages halfTwo'>
                    <div className='signup_form_inputs'>
                        <div className='signup_row1'>
                            <input type='text' placeholder="First Name" />
                            <input type='text' placeholder="Last Name" />
                        </div>
                        <div className='signup_row2'>
                            <input type='email' placeholder="Email Address" />
                            <input type='password' placeholder="Password" />

                    <input type='password' placeholder="Conform Password" />
                </div>
                <div className='signup_row3'>
                    <input type='number' placeholder="Age" />
                    <select>
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
           </div>

           <div className='member_form_bottom second_bottom'>
                <button type='submit' className='member_form_submit'>Signup</button>
                <span>Have an acount! Login instead</span>
           </div>
           </div>
        </form>
    </section>
  )}


export default Login
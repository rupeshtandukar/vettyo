import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

export default class Register extends Component {
    render() {
        return (
            <div className='form'> 
            <form id='loginForm'>
                <div >
                    <h3 id='formtitle'>Register</h3>
                    <i></i>
                </div>
                <div className='loginlabel'>
                    <div className='inputlabel userlabel'>
                        <label for='username'>Username</label><br/>
                        <input type='text' name='username' id='username' placeholder='username'></input>
                    </div>
                    <div className='inputlabel'>
                        <label for='email'>Email</label><br/>
                        <input type='email' name='email' id='email' placeholder='example: adc@email.com'></input>
                    </div>
                </div>
                <div className='loginlabel'>
                    <div className='inputlabel userlabel'>
                        <label for='password'>Password</label><br/>
                        <input type='password' name='password' id='password' placeholder='password'></input><br/>
                    </div>
                    <div className='inputlabel'>
                        <label for='re-password'>Re-enter Password</label><br/>
                        <input type='password' name='re-password' id='re-password' placeholder='Re-enter password'></input><br/>
                    </div>
                </div>
                <input type='checkbox' id='agreements' />
                <label for='agreements'>I agree to<span><Link to='/Login'>terms & Conditions</Link></span></label>
                <input type='submit' className='butn btnlogin' value='Register' name='registre'></input><br/>
                <center>
                    <div className='or-divider'>
                        <h6>OR</h6>
                    </div>
                    <h3 className='sign'>Sign In With</h3>
                    <button className='butn'><i class="fab fa-facebook-square"></i></button>
                    <button className='butn'><i class="fab fa-google"></i></button><br/>
                    <Link to='/Login'>Already have an account? Login here.</Link>
                </center>
            </form>
        </div>
        )
    }
}

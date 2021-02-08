import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default class Login extends Component {
    render() {
        return (
            <div className='form'> 
                <form id='loginForm'>
                    <div>
                        <h3 id='formtitle'>Login</h3>
                        <i></i>
                    </div>
                    <div className='loginlabel'>
                        <div className='inputlabel userlabel'>
                            <label for='username'>Username / Email</label><br/>
                            <input type='text/email' name='username' id='username' placeholder='username or email'></input>
                        </div>
                        <div className='inputlabel'>
                            <label for='password'>Password</label><br/>
                            <input type='password' name='password' id='password' placeholder='password'></input><br/>
                        </div>
                    </div>
                    <input type='submit' className='butn btnlogin' value='LOGIN' name='login'></input><br/>
                    <center>
                        <Link to='/Login'>Forgotten your password?</Link>
                        <div className='or-divider'>
                            <h6>OR</h6>
                        </div>
                        <h3 className='sign'>Sign In With</h3>
                        <button className='butn'><i class="fab fa-facebook-square"></i></button>
                        <button className='butn'><i class="fab fa-google"></i></button><br/>
                        <Link to='/Register'>Don't have an account? Create account.</Link>
                    </center>
                </form>
            </div>
        )
    }
}

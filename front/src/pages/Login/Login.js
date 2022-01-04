import React from 'react';
import './login.css';
import kakaoLogin from './icon-kakaotalk.png';
import naverLogin from './icon-naver.png';

function Login() {
  return (
    <>
      <div className='login-bg'>
        <div className='login-wrapper'>
          <div className='login-header'>
            <span className='login-title'>Login</span>
          </div>
          <form className='login-input'>
            <div className='login-email login-box'>
              <span className='email-title'>Email</span>
              <div className='email-inputBox inputBox'>
                <i className='far fa-user email-icon'></i>
                <input className='email-input' placeholder='Type your email address' />
              </div>
            </div>
            <div className='login-password login-box'>
              <span className='password-title'>Password</span>
              <div className='password-inputBox inputBox'>
                <i className='fas fa-lock password-icon'></i>
                <input className='password-input' type='password' placeholder='Type your password' />
              </div>
            </div>
            <a href='/login' className='forgot-password'>
              비밀번호를 잊으셨나요?
            </a>
            <button type='submit' className='login-btn'>
              LOGIN
            </button>
          </form>
          <div className='login-socialLogin'>
            <span className='socialLogin-text'>Or Sign Up Using</span>
            <div className='socialLogin-img'>
              <img src={kakaoLogin} className='kakaoLogin' alt='카카오톡 로그인'></img>
              <img src={naverLogin} className='naverLogin' alt='네이버 로그인'></img>
            </div>
          </div>
          <div className='login-footer'>
            <p>혹시 KoAra 이메일이 없으신가요?</p>
            <a href='/login'>&gt; KoAra 회원가입 하기</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;

import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
   
  return (
      <div>
          {/* BREADCRUMB AREA START */}
          <div className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image " data-bs-bg="img/bg/14.jpg">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="ltn__breadcrumb-inner">
                              <h1 className="page-title">Account</h1>
                              <div className="ltn__breadcrumb-list">
                                  <ul>
                                      <li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Home</Link></li>
                                      <li>Register</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* BREADCRUMB AREA END */}
          {/* LOGIN AREA START (Register) */}
          <div className="ltn__login-area pb-110">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="section-title-area text-center">
                              <h1 className="section-title">Register <br />Your Account</h1>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                  Sit aliquid,  Non distinctio vel iste.</p>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                          <div className="account-login-inner">
                              <form action="#" className="ltn__form-box contact-form-box">
                                  <input type="text" name="name" placeholder="Name" />
                                  <input type="text" name="email" placeholder="Email*" />
                                  <input type="password" name="password" placeholder="Password*" />
                                  <input type="password" name="confirmpassword" placeholder="Confirm Password*" />
                                  <label className="checkbox-inline">
                                      <input type="checkbox" defaultValue  className='mx-2'/>
                                      I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.
                                  </label>
                                  <label className="checkbox-inline">
                                      <input type="checkbox" defaultValue className='mx-2'/>
                                      By clicking "create account", I consent to the privacy policy.
                                  </label>
                                  <div className="btn-wrapper">
                                      <button className="theme-btn-1 btn reverse-color btn-block" type="submit">CREATE ACCOUNT</button>
                                  </div>
                              </form>
                              <div className="by-agree text-center">
                                  <p>By creating an account, you agree to our:</p>
                                  <p><Link to="/#">TERMS OF CONDITIONS  &nbsp; &nbsp; | &nbsp; &nbsp;  PRIVACY POLICY</Link></p>
                                  <div className="go-to-btn mt-50">
                                      <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* LOGIN AREA END */}
      </div>

  )
}

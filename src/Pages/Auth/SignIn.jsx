import React, { useRef } from 'react';
import './Auth.css'
import log from '../../image/signIn.jpg'
import { Link, useNavigate } from 'react-router-dom';


const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    const navigateSignup = event =>{
        navigate('/signup');
    }
    return (
        <div>            
            <section className="">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src={log}
                            className="img-fluid" alt="Phone-img" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form onSubmit={handleSubmit}>
                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                <label className="form-label" for="form1Example13">Email address</label>
                                    <input ref={emailRef} type="email" id="form1Example13" className="form-control form-control-lg" required />
                                    
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form1Example23">Password</label>
                                    <input ref={passwordRef} type="password" id="form1Example23" className="form-control form-control-lg" required/>
                                    
                                </div>

                                <div className="d-flex justify-content-around align-items-center mb-4">
                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3"/>
                                        <label className="form-check-label" for="form1Example3"> Remember me</label>
                                    </div>
                                    <a href="# " className='text-danger' style={{textDecoration: 'none'}}>Forgot password?</a>
                                </div>

                                {/* <!-- Submit button --> */}
                                <button type="submit" className="container btn btn-danger btn-lg btn-block">Sign In</button>

                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>

                                <a className="btn btn-danger btn-lg btn-block me-4" href="# "
                                    role="button">
                                    <i className="bi bi-google w-100" style={{width:'25px'}}></i>
                                    Continue with Google</a>
                                <a className="btn btn-primary btn-lg btn-block" style={{ backgroundColor: '#3b5998' }} href="# "
                                    role="button">
                                    <i className="bi bi-facebook me-2"></i>Continue with Facebook
                                </a>
                                

                            </form>
                            <p className='mt-3'>New to Uni Gift <Link to="/signup" className='text-danger pe-auto text-decoration-none' onClick={navigateSignup}>
                                Create an account
                                </Link></p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default SignIn;
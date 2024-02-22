import React, { useRef } from 'react';
import './Auth.css'
import reg from '../../image/signUp.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import Loading from '../Shared/Loading';



const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, profileEerror] = useUpdateProfile(auth);
    const navigate = useNavigate();
    if(loading || updating){
        return <Loading></Loading>
      }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email,password);
        await updateProfile({ displayName:name });
        navigate('/');
        // await updateProfile({ displayName, photoURL });
        // console.log(name,email,password);
    }

    const navigateSignin = event =>{
        navigate('/signin');
    }

    if(user){
        // navigate('/');
        console.log('user',user);
    }
    return (
        <div>
            <section className="">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src={reg} className="img-fluid" alt="Phone-img" />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form onSubmit={handleRegister}>
                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                <label className="form-label" for="form1Example13">Your Name</label>
                                    <input type="text" ref={nameRef} id="form1Example13" className="form-control form-control-lg" required/>
                                    
                                </div>
                                <div className="form-outline mb-4">
                                <label className="form-label" for="form1Example13">Email address</label>
                                    <input ref={emailRef} type="email" id="form1Example13" className="form-control form-control-lg" required />
                                    
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" for="form1Example23">Password</label>
                                    <input type="password" ref={passwordRef} id="form1Example13" className="form-control form-control-lg" required/>
                                    
                                </div>

                                <div className="d-flex justify-content-around align-items-center mb-4">
                                    {/* <!-- Checkbox --> */}
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                        <label className="form-check-label" for="form1Example3"> Subscribe to Our Newsletter </label>
                                    </div>
                                    {/* <a href="# " style={{textDecoration: 'none'}}>Forgot password?</a> */}
                                </div>

                                {/* <!-- Submit button --> */}
                                <button type="submit" className="container btn btn-danger btn-lg btn-block">Sign Up</button>

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
                            <p className='mt-3'>Already have an account <Link to="/signin" className='text-danger  pe-auto text-decoration-none' onClick={navigateSignin}>
                                Sign in your account
                                </Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
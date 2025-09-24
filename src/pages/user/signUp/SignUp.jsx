 import img1 from "../assets/img1.svg";
import "./register.scss";
import { Link } from 'react-router-dom'
import './register.scss'
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
function SignUp() {
  const [email , setEmail]= useState("")
  const[ password, setPassword]= useState("")

  async function createUser() {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      console.log(res);{
        toast.success("user success created")
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }
  return (
    <main>
      <section className="one-section">
        <div className="cont">
          <img src={img1} alt="preview" />

          <div className="sign">
            <h2>Create an account</h2>
            <p>Enter your details below</p>

            <div className="inputs">
              <input type="text" placeholder="Name" />
              <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email or Phone Number" />
              <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
            </div>

            <div className="actions"> 
              <button  onClick={createUser} type="submit" className="primary">Create Account</button>

              <button type="button" className="google-btn">
                <span className="gicon" aria-hidden>G</span>
                Sign up with Google
              </button>

              <div className="login">
                <span>Already have account?</span>
             <b><Link to="/login">log in</Link></b>
                
              </div>  
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignUp;
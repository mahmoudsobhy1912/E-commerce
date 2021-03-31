import React, { useState } from 'react';


const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [emailerr, setEmailErr] = useState("");
    const [passerr, setPassErr] = useState("");

    const change = (e) => {
        const name = e.target.name;
        const val = e.target.value;

        if(name === "email"){
            setEmail(val)
            setEmailErr("")
        }else if(name === "password"){
            setPass(val)
            setPassErr("")
        }
    }

    const submit = (e) => {
        e.preventDefault(); 

        if(email === ""){
            setEmailErr("Type Your Email and Must Contan '@' !")
        }
        if(password === ""){
            setPassErr("Your Password Incorrect")
        }
    }

    return ( 
        <div>
            <form onSubmit={submit}>
                <div>
                    <label>E-mail</label>
                    <input type="email" name="email" onChange={change} value={email}/>
                    {emailerr && <span>{emailerr}</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" onChange={change} value={password}/>
                    {passerr && <span>{passerr}</span>}
                </div>
                <button className="button">Sign in</button>
            </form>
        </div>
     );
}
 
export default Signin;
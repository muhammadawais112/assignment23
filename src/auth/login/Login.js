import React from 'react'
import UseLogin from './UseLogin'

export default function Login() {
    const { onSubmitHandler,
        setEmail,
        setPassword,
        email,
        password,
        loader, } = UseLogin();

    return (
        <div>
            <h1>
                Login Page
            </h1>
            <input type="email" placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password"  placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
            {/* js  logic */}
            {
                loader ?
                    (
                        <button>loading.....</button>
                    )
                    : (
                        <button onClick={onSubmitHandler}>Submit data</button>
                    )
            }



        </div>
    )
}

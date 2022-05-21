import React from 'react'
import UseSignUp from './UseSignUp';

export default function SignUp() {
    const { onSubmitHandler,
        setEmail,
        setPassword,
        email,
        password,
        loader, } = UseSignUp();

    return (
        <div>
            <h1>
                Login Page
            </h1>
            <input type="text"  placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
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

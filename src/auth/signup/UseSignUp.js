import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { doSignUp } from "../../store/action/AuthAction"
export default function UseSignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch();
    const onSubmitHandler = () => {
        console.log("button clicked");
        if (!email || !password) {
            console.log("please fill full form");
            return;
        }
        let user = {
            email: email,
            password: password,

        }
        //    action par say response ayga
        dispatch(doSignUp(user, setLoader));
        setEmail('');
        setPassword('')
    }
    return {
        onSubmitHandler,
        setEmail,
        setPassword,
        email,
        password,
        loader,














    }
}

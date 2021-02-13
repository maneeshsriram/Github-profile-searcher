import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'

import firebase from 'firebase/app'
import { UserContext } from '../context/UserContext'
import { Redirect } from 'react-router-dom'

const Signup = () => {
    const context = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                // console.log(res);
                context.setUser({ email: res.user.email, uid: res.user.uid })
                toast('Created a new account successfully', {
                    type: 'success'
                })
            })
            .catch(err => {
                console.log(err);
                toast(err.message, {
                    type: "error"
                })
            })
    }

    const handleSubmit = e => {
        e.preventDefault()
        handleSignup()
    }

    if (context.user?.uid) {
        return <Redirect to='/' />
    }
    return (
        <div className="mt-5 text-center">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="card">
                        <form onSubmit={handleSubmit}>
                            <div className="card-header text-dark">New User? create account</div>
                            <div className="card-body">
                                <input className="mx-3 mb-5" type="email" name='email' placeholder='provide your email' value={email} onChange={e => setEmail(e.target.value)} />
                                <input className="mx-3 mb-5" type="password" name='password' placeholder='provide your password' value={password} onChange={e => setPassword(e.target.value)} />
                                <button type='submit' className='btn btn-block btn-primary'>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup

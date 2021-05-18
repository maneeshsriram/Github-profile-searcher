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
        <div className="mt-5 pt-5">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={handleSubmit} className="bg-light">
                    <div className="card-header bg-warning">New User? Create account</div>
                    <div className="card-body border">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input className="form-control" id="exampleInputEmail1" type="email" name='email' placeholder='provide your email' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input className="form-control" id="exampleInputPassword1" type="password" name='password' placeholder='provide your password' value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <button type='submit' className='btn btn-block btn-outline-primary'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup

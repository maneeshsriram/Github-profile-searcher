import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Header = () => {
    const context = useContext(UserContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <Link className="navbar-brand" to='/'><i class="fab fa-github"></i>  Github searcher</Link>
            <div className="vertical-align-center" style={{ color: '#233e8b' }}>{
                context.user?.email ? context.user.email : ""
            }</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <span className="navbar-nav ml-auto">

                    {context.user ? (
                        <span className="nav-item ">
                            <Link className="nav-link px-3" onClick={() => { context.setUser(null) }}>Logout</Link>
                        </span>
                    ) : (
                        <>
                            <span className="nav-item ">
                                <Link className="nav-link  px-3" to='/Signin'>Sign In</Link>
                            </span>
                            <span className="nav-item ">
                                <Link className="nav-link  px-3" to='/Signup'>Sign up</Link>
                            </span>
                        </>
                    )}
                </span>
            </div>
        </nav>
    )
}

export default Header

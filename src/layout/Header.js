import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Header = () => {
    const context = useContext(UserContext)

    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <Link class="navbar-brand" to='/'>Github searcher</Link>
            <div className="text-white vertical-align-center">{
                context.user?.email ? context.user.email : ""
            }</div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <span class="navbar-nav ml-auto">

                    {context.user ? (
                        <span class="nav-item ">
                            <Link class="nav-link text-white px-3" onClick={() => { context.setUser(null) }}>Logout</Link>
                        </span>
                    ) : (
                            <>
                                <span class="nav-item ">
                                    <Link class="nav-link text-white px-3" to='/Signin'>Sign In</Link>
                                </span>
                                <span class="nav-item ">
                                    <Link class="nav-link text-white px-3" to='/Signup'>Sign up</Link>
                                </span>
                            </>
                        )}
                </span>
            </div>
        </nav>
    )
}

export default Header

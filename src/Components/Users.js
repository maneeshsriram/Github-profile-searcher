import React from 'react'
import { Link } from 'react-router-dom'

const Users = ({ login, avatar_url, index }) => {
    return (
        <div className="col-lg-4 col-md-6 my-2 p-2" key={index}>
            <div className="card border border-dark px-4 py-3" style={{ width: '16rem' }}>
                <img className="card-img-top rounded-circle border" src={avatar_url} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{login}</h5>
                    <Link className="btn btn-outline-primary" to={`profile/${login}`}>
                        See profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Users

import React from 'react'

const UserCard = ({ user }) => {
    return (
        <div>
            <div className="text-center">
                <img src={user.avatar_url} alt="" height="250" className="rounded-circle" />
            </div>
            <h1 className="mt-3"><strong>{user.name}</strong></h1>
            {user.bio ? <h4 className="lead my-3 alert alert-info">{user.bio}</h4> : ""}
            <h4 className="lead my-2">Company : {user.company ? <strong>{user.company}</strong> : <span>no info</span>}</h4>
            <h4 className="lead my-2">Location : {user.location ? <strong>{user.location}</strong> : <span>no info</span>}</h4>
            <h4 className="lead my-2">Contact : {user.email ? <strong>{user.email}</strong> : <span>no info</span>}</h4>
            <span className="badge badge-warning m-md-3 p-2">Public repositories: {user.public_repos}</span>
            <span className="badge badge-info m-md-3 p-2">Followers: {user.followers}</span>
            <span className="badge badge-dark m-md-3 p-2">Following: {user.following}</span>
        </div>
    )
}

export default UserCard

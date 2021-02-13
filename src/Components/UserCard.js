import React from 'react'

const UserCard = ({ user }) => {
    return (
        <div className="ml-5">
            <img src={user.avatar_url} alt="" height="250" className="rounded-circle" />
            <h1 className="text-light mt-5">{user.name}</h1>
            {user.bio ? <h4 className="text-danger">{user.bio}</h4> : ""}
            <h4 className="text-primary">Followers: {user.followers}</h4>
            <h4 className="text-success">Public repositories: {user.public_repos}</h4>
        </div>
    )
}

export default UserCard

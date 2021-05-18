import Axios from 'axios'
import React, { useState, useEffect } from 'react'

const UserRepos = ({ repos_url }) => {
    const [repos, setRepos] = useState([])

    const fetchRepos = async () => {
        const { data } = await Axios.get(repos_url)
        // console.log(data);
        setRepos(data)
    }

    useEffect(() => {
        fetchRepos()
    }, [repos_url])

    return (
        <div className="mb-5">
            {repos.map(repo => {
                return (
                    <div key={repo.id} className="mb-5 border border-danger p-4 rounded">
                        <h2><strong>{repo.name}</strong> </h2>
                        <h4 className="text-secondary lead">{repo.description}</h4>
                        <p className="badge badge-danger mb-4">{repo.language}</p>
                        <a href={repo.html_url} target="_blank" style={{ textDecoration: 'none' }}><button className="btn btn-outline-primary btn-block">Take me to this repo</button></a>
                    </div>
                )
            })}
        </div>
    )
}

export default UserRepos

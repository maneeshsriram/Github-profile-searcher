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
                    <div key={repo.id} className="mb-5 border border-white p-5 rounded">
                        <h2 className="text-light"><strong>{repo.name}</strong> </h2>
                        <h4 className="text-info">{repo.description}</h4>
                        <h5 className="text-secondary mb-4">{repo.language}</h5>
                        <a href={repo.html_url} target="_blank"><button className="btn btn-warning btn-block">Take me to this repo</button></a>
                    </div>
                )
            })}
        </div>
    )
}

export default UserRepos

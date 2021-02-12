import React, { useContext, useState } from 'react'
import UserCard from '../Components/UserCard'
import UserRepos from '../Components/UserRepos'
import { UserContext } from '../context/UserContext'
import { toast } from 'react-toastify'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'


const Home = () => {
    const context = useContext(UserContext)
    const [query, setQuery] = useState('')
    const [user, setUser] = useState(null)

    const fetchDetails = async () => {
        try {
            const { data } = await Axios.get(`https://api.github.com/users/${query}`)
            setUser(data)
            // console.log(data);
        } catch (error) {
            toast('Not able to locate user', {
                type: "error"
            })
        }
    }

    if (!context.user?.uid) {
        return <Redirect to="/Signin" />
    }

    return (
        <div>

            <div class="input-group my-5 px-5">
                <input type="text" class="form-control mx-4" placeholder="Type the username of the person you want to search for..." value={query} onChange={e => setQuery(e.target.value)} />
                <button className="btn btn-warning" onClick={fetchDetails}>Fetch User</button>
            </div>

            <hr />

            <div className="row">
                <div className="col">
                    {user ? <UserCard user={user} /> : null}
                </div>
                <div className="col mb-5">
                    {user ? <UserRepos repos_url={user.repos_url} /> : null}
                </div>
            </div>

        </div >
    )
}

export default Home

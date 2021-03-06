import React, { useContext, useState, useEffect } from 'react'
import UserCard from '../Components/UserCard'
import UserRepos from '../Components/UserRepos'
import { toast } from 'react-toastify'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from '../Components/Loading'


const Profile = ({ match }) => {
    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(false)

    const fetchDetails = async () => {
        try {
            setLoad(true)
            const { data } = await Axios.get(`https://api.github.com/users/${match.params.login}`)
            setUser(data)
            setLoad(false)
        } catch (error) {
            toast('Not able to locate user', {
                type: "error"
            })
        }
    }


    useEffect(() => fetchDetails(), [])


    return (
        <div>

            { load ? <Loading />
                :
                <div>
                    <Link to='/'><i class="fas fa-angle-left ml-5"></i> Go Back</Link>
                    <div className="row pt-5">
                        <div className="offset-md-1 col-md-5">
                            {user ? <UserCard user={user} /> : null}
                        </div>
                        <div className="col-md-5 mb-5">
                            {user ? <UserRepos repos_url={user.repos_url} /> : null}
                        </div>
                    </div>
                </div >
            }

        </div>
    )
}

export default Profile

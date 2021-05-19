import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { toast } from 'react-toastify'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import Loading from '../Components/Loading'
import Users from '../Components/Users'


const Home = () => {
    const context = useContext(UserContext)
    const [query, setQuery] = useState('')
    const [users, setUsers] = useState(null)
    const [load, setLoad] = useState(false)

    const fetchDetails = async () => {
        try {
            setLoad(true)
            const { data } = await Axios.get(`https://api.github.com/search/users?q=${query}`)
            setUsers(data.items)
            setLoad(false)
        } catch (error) {
            toast("Unable to fetch the user", {
                type: "error"
            })
        }
    }


    if (!context.user?.uid) {
        return <Redirect to="/Signin" />
    }



    return (
        <div >
            <div className="input-group my-5 px-md-5">
                <input type="text" className="form-control mx-4" placeholder="Search usernames" value={query} onChange={e => setQuery(e.target.value)} />
                <button className="btn btn-warning" onClick={fetchDetails}>Search User</button>
            </div>
            <hr />
            {
                load ? (
                    <Loading />
                ) : (

                    <div>
                        {users &&
                            <div className="container">
                                <div className="row text-center">
                                    {users.map((user, index) =>
                                        <Users login={user.login} avatar_url={user.avatar_url} index={index} />
                                    )
                                    }
                                </div>
                            </div>
                        }
                    </div >
                )
            }
        </ div>
    )
}




export default Home








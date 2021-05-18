import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { toast } from 'react-toastify'
import Axios from 'axios'
import { Link, Redirect } from 'react-router-dom'


const Home = () => {
    const context = useContext(UserContext)
    const [query, setQuery] = useState('')
    const [users, setUsers] = useState(null)


    const fetchDetails = async () => {
        try {
            const { data } = await Axios.get(`https://api.github.com/search/users?q=${query}`)
            setUsers(data.items)
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

        <div>
            <div className="input-group my-5 px-md-5">
                <input type="text" className="form-control mx-4" placeholder="Search usernames" value={query} onChange={e => setQuery(e.target.value)} />
                <button className="btn btn-warning" onClick={fetchDetails}>Search User</button>
            </div>

            <hr />

            {users &&
                <div className="container">
                    <div className="row text-center">
                        {users.map((user, index) =>
                            <div className="col-lg-4 col-md-6 my-2 p-2" key={index}>
                                <div className="card border border-dark px-4 py-3" style={{ width: '16rem' }}>
                                    <img className="card-img-top rounded-circle border" src={user.avatar_url} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{user.login}</h5>
                                        <Link className="btn btn-outline-primary" to={`profile/${user.login}`}>
                                            See profile
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            }
        </div >
    )
}




export default Home








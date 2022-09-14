import React from 'react'
import './App.css'

function App() {
    return (
        <div className='App'>
            <div className='addUser'>
                <input type='text' placeholder='Name...' />
                <input type='text' placeholder='Username...' />
                <button>Add User</button>
            </div>
            <div className='displayUsers'>
                {userList.map((user) => {
                    return (
                        <div>
                            <h1> {user.name}</h1>
                            <h1> {user.username}</h1>
                            <input type='text' placeholder='New Username...' />
                            <button>Update Username</button>
                            <button>Delete User</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App

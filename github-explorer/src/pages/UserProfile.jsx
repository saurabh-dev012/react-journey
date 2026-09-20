import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const UserProfile = () => {
  const {username} = useParams();

  const [user, setUser] = useState(null)

  useEffect(()=>{
    // API REQUEST
  })

  return (
    <div>
      <h1>User Profile</h1>
      <p>{username}</p>
      
    </div>
  )
}

export default UserProfile

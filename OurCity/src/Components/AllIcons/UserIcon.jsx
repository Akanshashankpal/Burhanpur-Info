import React from 'react' 
import { Link } from 'react-router-dom'

const UserIcon = () => {
  return (
    <div>
        <Link to={'/registar'}>
        <i  class="fa-regular fa-user"></i>
        </Link>
        


       
    </div>
  )
}

export default UserIcon
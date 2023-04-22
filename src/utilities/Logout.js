import { Navigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import UserContext from './UserContext.js';
import Swal from 'sweetalert2'

function Logout(){

     const {unsetUser, setUser} = useContext(UserContext);

     unsetUser();

     useEffect(() => {
          setUser({id: null, isAdmin: null})
     })

     Swal.fire({
          title: 'Logged out Successfully',
          icon: 'success',
          text: 'See you again next time!'
     })

     return (
          <Navigate to= "/account/login" />
     )
}

export default Logout;
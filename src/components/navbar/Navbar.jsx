import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
export const Navbar = () => {

    const navigate=useNavigate()
    // get user from local storage
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)

    const logout=() =>{
        localStorage.clear()
        navigate("/login")
    }


// get cart value from reducer
const {cart} = useSelector((state )=> ({
    cart:state.cart.cart
}))

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Link to={'/'} class="navbar-brand me-2" >
                        <h3 className="text-success fw-bold ">Online <span className="text-black">Bazzar</span> </h3>
                    </Link>

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarButtonsExample">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Dashboard</a>
                            </li>
                        </ul>
                        <Link to={'/cart'}>
                            <i className='fa fa-shopping-cart fa-lg'></i>
                            <span className='budget rounded-pill badge-notification bg-danger'>{cart.length}</span>
                        </Link>

                        <div class="d-flex align-items-center">
                            {
                                user ?  (
                                    <div class="dropdown">
  <button
    class="btn btn-primary dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
{user.fname}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  {
    user.isAdmin ? (
       <>
        <li><Link to={'/Admindashboard'} class="dropdown-item">Admin Dashboard</Link></li>
        <li><Link to={'/order'} class="dropdown-item">My orders</Link></li>
       </>
    ): 
         <> 
         <li><Link to={'/Profile'} class="dropdown-item">Profile</Link></li>
         <li><Link to={'/order'} class="dropdown-item">My orders</Link></li>
         </>
    
  }
    <li><a class="dropdown-item" onClick={logout}>Log Out</a></li>
    
  </ul>
</div>

                                ):(

                                
                            <>
                            <Link to={'/register'}>
                                <button type="button" class="btn btn-primary px-3 me-2">
                                     Register
                                    
                                 </button>
                                </Link>
                                </>
                                )
}


                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;

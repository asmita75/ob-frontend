import React, { useState } from 'react'

const Profile = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const [fname, setFname] = useState('user.fname')
    const [lname , setLname] =useState('user.lname')
    const [email , setEmail] =useState('user.email')
    const [profileimage , setProfileImage] =useState('')

    const handleImageupload = (event) => {

        setProfileImage(event.target.files[0])


    }

  return (
    <div className='container '>
    <div>
        <img src ="https://e7.pngegg.com/pngimages/18/809/png-clipart-user-computer-icons-person-icon-cdr-logo.png" height={100} width={100} alt=""/>
    </div>
    <h3>Welcome, <strong>{user.fname} {user.lname}</strong></h3>
    <p>{user.email}</p>
 
<button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
 Edit Profile <i class ="fas fa-user-edit"> </i>
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">...</div>
      <form action="">
        <label htmlFor="fname">First Name</label>
        <input value={fname} onChange={(e)=>setFname(e.target.value)} type="text" name='fname' id='fname' className='form-control' />

        <label htmlFor="lname">Last Name</label>
        <input value={lname} onChange={(e)=>setLname(e.target.value)} type="text" name='lname' id='lname' className='form-control' />

        <label htmlFor="email">Email Address</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" name='email' id='email' className='form-control' />

        <label htmlFor="profile">Profile</label>
        <input onChange={handleImageupload} type="file"  className='form-control' />
      </form>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Profile
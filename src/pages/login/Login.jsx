import React ,{useState} from 'react'
import { loginApi } from '../../apis/Api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import Navbar from '../../components/Navbar/navbar';

const Login = () => {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState('');


const navigate = useNavigate()
const dispatch=useDispatch()

//error state
const [emailError, setEmailError]=useState("");
const [passError, setPassError]= useState("");


const validate =()=>{
  let isvalid =true;
  if(email === ""){
    setEmailError("Email is required");
    isvalid=false;
  }

  if(pass === ""){
    setPassError("Password is required");
    isvalid=false;
  }
  return isvalid;
}

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(email, pass);

//   try {
//     loginApi({
//       email: email,
//       password: pass
//     }).then((res) => {
//       console.log(res.data)

  
      
//   dispatch(addUser(res.data.user))

//       navigate("/")

//       toast.success("user logged in sucessfully");
//     }).catch((err) => {
//       console.log(err)
//       toast.error('user login failed');
//     });
//   } catch (error) {
//     toast.error("user login failed");
//   }
// };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
    if(!validate()){
      return;
    }

    try {
      loginApi({
        email: email,
        password: pass
      }).then((res) => {
        console.log(res.data)
        
        // setting token and user in localstorage
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user",JSON.stringify(res.data.user))

        navigate("/")

        toast.success("user logged in sucessfully");
      }).catch((err) => {
        console.log(err)
        toast.error('user login failed');
      });
    } catch (error) {
      toast.error("user login failed");
    }
  };

  return (
    <div class=" container-fluid d-flex flex-column justify-content-center align-items-center">
        {/* <Navbar/> */}
        <h1>Login page</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              onChange={(e)=> setEmail(e.target.value)}
            />
             {
              emailError && <div className="text-danger">{emailError}</div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={(e)=> setPass(e.target.value)}
            />
             {
              passError && <div className="text-danger">{passError}</div>
            }
          </div>

          <Link to ="/forgot_password">
            Forgot Password?
          </Link>
          <button type="submit" className="btn btn-primary mt-3 w-100" onClick={handleSubmit
          }
          >
            Login
          </button>
        </form>
    </div>
  )
}

export default Login;
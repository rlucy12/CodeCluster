import { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import '../componenet/contact.css'
const Register = () => {
    const [id,idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");
    // const [usertype, usertypechange] = useState("");

    const navigate=useNavigate();



    const handlesubmit=(e)=>{
        e.preventDefault();
        let regobj = {id,name,email,password};
        // console.log(regobj);
        fetch("http://localhost:8000/user", {
          method: "POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(regobj)
        }).then((res)=>{
            alert("Registration Success")
            navigate('/login');
        }).catch((err)=>{
            alert("Registration Failed")
        });
    }
    return (
      <div>
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card">
              <div className="card-header">
                <h1>Sign Up</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>User Name</label>
                      <br />
                      <input
                      
                        type="text"
                        required
                        va
                        lue={id}
                        onChange={(e) => idchange(e.target.value)}
                      />
                      <br></br>
                      <label>Name</label> <br />
                      <input
                        type="text"
                        required
                        va
                        lue={name}
                        onChange={(e) => namechange(e.target.value)}
                      />
                      <br></br>
                      <label> Email </label> <br />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                      />
                      <br></br>
                      <label>Password</label> <br />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => passwordchange(e.target.value)}
                      />
                      {/* <br></br>
                      <label>User Type</label>
                      <select>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                      </select> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
                <Link className="btn btn-success" to={"/"}>
                  Back
                </Link>
              </div>
              <div style = {{marginTop:"20px", marginLeft:"30px", marginBottom:"20px"}}>
                If Already have an account :<br></br>
                <Link className="btn btn-success" to={"/login"} style={{marginLeft:"20px"}}>
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}
export default Register;
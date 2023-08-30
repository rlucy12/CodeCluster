
import { useState } from "react";

const Contactus = () => { 

    const [email, emailchange] = useState("");
    const [comment, commentchange] = useState("");
    // const navigate = useNavigate();
    const handlsubmit=(e)=>{
        e.preventDefault();
        let comobj = {email,comment};
        fetch("http://localhost:7000/comment", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(comobj),
        })
          .then((res) => {
            alert("Comment Post");
            // navigate("/home");
          })
          .catch((err) => {
            alert("Comment Failed");
          });
    }
  return (
    <div>
      <form onSubmit={handlsubmit}>
        <label>Email</label>{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => emailchange(e.target.value)}
        />
        <br></br>
        <label>Comment</label>{" "}
        <input
          type="textarea"
          value={comment}
          onChange={(e) => commentchange(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Comment
        </button>
      </form>
    </div>
  );
}

export default Contactus;

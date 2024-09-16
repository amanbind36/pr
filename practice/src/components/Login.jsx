import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../contex/LoginContex";
import { useContext } from "react";

 const LoginPage = () => {
  let {SetLogin} = useContext(LoginContext)
  let URL = "https://practice-d736b-default-rtdb.firebaseio.com";
  let navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    let  username= event.target[0].value
    let  password= event.target[1].value
    axios.get(`${URL}/users.json`)
    .then((res) => {
      let ndataa = Object.entries(res.data).filter(([key,ele])=>{
        console.log(ele.password)
        return ele.name==username && ele.password==password
      })
      console.log(ndataa)
      if (ndataa.length>0){
        alert("Login Successfully");
        SetLogin(true)
        event.target[0].value = "";
        event.target[1].value = "";
        navigate("/")
      }else{
        alert("Please Provide Valid Crediantials")
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <div className="formcontainer">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="password" required />
          <input className="sub-btn" type="submit" />
        </form>
      </div>
    </>
  );
};

export default LoginPage
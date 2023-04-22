import React, {useState } from "react";

export function LoginForm(props) {
    const [details] = useState({name: "", email: "", password: ""});
  
    const submitHandler = e => {
      e.preventDefault();
  
      Login(details);
    }
  
    const [user, setUser] = useState({name: "", email: ""})
    const [error, setError] = useState("");
  
    const adminUser = {
      email: "zachariarian@gmail.com",
      password: "123@abc"
    }
  
      const Login = details => {
        console.log(details);
  
        if (details.email === adminUser.email && details.password === adminUser.password) {
          console.log("Logged in");
          setUser({
            name: details.name,
            email: details.email
          });
        } else {
          console.log("Details do not match!");
          setError("Details do not match!");
        }
      }
  
  
      const Logout = details => {
        setUser({name: "", email: ""});
        console.log(Logout);
      }
      return (
        <><><form onSubmit={submitHandler}></form><Login>Login</Login></><React.Fragment> {(user.email !== "") ? (
              "Welcome", <><span>{user.name} </span>
                  <button onClick={Logout}> Logout </button></>)
              : (
                  <LoginForm Login={Login} error={error} />
              )} </React.Fragment></>
      )}
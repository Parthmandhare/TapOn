import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Login from "./Login";
import Uname from "../Uname";
import Register from "./Register";
// import Register from "./Register";




import Nav from "../../components/Navbars/Nav"
import Smallf from "../../components/Footers/Smallf"

const components = {
  Login : Login,
  uname : Uname,
  register: Register
}

export default function Authen() {
  const {id} = useParams();

  const ComponentToRender = components[id];
  return (
    <>
      
      <main>
      
        <section className="relative w-full h-full py-40 min-h-screen">
          
        <Nav transparent />
          
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full "
            style={{
              backgroundImage:
                "url(" + require("../../assets/img/register_bg_2.png")+ ")",
            }}
          >
            {/* <div className=" mt-60 ml-96">

            <Link to="/auth/login" className=" text-white text-4xl ">Login</Link>
            </div>
             */}

            {ComponentToRender ? <ComponentToRender/> : <Navigate to="/" /> }


{/* <Login /> */}
            
            {/* <Uname/> */}
            
            
          </div>
  
        
            
          
          <Smallf  absolute/>
          
        </section>
      </main>
    </>
  );
}

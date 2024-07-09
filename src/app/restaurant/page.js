'use client'
import { useState } from "react"
import RestaurantLogin from "../_component/RestaurantLogin"
import RestaurantSignUp from "../_component/RestaurantSignUp"
import RestaurantHeader from "../_component/RestaurantHeader"
import "./style.css"
import RestaurantFooter from "../_component/RestaurantFooter"

const Restaurant = () =>{
    const [login,setLogin] = useState(true)
    return(
        <>
        <div className="container">
        <RestaurantHeader/>
            <h1>Restaurant Login / Signup Page</h1>
            {
                login ?  <RestaurantLogin/>:<RestaurantSignUp/>
            }  
            <div>       
            <button onClick={() => setLogin(!login)} className="button-link">
            {login ? " Already have Account? Login ": " Do not have Account? SignUp "}
            </button>
            </div>  
            </div> 
            <RestaurantFooter/>
        </>
    )
}

export default Restaurant
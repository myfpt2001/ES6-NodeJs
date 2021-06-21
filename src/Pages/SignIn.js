import UserApi from "../api/User";
import { $, reRender } from "../utils";
import SessionStorage from '../sessionStorage/index'
export default class SignIn {
    render() {

        return /*html */ `
               <center>
               
               <form class="SignIn mt-5" style=" " >
               <h1>Sign In</h1>
               <div class="mb-3 email" >
                   <label for="email" >Email address</label>
                   <br>
                   <input type="email"  id="email" aria-describedby="emailHelp">
                   <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
               </div>
               <div class="mb-3 password">
                   <label for="password" >Password</label>
                   <br>
                   <input type="password"  id="password">
               </div>
               <button type="submit" class="btns ">SignIn</button>
               </form>
               
               </center>
               <div class="as"></div>
        
        
        `
    }
    afterRender() {

        $('.SignIn').addEventListener('submit', async(e) => {
            e.preventDefault();

            const email = $("#email");
            const password = $("#password");

            if (email.value === "" || password.value === "") {
                alert("Bạn cần nhập đầy đủ thông tin!");
            } else {
                const body = {
                    password: $("#password").value,
                    email: $("#email").value
                }
                console.log("day la my", body);
                try {
                    const response = await UserApi.signin(body);
                    console.log(response);
                    SessionStorage.setSession('user', response.data);
                    location.hash = '/'
                } catch (error) {
                    console.log(error.response);

                }

            }

        })

    }
}
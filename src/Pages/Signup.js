import UserApi from "../api/User";
import { $, reRender } from "../utils";
export default class Signup {
    render() {

        return /*html */ `
                <center>
                <form class="SignUp mt-5">
                <div class="mb-3">
                <div class="mb-3 name">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name">
                    </div>
                    <div class="mb-3 email" >
                    <label for="email" class="form-label" >Email address</label>
                    <br>
                    <input type="email"  id="email" class="form-control" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 password">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password">
                </div>
                <button type="submit" class="btns">Submit</button>
                </form>
                
                </center>
        
        
        `
    }
    async afterRender() {
        $('.SignUp').addEventListener('submit', async(e) => {
            e.preventDefault();
            console.log("hihi");
            const user = {
                name: $("#name").value,
                email: $("#email").value,
                password: $("#password").value
            }
            console.log(user);
            alert("Sign Up Success")
            await UserApi.add(user)
            window.location.assign("/")
        })
    }
}
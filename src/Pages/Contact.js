import { $, reRender } from "../utils";
import { firebase } from "../firebase/index.js"
import ContactApi from "../api/ContactApi";

export default class Contact {
    render() {
        return /*html */ `
        <div class="banner-second">
            <h2>HOME  /  CONTACT</h2>
            </div>
         <div class="contact">
         <h3>Contact - Us</h3>
         <div class="icon-alls">
             <div class="freeship">
                 <center><img src="./img/icon1.jpg" width="200px" alt=""></center>
                 <h4>
                     Nationwide shipment</h4>
                 <p>
                     Nationwide shipment. Fast ship 2-3 days</p>
             </div>
             <div class="customer">
                 <center><img src="./img/icon2.jpg" width="200px" alt=""></center>
                 <h4>
 
                     Customer support</h4>
                 <p>
                     24/7 customer support. Right and always all the time</p>
             </div>
             <div class="gift">
                 <center><img src="./img/icon3.1.jpg" width="200px" alt=""></center>
                 <h4>
 
                     Free flower package</h4>
                 <p>
                     Free flower package. Give love and happiness to every family</p>
             </div>
         </div>
         <div id="contact" >
             <div class="contact-box">
                 <div class="heading">
                     <h1>Contacts Us</h1>
                     <p>Call Or Email Us Regarding Question Or Issues</p>
                 </div>
                 <div class="inputs">
                     <form method="post" class="form-add-contact">
                         <input type="text" name="username" placeholder="Full Name" id="name"  required >
                         <input type="email" name="email" placeholder="Example@gmail.com" id="email" required>
                         <input type="text"  name="subject" placeholder="Enter Subject" id="subject" required>
                         <input type="file" name="file" id="image">
                         <textarea  name="body" placeholder="Write Message" id="message"></textarea>
                         <button type="submit" name="btn">SEND</button>
                     </form>
                 </div>
 
             </div>
             <div class="map">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.976224811043!2d105.76336201398163!3d21.033637285995745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c7ebc5b257%3A0xcf9979f255d8a6b5!2zUGjhu5EgTmd1eeG7hW4gQ8ahIFRo4bqhY2gsIE3hu7kgxJDDrG5oIDEsIE3hu7kgxJDDrG5oIDIsIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1606163785993!5m2!1sen!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
             </div>
         </div>
         
         </div>
        
        
        `
    }
    afterRender() {
        $('.form-add-contact').addEventListener('submit', (e) => {
            e.preventDefault();
            if ($('#name').value == "") {
                alert("Bạn không được trường tên ?");
            } else if ($('#email').value == "") {
                alert("Bạn không được trường email  ?");
            } else if ($('#image').value == "") {
                alert("Bạn không được trường ảnh  ?");
            } else if ($('#subject').value == "") {
                alert("Bạn không được trường subject  ?");
            } else if ($('#message').value == "") {
                alert("Bạn không được trường message  ?");
            } else {
                const contactImage = $('#image').files[0];
                let storageRef = firebase.storage().ref(`img/${e.name}`);
                storageRef.put(contactImage).then(function() {
                    storageRef.getDownloadURL().then((url) => {
                        const contact = {
                            name: $('#name').value,
                            email: $('#email').value,
                            image: url,
                            subject: $('#subject').value,
                            message: $('#message').value,
                        }
                        console.log(contact);
                        ContactApi.add(contact);
                        alert("Add Success");
                        // reRender(Contact, "#contact")
                    })
                })
            }
        })

    }
}
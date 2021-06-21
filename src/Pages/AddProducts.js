import ProductApi from "../api/ProductApi";
import Sidebar from "../Component/Sidebar";
import { $, reRender } from "../utils";
import { firebase } from "../firebase/index.js"
import { ListProduct } from "../Component/ListProducts";
import CategoryApi from "../api/CategoryApi";

export default class AddProducts {
    async render() {
            const { data: categories } = await CategoryApi.getAll();
            console.log(categories);
            return /*html*/ `
        </div>

        <div>
            <div class="row">
                <div class="col-3">
                   ${Sidebar.render()}
                </div>
                <div class="col-9">
                    <div class="header-admin d-flex justify-content-around">
                        <h5>Material dashboard</h5>
                       
                        <div class="admin-icon">
                            <a href=""><i class="bi bi-border-all px-3"></i></a>
                            <a href=""><i class="bi bi-bell  px-3"></i></a>
                            <a href=""><i class="bi bi-person"></i></a>
                        </div>
                    </div>
                    <div id="list-content">
                    <form class="form-add-products my-3">
                    <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" >
                    </div>
                    <div class="mb-3">
                    <label for="price" class="form-label">Price</label>
                    <input type="text" class="form-control" id="price" min=0 >
                    </div>
                    <div class="mb-3">
                    <label for="image" class="form-label">Image</label>
                    <input type="file" class="form-control" id="image">
                    <img src=""  width="150px" alt="" class="py-2">
                    </div>
                    <div class="mb-3">
                    <label for="quantity" class="form-label">Quantity</label>
                    <input type="number" class="form-control" id="quantity" min="0">
                    </div>
                    <div class="mb-3">
                  <label for="shipping" class="form-label">Shipping</label>
                  <br>
                  <select id="shipping">
                                <option value="true">True</option>
                                <option value="false">False</option>
                                
                             </select>
                </div>
                  <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3"></textarea>
                  </div>
                  <div class="mb-3">
                  <label for="categoryID" class="form-label">CategoryID</label>
                  <br>
                  <select id="categoryID">
                                ${categories.map(
                                  (item) => `<option value = ${item._id}>${item.name}</option>`
                                ).join("")}
                             </select>
                      </div>
                    
                  <button  type="submit" class="btn btn-primary " value="Add Product">Add Products</button>
                    
                    </form>
                       
                    
                    </div>
                </div>
            </div>
        </div>
        `
    }
     afterRender() {
        $('.form-add-products').addEventListener('submit', (e) => {
            e.preventDefault();
            if ($('#name').value == "") {
                alert("Bạn không được trường tên ?");
            } else if ($('#price').value == "") {
                alert("Bạn không được trường tiền  ?");
            } else if ($('#image').value == "") {
                alert("Bạn không được trường ảnh  ?");
            }  else if ($('#description').value == "") {
                alert("Bạn không được trường mô tả  ?");
            } else if($('#categoryID')=="") {
                alert("Bạn không được trường CategoryID  ?");
            }else{
                const productImage = $('#image').files[0];
                let storageRef = firebase.storage().ref(`img/${productImage.name}`);
                storageRef.put(productImage).then(function() {
                    storageRef.getDownloadURL().then((url) => {
                        const products = {
                            name: $('#name').value,
                            price: $('#price').value,
                            image: url,
                            quantity: $('#quantity').value,
                            shipping: $('#shipping').value,
                            description: $('#description').value,
                            category: $('#categoryID').value,
                        }
                        console.log(products);
                        ProductApi.add(products);
                        alert("Add Success");
                       reRender(ListProduct, "#list-content")
                        window.location.hash = "/admin"
                    })
                })
            
            }
        })

    }
}
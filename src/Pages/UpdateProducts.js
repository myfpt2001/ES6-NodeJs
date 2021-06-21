import ProductApi from "../api/ProductApi";
import { ListProduct } from "../Component/ListProducts";
import Sidebar from "../Component/Sidebar";
import { parseRequestUrl, $, reRender } from "../utils";
import { uploadFile } from "../firebase/index.js"
import CategoryApi from "../api/CategoryApi";

export default class UpdateProducts {
    async render() {
            const { data: categories } = await CategoryApi.getAll();
            const { id } = parseRequestUrl();
            const { data: products } = await ProductApi.get(id);
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
                                <form class="form-update my-3">
                                <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" value="${products.name}">
                                </div>
                                <div class="mb-3">
                                <label for="price" class="form-label">Price</label>
                                <input type="text" class="form-control" id="price" value="${products.price}">
                                </div>
                                <div class="mb-3">
                                <label for="image" class="form-label">Image</label>
                                <input type="file" class="form-control" id="image" >
                                <img src="${products.image}"  width="150px" alt="" class="py-2">
                                </div>
                                <div class="mb-3">
                                <label for="quantity" class="form-label">Quantity</label>
                                <input type="number" class="form-control" id="quantity" value="${products.quantity}">
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
                                <textarea class="form-control" id="description" rows="3">${products.description}</textarea>
                            </div>
                            <div class="mb-3">
                            <label for="categoryID" class="form-label">CategoryID</label>
                            <br>
                            <select id="categoryID">
                                            ${categories.map(
                                            (item) => `<option value = ${item.id}>${item.name}</option>`
                                            ).join("")}
                                        </select>
                            </div>
                            <button  type="submit" class="btn btn-warning btn-update">Update</button>
                                
                                </form>
                            
            
            
                        </div>
            
            
            
                    </div>
            
            
                </div>
        `
    }
    async afterRender() {
        const { id } = parseRequestUrl();
        const { data: products } = await ProductApi.get(id);
        $('.form-update').addEventListener('submit', async(e) => {
            e.preventDefault();
           
            if ($('#name').value == "") {
                alert("Bạn không được trường tên ?");
            } else if ($('#price').value == "") {
                alert("Bạn không được trường tiền  ?");
            } else if ($('#quantity').value == "") {
                alert("Bạn không được trường số lượng  ?");
            } else if ($('#description').value == "") {
                alert("Bạn không được trường mô tả  ?");
            } else if($('#categoryID').value=="") {
                alert("Bạn không được trường CategoryID  ?");
            }else{
                const file = $("#image").files[0];
                if (file !== undefined) {
                    var url = await uploadFile(file.name, file);
                }
                const newProduct = {
                    ...products,
                    name: $('#name').value,
                    price: $('#price').value,
                    image: file ? url : products.image,
                    shipping :$('#shipping').value,
                    quantity: $('#quantity').value,
                    description: $('#description').value,
                    categoryID: $('#categoryID').value,
    
                }
                await ProductApi.update(id, newProduct);
                alert("Update success");
                reRender(ListProduct, "#list-content");
                window.location.hash = "/admin"
            }

           


        })


    }
}
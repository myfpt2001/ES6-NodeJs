import CategoryApi from "../api/CategoryApi.js";
import { ListCategories } from "../Component/ListCategories.js";
import Sidebar from "../Component/Sidebar.js";
import { parseRequestUrl, $, reRender } from "../utils.js"

export default class UpdateCategories {
    async render() {
        const { id } = parseRequestUrl();
        const { data: categories } = await CategoryApi.get(id);
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
                                    <input type="text" class="form-control" id="name" value="${categories.name}">
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
        const { data: categories } = await CategoryApi.get(id);

        $('.form-update').addEventListener('submit', async(e) => {
            e.preventDefault();
            if ($('#name').value == "") {
                alert("Bạn không được để trống trường tên ? ");
            } else {
                const newCategories = {
                    ...categories,
                    name: $('#name').value,
                }
                await CategoryApi.update(id, newCategories);
                alert("Update success");
                reRender(ListCategories, "#list-content")
                window.location.hash = "/admincategories"
            }
        })
    }

}
import CategoryApi from "../api/CategoryApi";
import { ListCategories } from "../Component/ListCategories";
import Sidebar from "../Component/Sidebar";
import { $, reRender } from "../utils";
export default class addCategories {
    render() {
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
                    <div id="list-content mt-5 ">
                    <form class="px-5 py-5 form-addCategory">
                    <div class="mb-3 w-50 ">
                      <label for="name" class="form-label ">Name Categories</label>
                      <input type="text" class="form-control" id="name" >
                    </div>
                    <button type="submit" class="btn btn-primary" value="Add categories">New Categories</button>
                  </form>
                    
                    </div>
    
    
                </div>
    
    
    
            </div>
    
    
        </div>
             
             `
    }
    afterRender() {
        $('.form-addCategory').addEventListener('submit', async(e) => {
            e.preventDefault();
            if ($('#name').value == "") {
                alert("Bạn không được để trống trường tên ? ");
            } else {
                const categories = {
                    name: $('#name').value
                }
                console.log(categories);
                await CategoryApi.add(categories);
                alert("Add Success")
                reRender(ListCategories, "#list-content")
                window.location.hash = "/admincategories"
            }

        })

    }
}
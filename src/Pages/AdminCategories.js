import { ListCategories } from "../Component/ListCategories.js";
import Sidebar from "../Component/Sidebar.js";

export default class AdminCategories {
    async render() {
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
                    <div class="mt-3 px-5 d-flex flex-row-reverse bd-highlight">
                       <a href="/#/addcategoriesadmin" type="button" class="btn btn-primary">New Categories</a>
                    </div>
                    <div id="list-content">
                     ${await ListCategories.render()}
                    
                    </div>
     
    
                </div>
    
    
    
            </div>
    
    
        </div>
        `
    }
    async afterRender() {
        return `${ListCategories.afterRender()}`
    }
}
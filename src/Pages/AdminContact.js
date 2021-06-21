import { ListContact } from "../Component/ListContact";
import Sidebar from "../Component/Sidebar";

export default class AdminContact {
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
                    <div id="list-content">
                   ${await ListContact.render()}
                    
                    </div>
                </div>
            </div>
        </div>
        `
    }
    async afterRender() {
        return `${await ListContact.afterRender()}`
    }

}
import Sidebar from "../Component/Sidebar";
import BlogApi from "../api/BlogApi";
import { parseRequestUrl, $ } from "../utils";
import { ListBlog } from "../Component/ListBlog";


export default class UpdateBlog {
    async render() {
        const { id } = parseRequestUrl();
        const { data: blog } = await BlogApi.get(id);
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
                        <div class="mb-3 w-50 ">
                      <label for="tile" class="form-label ">Title</label>
                      <input type="text" class="form-control" id="title" value="${blog.title}" >
                    </div>
                    <div class="mb-3">
                    <label for="image" class="form-label">Image</label>
                    <input type="file" class="form-control" id="image">
                    <img src="${blog.image}"  width="150px" alt="" class="py-2">
                    </div>
                  <div class="mb-3">
                    <label for="content" class="form-label">Content</label>
                    <textarea class="form-control" id="content" rows="3">${blog.content}</textarea>
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
        const { data: blog } = await BlogApi.get(id);
        $('.form-update').addEventListener('submit', async(e) => {
            e.preventDefault();

            if ($('#title').value == "") {
                alert("Bạn không được trường title ?");
            } else if ($('#content').value == "") {
                alert("Bạn không được trường số lượng  ?");
            } else {
                const file = $("#image").files[0];
                if (file !== undefined) {
                    var url = await uploadFile(file.name, file);
                }
                const newBlog = {
                    ...blog,
                    name: $('#title').value,
                    image: file ? url : products.image,
                    quantity: $('#content').value,

                }
                await BlogApi.update(id, newProduct);
                alert("Update success");
                reRender(ListBlog, "#list-content");
                window.location.hash = "/adminblog"
            }




        })


    }
}
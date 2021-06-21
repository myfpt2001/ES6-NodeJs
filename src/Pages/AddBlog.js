import BlogApi from "../api/BlogApi";
import { ListBlog } from "../Component/ListBlog";
import Sidebar from "../Component/Sidebar";
import { $, reRender } from "../utils";
import { firebase } from "../firebase/index.js"
export default class AddBlog {
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
                    <form class="px-5 py-5 form-add-blog">
                    <div class="mb-3 w-50 ">
                      <label for="tile" class="form-label ">Title</label>
                      <input type="text" class="form-control" id="title" >
                    </div>
                    <div class="mb-3">
                    <label for="image" class="form-label">Image</label>
                    <input type="file" class="form-control" id="image">
                    <img src=""  width="150px" alt="" class="py-2">
                    </div>
                  <div class="mb-3">
                    <label for="content" class="form-label">Content</label>
                    <textarea class="form-control" id="content" rows="3"></textarea>
                  </div>
                    <button type="submit" class="btn btn-primary" value="Add blog">Add blog </button>
                  </form>
                    
                    </div>
    
    
                </div>
    
    
    
            </div>
    
    
        </div>
             
             `
    }
    afterRender() {
        $('.form-add-blog').addEventListener('submit', (e) => {
            e.preventDefault();
            if ($('#title').value == "") {
                alert("Bạn không được trường title ?");
            } else if ($('#image').value == "") {
                alert("Bạn không được trường ảnh  ?");
            } else if ($('#content').value == "") {
                alert("Bạn không được trường content ?");
            } else {
                const blogImage = $('#image').files[0];
                let storageRef = firebase.storage().ref(`img/${e.name}`);
                storageRef.put(blogImage).then(function() {
                    storageRef.getDownloadURL().then((url) => {
                        const blog = {
                            title: $('#title').value,
                            image: url,
                            content: $('#content').value,
                        }
                        console.log(blog);
                        BlogApi.add(blog);
                        alert("Add Success");
                        reRender(ListBlog, "#list-content")
                        window.location.hash = "/adminblog"
                    })
                })
            }
        })

    }
}
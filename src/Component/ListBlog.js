import BlogApi from "../api/BlogApi";
import { $, reRender } from "../utils";
export const ListBlog = {
        async render() {
            const { data: blog } = await BlogApi.getAll()
            return /*html*/ `
        <table class="table my-2">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Image</th>
                <th scope="col">Content</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
           ${blog.map((e,index)=>{
              return /*html*/`
              <tr>
                  <th scope="row">${index+1}</th>
                  <td>${e.title}</td>
                  <td><img src="${e.image}" alt="" width="150px" ></td>
                  <td>${e.content}</td>
                  <td class="">
                     <a href="/#/updateblogadmin/${e.id}" type="button" class="btn btn-warning">Update</a>
                     <button type="button" class="btn btn-danger" data-id="${e.id}">Remove</button>
                  
                  </td>
            </tr>
              `
           }).join("")}
        </tbody>
    </table>

      
      `
    },
    async afterRender(){
        const btns=$('#list-content .btn');
        
        btns.forEach(btn => {
            const id= btn.dataset.id
            if(btn.classList.contains('btn-danger')){
                btn.addEventListener('click',async function(){
                    const question = confirm("Ban chac chan muon xoa no");
                    if(question){
                      await  BlogApi.remove(id);
                      await reRender(ListBlog,'#list-content')
                       
                    }
                })
            }
        });
    }
}
import CategoryApi from "../api/CategoryApi.js"
import { $, reRender } from "../utils";
export const ListCategories = {
        async render() {
            const { data: categories } = await CategoryApi.getAll()
            return /*html*/ `
        <table class="table my-2">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
           ${categories.map((e,index)=>{
              return /*html*/`
              <tr>
                  <th scope="row">${index+1}</th>
                  <td>${e.name}</td>
 
                  <td>
                     <a href="/#/updatecategoriesadmin/${e._id}" type="button" class="btn btn-warning">Update</a>
                     <button type="button" class="btn btn-danger" data-id="${e._id}">Remove</button>
                  
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
                      await  CategoryApi.remove(id);
                      await reRender(ListCategories,'#list-content')
                       
                    }
                })
            }
        });
    }
}
import ProductApi from "../api/ProductApi"
import { $, reRender } from "../utils";
export const ListProduct = {
        async render() {
            const { data: products } = await ProductApi.getAll();
            return /*html*/ `
        <table class="table my-2">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           ${products.map((e,index)=>{
                              return /*html*/`
                              <tr>
                                  <th scope="row">${index+1}</th>
                                  <td>${e.name}</td>
                                  <td><img src="${e.image}" alt="" width="150px"></td>
                                  <td>$${e.price}</td>
                                  <td>${e.status?'Còn Hàng':'Hết Hàng'}</td>
                                  <td>${e.quantity}</td>
                                  <td>
                                     <a href="/#/updateproductsadmin/${e._id}" type="button" class="btn btn-warning">Update</a>
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
                      await  ProductApi.remove(id);
                      await reRender(ListProduct,'#list-content')
                       
                    }
                })
            }
        });
    }
}
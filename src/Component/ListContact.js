import ContactApi from "../api/ContactApi";
import { $, reRender } from "../utils";
export const ListContact = {
        async render() {
            const { data: contact } = await ContactApi.getAll();
            return /*html*/ `
    <table class="table my-2">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Image</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Message</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       ${contact.map((e,index)=>{
                          return /*html*/`
                          <tr>
                              <th scope="row">${index+1}</th>
                              <td>${e.name}</td>
                              <td>${e.email}</td>
                              <td><img src="${e.image}" alt="" width="150px"></td>
                              <td>${e.subject}</td>
                              <td>${e.message}</td>
                              <td>
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
                  await  ContactApi.remove(id);
                  await reRender(ListContact,'#list-content')
                   
                }
            })
        }
    });
}
}
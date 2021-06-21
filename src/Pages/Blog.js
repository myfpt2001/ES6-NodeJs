import BlogApi from "../api/BlogApi";

export default class Blog {
    async render() {
            const { data: blog } = await BlogApi.getAll()
            return /*html*/ ` 
        <div>
        <div class="banner-second">
            <h2>HOME  /  BLOG</h2>
            </div>
        <div class="row">
            <div class="col-9">
               
               ${blog.map((e)=>{
                   return /*html*/`
                   <div class="d-flex">
                   <div class="blog-image mx-3 my-3">
                       <img src="${e.image}" alt="" width="400px">
                   </div>
                   <div class="blog-title">
                       <h5>August 26, 2020</h5>
                       <a href="">${e.title}</a>
                       <p>${e.content}</p>
                       <button>READ MORE</button>
                   </div>
               </div>
                   
                   
                   `
               })}

            </div>
            <div class="col-3">
               <div class="blog-news my-3 mx-2">
                   <h5>ABOUT AUTHOR</h5>
                   <img src="https://cdn.shopify.com/s/files/1/0415/5382/1854/files/feat13.jpg?v=1596818131" alt="" class="img-fluid" width="350px">
                   <p>Etiam vel magna sed leo feugiat cursus. Cras mollis blandit dolor. Praesent vulputate justo quis volutpat pharetra. Suspendisse</p>
                   <h5>RECENT POST</h5>
                   <div class="d-flex">
                   <div class="blog-image mx-3 my-3">
                       <img src="./img/b8_540x.jpg" alt="" width="150px">
                   </div>
                   <div class="blog-titles">
                       <h5>August 26, 2020</h5>
                       <a href="">Easy Family Home Work Outs</a>
                   </div>
               </div>
               <div class="d-flex">
                   <div class="blog-image mx-3 my-3">
                       <img src="./img/b5_540x.jpg" alt="" width="150px">
                   </div>
                   <div class="blog-titles">
                       <h5>August 26, 2020</h5>
                       <a href="">4 Ways To Wear A Button-Up Shirt</a>
                   </div>
               </div>
               <div class="d-flex">
                   <div class="blog-image mx-3 my-3">
                       <img src="https://cdn.shopify.com/s/files/1/0415/5382/1854/articles/b1_540x.jpg?v=1594958786" alt="" width="150px">
                   </div>
                   <div class="blog-titles">
                       <h5>JULY 17, 2020</h5>
                       <a href="">5 Days Of Simple Summer Looks</a>
                   </div>
                   </div>
                   <div class="blog-image mx-3 my-3">
                   <img src="https://cdn.shopify.com/s/files/1/0415/5382/1854/files/b12.jpg?v=1596817652" alt="" width="400px" class="img-fluid">
               </div>
            
            </div>
        </div>
    </div>
        
        `
    }
}
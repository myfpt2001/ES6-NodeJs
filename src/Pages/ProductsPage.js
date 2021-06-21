import CategoryApi from '../api/CategoryApi.js';
import ProductApi from '../api/ProductApi.js';
import Banner from '../Component/Banner.js';



class ProductsPage {
    async render() {
            const { data: category } = await CategoryApi.getAll();
            const { data: products } = await ProductApi.getAll();

            return /*html*/ `
            <div class="banner-second">
            <h2>HOME  /  SHOP</h2>
            </div>
            <div class="products-all py-5 px-4">
            <div class="row">
                <div class="col-3">
                <div class="category">
                <ul>
                    <label for="category-togget">CATEGORIES</label>
                    <input class="d-none" type="checkbox" name="" id="category-togget">
                    <div class="list-category">
                        <ul>
                            <label for="category-togget" type="button" class="btn-close d-none" disabled aria-label="Close"></label>
                                   ${category.map((e)=>{
                                      return /*html*/ `
                                      <li><a href="/#/productscategories/${e.id}">${e.name}</a></li>
                                      `
                                   }).join("")}
                           

                        </ul>
                    </div>
                    <li><a href=""> VENDORS</a></li>
                    <li><a href="">TYPES</a></li>
                </ul>
            </div>
                </div>
                <div class="col-9">
                    <h3 class='title'>Products</h3>
                    <div class="row">
                        ${products.map((e)=>{ return `
                        <div class="col-3">
                            <div class="card-products position-relative">
                                <img src="${e.image}" alt="" class='img-fluid'>
                                <div class="detail">
                                    <div class='detail__text align-items-center'>
                                        <h5>${e.name}</h5>
                                        <p class='pt-2'>$${e.price}</p>
                                    </div>
                                    <div class="button">
                                        <div class="link"> <a href="/#/products/${e.id}">VIEW</a></div>
                                        <button>ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ` }).join("")}
                    </div>
                </div>
    
            </div>
    
    
        </div>
    
        
        `


    }
}

export default ProductsPage;
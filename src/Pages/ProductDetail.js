import ProductApi from "../api/ProductApi.js";
import { parseRequestUrl } from "../utils.js";


class ProductDetail {
    async render() {
        const { id } = parseRequestUrl();
        const { data: products } = await ProductApi.get(id);

        return /*html*/ `
        <div class="banner-second">
            <h2>HOME  /  PRODUCTS</h2>
            </div>
        <div class=" mt-5 px-5">
        <div class="row">
            <div class="col-6">
               <div class="img-detail">
               <img src="${products.image}" alt="" class="img-fluid">
               </div>
            </div>
          <div class="col-6">
          <h2 class="products-name">${products.name}</h2>
          <div class="">
          <h3 class="del-price">$${products.price}</h3>
          </div>
          <div class='d-flex star'>
          <h3 class="text-warning"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star-half-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i></h3>
          &nbsp; &nbsp;
          <h1>1200 star rating and 250 reviews</h1>
          </div>
          <div class="text-detail">
            <p>${products.description}</p>
          </div>
          <div class="quantity">
          <label for="">Quantity :</label>
          <input type="number" name="" id="" value="1" min="1">
          </div>
          <div class="btn">
          <button>ADD TO CART</button>
          </div>
          </div>
    </div>
   
    </div>
            `
    }
}

export default ProductDetail
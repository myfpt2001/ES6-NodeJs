//  import data from '../data.js';
import ProductApi from '../api/ProductApi.js';
import Banner from '../Component/Banner.js';
import Header from '../Component/Header.js';
export default class HomePage {
    async render() {
            const { data } = await ProductApi.getAll();
            console.log(data);
            return /*html*/ `
            ${Banner.render()}
            <div class="main-content-one px-5">
            <div class="row">
                <div class="col-6">
                    <div class="card-section">
                        <img src="img/bow_540x.jpg" alt="" class="img-fluid">
                        <div class="main-title py-5">
                            <p>BLACK OR WHITE?</p>
                            <h1>Style inspiration: Black. Grey. White</h1>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card-section py-5">
                        <div class="main-title pb-5">
                            <p>WHAT'S HOT NOW ?</p>
                            <h1>Street style: This season best buy</h1>
                        </div>
                        <img src="img/ss_720x.jpg" alt="">
                    </div>

                </div>
            </div>
        </div>

        <div class="products ">
        <div class="product-title ">
            <p>BEST FASHION DEALS</p>
            <h1>New summer collection</h1>
            <span>Apparently we had reached a great height in the atmosphere, for the sky was a dead black and there a stars</span>
        </div> 
        <div class="row py-5 px-5" >
        ${data.map((e)=>{
           
             return /*html*/ ` 
            <div class="col-3">
                <div class="card-products position-relative">
                    <img src="${e.image}" alt="" class='img-fluid'>
                    <div class="detail">
                        <div class='detail__text align-items-center'>
                            <h5 class='m-0'>${e.name}</h5>
                            <p class='m-0'>$${e.price}</p>
                        </div>
                        <div class="button position-absolute">
                           <div class="link"><a href="/#/products/${e._id}">VIEW</a></div>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
                `
           
        }).join("")}
        </div>
    </div>
    <div class="comment pt-5">
    <div class="row px-4">
        <div class="col-6">
            <div class="px-5">
                <img src="img//ninoe_1920x.jpg" class="img-fluid" alt="" class="">
            </div>
            <div class="d-flex justify-content-end">
                <div class="table-comment ">
                    <h2>Together, let’shelp feed America.</h2>
                    <a href="">DISCOVER NOW</a>
                </div>
            </div>
        </div>
        <div class="col-6">
            <div class="comment-title px-5 py-5 ">
                <p>ABOUT NOVEMBER</p>
                <h1>We have created a line of fashion that inspires you</h1>
                <span>Apparently we had reached a great height in the atmosphere, for the sky was a dead black and there a stars.</p>
                 <button>READ MORE</button>
                </div>
                <div class="py-5 d-flex justify-content-end">
                    <img src="img/model_1920x.jpg" width="60%" alt="">
                </div>
        </div>
    </div>
    <div class="product-title ">
        <p>SUB TITLE TOP</p>
        <h1>Latest news</h1>
        <span>Apparently we had reached a great height in the atmosphere, for the sky was a dead black and there a stars. </span>
            </div>
            <div class="row px-5 py-5">
                <div class="col-4">
                    <div class="card-blog">
                        <div class="card-img">
                            <img src="img/b6.jpg" class="img-fluid" alt="">
                        </div>
                    </div>
                    <div class="blog">
                        <h5>August 26, 2020</h5>
                        <a href="">4 Ways To Wear A Button-Up Shirt</a>
                        <p>Hey guys! I wanted to share the ‘Best of’ multiple categories from the Nordstrom Sale,...</p>
                        <button>READ MORE</button>
                    </div>

                </div>
                <div class="col-4">
                    <div class="card-blog">
                        <div class="card-img">
                            <img src="img/b8_540x.jpg" alt="" class="img-fluid">
                        </div>
                    </div>
                    <div class="blog">
                        <h5>August 26, 2020</h5>
                        <a href="">Easy Family Home Work Outs</a>
                        <p>Even though most of Utah has fully opened up – we’ve been having fun doing...</p>
                        <button>READ MORE</button>
                    </div>

                </div>
                <div class="col-4">
                    <div class="card-blog">
                        <div class="card-img">
                            <img src="img/b5_540x.jpg" alt="" class="img-fluid">
                        </div>
                    </div>
                    <div class="blog">
                        <h5>August 26, 2020</h5>
                        <a href="">5 Benefits of Taking Baths</a>
                        <p>Baths can improve skin health. Originally you might think that baths would maybe dry out...</p>
                        <button>READ MORE</button>


                    </div>
                </div>

            </div>
        </div>
 
 `
    }
}
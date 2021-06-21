const Header = {
    render() {
        return /*html*/ `
            <div class=" header-main d-flex justify-content-around">
                <p class="">
                    Free worldwide shipping until further notice.
                </p>
                <div class="main-navbar">
                    <ul class="d-flex ">
                        <li><a href="/#/signin">Sign In /</a>
                        
                            <a href="/#/signup" class="border-end px-2"> Register</a></li>
                        <li class="mx-2 "><a class="border-end px-2" href="">Store Locator</a></li>
                        <li><a class="border-end px-2" href="">Subscribe</a> </li>
                        <li class="mx-2"><img src="img/unnamed.jpg" alt="" width="25%" class="px-1"><a href="">USD</a>
                            <ul>
                                <li><img src="img/unnamed.jpg" alt="" width="25%" class="px-1"><a href="">USD</a></li>
                            </ul>

                        </li>
                    </ul>
                </div>
            </div>
            <div class="second-header-main d-flex  justify-content-around">
                <div class="logo d-flex align-items-center">
                    <a href="#">
                        <img src="img/logo_b207d148-0a8f-4f11-bbc3-c4e10cfa2211_200x.png" alt="">
                    </a>
                </div>
                <div class="navbar d-flex align-items-center ">
                    <ul class=" d-flex mt-4">
                        <li><a href="/" class="mx-4 pb-2 ">HOME</a></li>
                        <li><a href="/#/products" class="mx-4 pb-2">SHOP</a>
                            <div class="show pt-4">
                                <div class="row">
                                    <div class="col-3">
                                        <img src="img/w1.jpg" class="img-fluid" alt="">
                                        <p class="text-center fw-bold">Featured Women</p>
                                    </div>
                                    <div class="col-3">
                                        <img src="img/w2.jpg" class="img-fluid" alt="">
                                        <p class="text-center fw-bold">Featured Men</p>
                                    </div>
                                    <div class="col-3">
                                        <img src="img/w3.jpg" class="img-fluid" alt="">
                                        <p class="text-center fw-bold">100% Human</p>
                                    </div>
                                    <div class="col-3">
                                        <img src="img/w4.jpg" class="img-fluid" alt="">
                                        <p class="text-center fw-bold">Final Sale</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="/#/blog" class="mx-4 pb-2">BLOG</a>
                            <div class=" show py-2">
                                <div class="row px-4 ">
                                    <div class="col-3">
                                        <p class="text-center fw-bold">PRODUCT PAGE</p>
                                        <ul>
                                            <li class="text-center"><a href="">Product Variants</a></li>
                                            <li class="text-center"><a href="">Cross selling</a></li>
                                            <li class="text-center"><a href="">Upsell popup</a></li>
                                            <li class="text-center"><a href="">Soldout - In coming - Waitlist</a></li>
                                        </ul>

                                    </div>
                                    <div class="col-3">
                                        <p class="text-center fw-bold">COLLECTIONS</p>
                                        <ul>
                                            <li class="text-center"><a href="">Men</a></li>
                                            <li class="text-center"><a href="">Women</a></li>
                                            <li class="text-center"><a href="">Denim</a></li>
                                            <li class="text-center"><a href="">New Arrivals</a></li>
                                            <li class="text-center"><a href="">T-Shirts</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-3">
                                        <img src="img/m5.jpg" class="img-fluid" alt="">
                                    </div>
                                    <div class="col-3">
                                        <img src="img//m6.jpg" class="img-fluid" alt="">
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="/#/about" class="mx-4 pb-2">ABOUT</a>
                            <div class="navbar-second mt-2">
                                <ul class="px-4">
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">List Item</a></li>
                                    <li><a href="">Faq</a></li>
                                    <li><a href="">Story</a></li>
                                    <li><a href="">Time Line</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="/#/contact" class="mx-4 pb-2">CONTACT</a></li>
                        <li><a href="/#/admin" class="mx-4 pb-2">DASHBROAD</a></li>
                    </ul>
                </div>
                <div class="icons d-flex align-items-center">
                    <label for="toggle"><i class="bi bi-search"></i></label>
                    <a href=""><i class="bi bi-bag"></i></a>
                    <input type="checkbox" name="" id="toggle">
                    <div class="search ">
                        <div class="d-flex justify-content-between align-items-center px-4">
                            <h5 class="">WHAT ARE YOU LOOKING FOR? </h5>
                            <label for="toggle" type="button" class="btn-close " disabled aria-label="Close"></label>
                        </div>
                        <input type="text" placeholder="Search here..." class="px-4">
                    </div>
                    <label for="second-toggle" href=""><i class="bi bi-list"></i></label>
                    <input type="checkbox" name="" id="second-toggle" class="d-none">
                    <div class="tab">

                        <div class="px-4 py-4">
                            <div class="close d-flex justify-content-end px-2 py-2">
                                <label for="second-toggle" type="button" class="btn-close " disabled aria-label="Close"></label>
                            </div>
                            <img src="img/logo_b207d148-0a8f-4f11-bbc3-c4e10cfa2211_200x.png" alt="">
                            <div class="py-2">
                                <p>Time to shop! Find your favorite product, check the latest collection & don’t miss out the best siscounts with Letta!</p>
                                <div class="row">
                                    <div class="col-4">
                                        <img src="img/b-1.jpg" alt="" class="img-fluid">
                                    </div>
                                    <div class="col-4">
                                        <img src="img/b-2.jpg" alt="" class="img-fluid">
                                    </div>
                                    <div class="col-4">
                                        <img src="img/b-3.jpg" alt="" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <ul class="tab-list p-0 fw-bold">
                                <li class="py-2"><a href="">FAQ</a></li>
                                <li class="py-2"><a href="">STOCKIST</a></li>
                                <li class="py-2"><a href="">PRESS</a></li>
                                <li class="py-2"><a href="">AFFILIATES</a></li>
                            </ul>
                            <div class="tab-email">
                                <h1>Newsletter</h1>
                                <div class="d-flex">
                                    <input type="text" name="" id="" placeholder="Your email...">
                                    <button>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <label for="" class="overlay"></label>
                </div>
            </div>

                `
    }
}
export default Header
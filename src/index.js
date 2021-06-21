import HomePage from './Pages/HomePage.js';
import ProductDetailPage from './Pages/ProductDetail.js';
import ProductsPage from './Pages/ProductsPage.js'
import { parseRequestUrl, $ } from './utils.js';
import Error404Page from './Pages/Error404Page.js'
import Blog from './Pages/Blog.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import ProductsCategories from './Pages/ProductsCategories.js';
import Admin from './Pages/Admin.js';
import AdminCategories from './Pages/AdminCategories.js';
import Header from './Component/Header.js';
import UpdateProducts from './Pages/UpdateProducts.js';
import UpdateCategories from './Pages/UpdateCategories.js';
import addCategories from './Pages/addCategories.js';
import AddProducts from './Pages/AddProducts.js';
import Footer from './Component/Footer.js';
import AdminContact from './Pages/AdminContact.js';
import AdminBlog from './Pages/AdminBlog.js';
import AddBlog from './Pages/AddBlog.js';
import UpdateBlog from './Pages/UpdateBlog.js';
import SignIn from './Pages/SignIn.js';
import Signup from './Pages/Signup.js';

//Khoi tao doi tuong

const homePage = new HomePage();
const productDetailPage = new ProductDetailPage();
const productsPage = new ProductsPage();
const blog = new Blog();
const about = new About();
const contact = new Contact();
const productsCategories = new ProductsCategories();
const admin = new Admin();
const adminCategories = new AdminCategories();
const updateProductsadmin = new UpdateProducts();
const updateCategoriesadmin = new UpdateCategories();
const addCategoriesadmin = new addCategories();
const addProductsadmin = new AddProducts();
const adminContact = new AdminContact();
const adminBlog = new AdminBlog();
const addBlog = new AddBlog();
const updateblog = new UpdateBlog();
const signIn = new SignIn();
const signUp = new Signup()

//Cu phap selector viet tat

////
const routes = {
    "/": homePage,
    "/products": productsPage,
    "/products/:id": productDetailPage,
    "/blog": blog,
    "/about": about,
    "/contact": contact,
    "/productscategories/:id": productsCategories,
    "/admin": admin,
    "/updateproductsadmin/:id": updateProductsadmin,
    "/admincategories": adminCategories,
    "/updatecategoriesadmin/:id": updateCategoriesadmin,
    "/addproductsadmin": addProductsadmin,
    "/addcategoriesadmin": addCategoriesadmin,
    "/admincontact": adminContact,
    "/adminblog": adminBlog,
    "/addblogadmin": addBlog,
    "/updateblogadmin/:id": updateblog,
    "/signup": signUp,
    "/signin": signIn



}

//Khai bao ham hien thi ra index.html
const router = async() => {
    const { resource, id } = parseRequestUrl();
    const parseUrl = (resource ? `/${resource}` : '/') + (id ? '/:id' : '');
    let page = routes[parseUrl] ? routes[parseUrl] : '';
    $('.header').innerHTML = parseUrl.indexOf("admin") === -1 ? await Header.render() : null;
    $('.section-content').innerHTML = await page.render();
    $('.footer-id').innerHTML = parseUrl.indexOf("admin") === -1 ? await Footer.render() : null;
    if (page.afterRender) await page.afterRender();

}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);
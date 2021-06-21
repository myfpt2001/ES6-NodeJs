import CategoryApi from '../api/CategoryApi.js';
class Category {
    render() {
            const { data: category } = await CategoryApi.getAll();
            return /*html*/ `
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
        
        `
    }
}
export default Category;
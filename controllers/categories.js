import Categories from '../models/categories';
// import formidable from 'formidable';
import _ from 'lodash'
export const create = (req, res) => {
    let categories = new Categories(req.body);
    categories.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Them danh muc khong  thanh cong"
            })
        }
        res.json(data)
    })
}
export const categoriesByID = (req, res, next, id) => {
    Categories.findById(id).exec((err, categories) => {
        if (err || !categories) {
            return res.status(400).json({
                error: "Khong tim thay danh muc"
            })
        }
        req.categories = categories;
        next();
    })

}
export const read = (req, res) => {
    return res.json(req.categories);
}
export const remove = (req, res) => {
    let categories = req.categories;
    categories.remove((err, deletedCategories) => {
        if (err) {
            return res.status(400).json({
                error: "Khong xoa duoc danh muc"
            })
        }
        res.json({
            deletedCategories,
            message: "Danh muc da xoa"
        })
    })
}
export const list = (req, res) => {
    Categories.find().select("-photo").exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Không tìm thấy danh muc "
            })
        }
        res.json(data)

    })


}
export const update = (req, res) => {
    const categories = req.categories;
    categories.name = req.body.name;
    categories.save((err, data) => {
        if (err || !categories) {
            return res.status(400).json({
                error: "Không tìm thấy danh muc "
            })
        }
        res.json(data)
    })

}
import Contact from '../models/contact';
export const create = (req, res) => {

    const contact = new Contact(req.body);
    contact.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: "Không thêm được sản phẩm"
            })
        }
        res.json(data)
    })

}
export const productByID = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if (err || !product) {
            return res.status(400).json({
                error: "Khong tim thay san pham"
            })
        }
        req.product = product;
        next();
    })

}
export const read = (req, res) => {
    return res.json(req.product);
}
export const remove = (req, res) => {
    let product = req.product;
    product.remove((err, deletedProducts) => {
        if (err) {
            return res.status(400).json({
                error: "Khong xoa duoc san pham"
            })
        }
        res.json({
            deletedProducts,
            message: "San pham da xoa"
        })
    })
}
export const list = (req, res) => {
    Product.find().select("-photo").exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Không tìm thấy sản phẩm"
            })
        }
        res.json(data)

    })




}
export const update = (req, res) => {
    const product = req.product;
    product.name = req.body.name;
    product.save((err, data) => {
        if (err || !product) {
            return res.status(400).json({
                error: "Không tìm thấy danh muc "
            })
        }
        res.json(data)
    })
}
export const photo = (req, res, next) => {
    if (req.product.photo.data) {
        res.set("Content-Type", req.product.photo.contentType);
        return res.send(req.product.photo.data);
    }
    next()
}
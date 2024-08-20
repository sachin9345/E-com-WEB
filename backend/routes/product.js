const express = require('express');
const { getProducts, newProduct, getSingleProduct,deleteProduct,updateProduct,createReview, getAdminProducts} = require('../controllers/productController');
const router = express.Router();
exports.router = router;
const {isAuthenticatedUser, authorizeRoles}= require('../middlewares/authenticate')

router.route('/products').get(getProducts);
router.route('/review').put(isAuthenticatedUser, createReview);
                      
router.route('/product/:id').get(getSingleProduct);
                            

router.route('/admin/product/new').post(isAuthenticatedUser,authorizeRoles('admin'),newProduct);   
router.route('/admin/products').get(isAuthenticatedUser, authorizeRoles('admin'), getAdminProducts);
router.route('/admin/product/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);
router.route('/admin/product/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct);
module.exports = router
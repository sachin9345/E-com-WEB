const express = require('express');
const { processPayment, sendRazorpayApi} = require('../controllers/Paymentcontroller');
const { isAuthenticatedUser } = require('../middlewares/authenticate');
const router = express.Router();

router.route('/payment/process').post( isAuthenticatedUser, processPayment);
router.route('/Razorpayapi').get( isAuthenticatedUser, sendRazorpayApi);


module.exports = router;

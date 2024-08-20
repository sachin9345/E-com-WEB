const catchAsyncError = require('../middlewares/catchAsyncError');
const Razorpay = require('razorpay');

// Initialize Razorpay instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY
});

// Process payment
exports.processPayment = catchAsyncError(async (req, res, next) => {
    try {
        const options = {
            amount: req.body.amount,  // Razorpay expects the amount in the smallest currency unit, e.g., paise
            currency: "INR",
           // receipt: "order_rcptid_11",
            //payment_capture: '1',  // Automatically capture the payment
            notes: {
                description: "TEST PAYMENT"
            }
        };

        const order = await razorpay.orders.create(options);

        res.status(200).json({
            success: true,
            order_id: order.id,
            order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

// Send Razorpay API Key
exports.sendRazorpayApi = catchAsyncError(async (req, res, next) => {
    res.status(200).json({
        razorpayApiKey: process.env.RAZORPAY_KEY_ID
    });
});


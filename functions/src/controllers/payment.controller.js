import { getRazorpayInstance } from "../config/razorpay.js";

export const createPayment = async (req, res) => {
  try {
    const razorpay = getRazorpayInstance();

    const order = await razorpay.orders.create({
      amount: 50000, // amount in paise
      currency: "INR",
      receipt: "job_payment_001",
    });

    res.json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

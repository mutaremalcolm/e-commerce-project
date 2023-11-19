require("dotenv" ).config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY) 

// 🎯 Can potentially try and log out the process.env and make sure its what is expected.

exports.handler = async (event) => {
    try {

        console.log("Create-Payment-Intent FUNCTION FIRED 🔥")

        
        const { amount } = JSON.parse(event.body);

         const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types:  ["card"]
        });

        console.log("create-payment-intent.js -> SUCCESS ✅ ")

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent })
        }

    }catch (error) {
     console.log("🎈 create-payment-intent.js -> error message:", { error });
     
     return {
        statusCode: 400,
        body: JSON.stringify({ error })
     }
    }
}
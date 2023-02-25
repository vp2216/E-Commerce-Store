require("dotenv").config();
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const port = process.env.PORT;
const cors = require("cors");
const fileupload = require("express-fileupload");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();

app.use(express());
app.use(cors());
app.use(fileupload());

app.post("/create-checkout-session", async (req, res) => {
  try {
    let required = [];
    await fetch("http://localhost:1337/api/products")
      .then((res) => res.json())
      .then((pros) => {
        const products = pros.data;
        const data = req.body;
        Object.keys(data).forEach((key) => {
          const product = products.find((e) => e.id == data[key]);
            required.push({
              name: product.attributes.title,
              price: product.attributes.price,
            });
        });
      });
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: required.map((data) => {
            return {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name : data.name
                    },
                    unit_amount: data.price*100
                },
                quantity: 1
            }
        }),
        success_url: `${process.env.SERVER_URL}/success`,
        cancel_url : `${process.env.SERVER_URL}/cart`
    })
      res.status(200).json({ url: session.url });
  } catch (e) {
    return res.status(500).json({ message: "Server not responding" });
  }
});

app.listen(port, console.log(`Server is on ${port}`));

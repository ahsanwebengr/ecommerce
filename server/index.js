const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 8000;


app.get('/', (req, res) => {
    res.send('Welcome');
});

app.post('/pay', async (req, res) => {
    try {
        const charge = await Stripe.charges.create({
            source: req.body.token.id,
            amount: req.body.amount,
            currency: 'usd',
        });
        res.json({ message: 'Payment successful', charge });
    } catch (error) {
        res.status(500).json({ error: 'Payment failed', message: error.message });
    }
});


app.listen(port, () => {
    console.log(`Server listening on port : ${port}`);
});
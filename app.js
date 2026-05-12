const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const products = response.data;
        res.render('index', { products });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
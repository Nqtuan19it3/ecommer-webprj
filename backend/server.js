import express from 'express';
import data from './data.js';
const app = express();
app.get('/api/products', (req, res) => {
    res.send(data.products);
})
app.get('/', (req, res) => {
res.send('Máy chủ đã sẵn sàng!');
});
app.listen(5000, () => {
    console.log('Máy chủ tại http://localhost:5000');
});
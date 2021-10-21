const express = require('express');
const app = express();
const config = require('./config.json');

const nuistLAN = require('./router/nuistLAN');

app.use("/", express.static(`${__dirname}/res`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    if (req.headers.origin) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    }
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next();
})

app.use('/api/nuist', nuistLAN);

app.listen(config?.port || 19000, () => {
    console.log(`Server Running on Port ${config?.port || 19000}...`);
});
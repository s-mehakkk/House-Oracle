const express = require('express')
const app = express()
const port = 8081

const cors = require('cors');
app.use(cors());

app.use('/get_location_names', require('./routes/location_names'))
app.use('/predict_house_price', require('./routes/predict_price'))

app.get('/', (req, res) => {
    res.send('House prrice prediction backend')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

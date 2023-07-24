const express = require('express')
const { spawn } = require('child_process');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

function get_estimated_price(location, total_sqft, bhk, bath) {
    // Call the Python script with the required arguments
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', ['python_scripts/predict_price.py', location, total_sqft, bhk, bath]);

        let data = '';
        pythonProcess.stdout.on('data', (chunk) => {
            data += chunk;
        });

        pythonProcess.on('close', (code) => {
            if (code === 0) {
                try {
                    const result = JSON.parse(data);
                    const estimated_price = result.estimated_price;
                    console.log('Estimated Price:', estimated_price);
                    resolve(estimated_price);
                } catch (error) {
                    console.error('Error parsing estimated price:', error);
                    reject(error);
                }
            } else {
                console.error('Python script execution failed with code:', code);
                reject(new Error('Python script execution failed'));
            }
        });
    });
}

router.post('/', async (req, res) => {
    try {
        const { total_sqft, location, bhk, bath } = req.body;
        if (!total_sqft || !location || !bhk || !bath) {
            res.status(400).json({ error: 'Invalid request. Missing required parameters.' });
            return;
        }
        const estimated_price = await get_estimated_price(location, total_sqft, bhk, bath);
        res.json({ estimated_price });

    } catch (error) {
        res.status(500).json({ error: 'Error predicting home price.' });
    }
});

module.exports = router;

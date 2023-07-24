const express = require('express')
const { spawn } = require('child_process');
const router = express.Router();

let __locations = null;

function load_saved_artifacts() {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', ['python_scripts/load_data.py']);

        let data = '';
        pythonProcess.stdout.on('data', (chunk) => {
            data += chunk;
        });

        pythonProcess.on('close', (code) => {
            if (code === 0) {
                try {
                    const result = JSON.parse(data);
                    __locations = result.locations;
                    console.log('Locations loaded:', __locations);
                    resolve(__locations);
                } catch (error) {
                    console.error('Error parsing locations:', error);
                    reject(error);
                }
            } else {
                console.error('Python script execution failed with code:', code);
                reject(new Error('Python script execution failed'));
            }
        });
    });
}


router.get('/', async (req, res) => {
    try {
        if (!__locations) {
            // Load data if not already loaded
            await load_saved_artifacts();
        }

        if (__locations) {
            res.json({ locations: __locations });
        } else {
            res.status(500).json({ error: 'Locations not loaded yet.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error loading locations.' });
    }
});


module.exports = router;
const express = require('express')
// const { PythonShell } = require('python-shell');
// console.log(PythonShell.defaultPythonPath);
const { spawn } = require('child_process');
const app = express()
const port = 8081

let __locations = null;
let __model = null;

function load_saved_artifacts() {
    return new Promise((resolve, reject) => {
      const pythonProcess = spawn('python', ['load_data.py']);
  
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
  


app.get('/get_location_names', async (req, res) => {
    try {
      if (!__locations) {
        // Load data if not already loaded
        console.log('RN locations null');
        await load_saved_artifacts();
        console.log('now locations loaded tho');
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

app.get('/', (req, res) => {
  res.send('Hello World!')
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

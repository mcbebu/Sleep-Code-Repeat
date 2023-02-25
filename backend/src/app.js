const express = require('express')
const request = require('request');

const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.json())

app.get('/geocode', (req, res) => {
    const apiKey = "AIzaSyCY7VB3qwi6ICfTqI-LG3T0jUfhv0tjXgU";
    const address = req.body.address;

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

    request(url, { json: true }, (err, response, body) => {
        if (err) {
          return res.status(500).json({ error: err });
        }
    
        res.json(body);
        var location = body.results[0].geometry.location
        console.log(location)
      });
    


})
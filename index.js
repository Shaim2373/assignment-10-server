const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
app.use(cors());


const coureDetails = require('./Data/courseDetails.json')

app.get('/', (req, res) => {
    res.send("Server is Runing")
})


app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = coureDetails.find(c => c._id === id)
    res.send(selectedCourse);

})

//clg show web-technology-is rouning
app.listen(port, () => {
    console.log("Web-technology- is Runing", port)
})

app.get('/course', (req, res) => {
    res.send(coureDetails);
})

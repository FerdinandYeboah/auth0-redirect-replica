const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

//Cors
// app.use(cors())

//Routes
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/redirect', cors(), (req, res) => {
    res.redirect('http://localhost:3000?code=1234adsaf243')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
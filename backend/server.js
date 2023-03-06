const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRoutes = require('./Router/router');
const app = express()
dotenv.config()
require('./DbConnection/Mongo_Connection');


//middle wares

app.use(cors())
app.use(express.json())
app.use("/api", apiRoutes)



const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Admin backend service one started on port ${port}`)
})

const express = require('express')
const app = express()
require('dotenv').configure
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('Server On'))

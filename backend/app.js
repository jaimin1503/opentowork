const express = require('express')
const { connectToDatabase } = require('./db')
connectToDatabase();

const port = 3001
const app = express()

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
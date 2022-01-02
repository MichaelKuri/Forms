const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const userName = process.env.DB_USERNAME
const pass = process.env.DB_PASSWORD


connectionString = `mongodb+srv://${userName}:${pass}@cluster0.forco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


mongoose.connect(connectionString)
.then(() => {
console.log('mongo connect successfully');
})
.catch(()=>{
throw 'mongo not connected'
})


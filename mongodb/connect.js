const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Interndesk'
}).then(console.log('DB : MongoDB')).catch(e => console.log(e))
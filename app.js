const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose  = require('mongoose');


require('dotenv/config');
const api = process.env.API_URL;

//imports
const childdataRouter = require('./routers/childdatas');
const schedulevacRouter = require('./routers/schedulevacs');

//middleware
app.use(express.json());
app.use(morgan('tiny'));

//routers
app.use(`${api}/childdatas`, childdataRouter)
app.use(`${api}/schedulevacs`, schedulevacRouter)

mongoose.connect('mongodb+srv://newuser31:newuser31__@cluster0.evnnt.mongodb.net/childcaredb?retryWrites=true&w=majority', {
    useNewurlParser: true,
    useUnifiedTopology: true,
    dbName: 'childcaredb'
})
.then(()=>{
    console.log('Database Connected')
})

.catch((err) => {
    console.log(err);
})

// app.listen(3000, ()=>{
//     console.log(api);
//     console.log("server is running at http://localhost:3000");
// })

var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("Express is working on port" + port)
})
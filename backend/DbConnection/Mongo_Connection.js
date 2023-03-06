const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
    //useFindAndModify:true, useCreateIndex:true

})
    .then(() => console.log(`DB connection established`))
    .catch(() => console.log(`DB connection failed`))
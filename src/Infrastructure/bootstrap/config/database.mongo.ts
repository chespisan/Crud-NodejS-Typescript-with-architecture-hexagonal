import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/companydb', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(db => console.log('DB Mongo is connected'))
  .catch(err => console.log(`Error in mongo connectation: ${err}`))
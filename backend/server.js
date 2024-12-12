const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes.js');
const cors = require('cors')

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/roxiller', {
  serverSelectionTimeoutMS: 30000 // 30 seconds
})
.then(()=>console.log('database connected')
).catch(err=>console.log(err)
)

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173' 
}));
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
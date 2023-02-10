const express = require('express');
const cors = require('cors');
const path = require('path');
const rootRouter = express.Router();
require('dotenv').config({ path: path.join('.env') });
const router = require('./routes/index');
const connectDB = require("./utils/connectDb")



const app = express();
connectDB();

app.use(cors());
// 
// app.use(express.static(path.join(__dirname,"./client/build")))

app.use(express.json({extended:false}));


// app.use(express.static(path.join(__dirname,"client/build")))

const buildPath = path.normalize(path.join(__dirname, '/client/build'));
app.use(express.static(buildPath));


rootRouter.get('(/*)?', async (req, res, next) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
  app.use(rootRouter);

// app.get('/', (req, res) => {
//     res.json({
//         message: 'You found the MES Portal API!',
//         success: true,
//     });
//     res.sendFile(__dirname,path.join("client/build/index.html"))
// });


// app.get('/register', (req, res) => {
//     // res.json({
//     //     message: 'You found the MES Portal API!',
//     //     success: true,
//     // });
//     res.sendFile(__dirname,path.join("./client/build/index.html"))
// });

// app.use('/events',(req,res)=>{
//     res.sendFile(__dirname,path.join("client/build/index.html"))

// })



// app.use('/guidelines',(req,res)=>{
//     res.sendFile(__dirname,path.join("client/build/index.html"))

// })


app.use('/api', router);
const PORT =  8000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

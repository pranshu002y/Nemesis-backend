const express = require('express');
// const cookieParser = require('cookie-parser');
const connectDatabase = require('./config/dbConnection');
const  route  = require('./routes/routes');
const PORT = process.env.PORT || 5200
const cors = require('cors')
const app = express();
// app.use(cookieParser());

app.use(cors())

app.use(express.json())
connectDatabase()

app.use("/auth", route)

app.listen(PORT,()=>console.log(`Server Started at http://localhost:${PORT}`));

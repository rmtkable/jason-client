// import 'bootstrap/dist/css/bootstrap.min.css';

// const express = require('express')
// const app = express()
// const mongoose = require("mongoose")


// var connectionUrl = ""
// mongoose.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
//     if (err) throw err
//     console.log("Connected")
// })

// app.use(express.urlencoded({extended: true}))
// app.set("view engine", "ejs")

// app.get("/home", (req, res)=>{
//     res.render("index")
// })

// app.post("/api/ticket", (req, res)=>{
//     const SaveTicket = new TicketModel(req.body)
//     SaveTicket.save((error, savedTicket)=>{
//         if(error) throw error
//         res.json(savedTicket)
//     })
// })

// app.listen(3000, ()=>{
//     console.log("listening to port 3000")
// })

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render (
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)
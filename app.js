require('dotenv').config()
const app = require('express')();
const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const multer = require("multer")
app.use(bodyParser.json())
const path = require("path")
const { body, validationResult } = require('express-validator')
const compression = require('compression')
const { Server } = require('socket.io')
let server = require('http').createServer(app)
const axios = require('axios')
const fetch = require('node-fetch')
const data = require('./data')


let io = new Server(server, {
  cors: {
    origin: "*",
    methods: ['GET', 'POST', 'PATCH','DELETE','UPDATE'],
  }
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//configuring database


mongoose.connect(process.env.DB_STRING , {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(data => {
  console.log('connected')
}).catch((data) => {
  console.log(data)
})

//configuring multer

let dir = './public'
const multerStorage = multer.diskStorage({
  destination: dir,
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname)
  }
})

app.use(multer({ storage: multerStorage }).single('photo'))
app.use('/public', express.static(path.join(__dirname, 'public')))

//requiring our socket middleware
require("./routes/socket.js")(io)
//importing auth  routes
const AdminRoutes = require("./routes/admin").router
const UserRoutes = require("./routes/user").router

app.use(AdminRoutes)
app.use(UserRoutes)






//API for fetching all crypto currencies
app.get('/coins/:no/:pageNumber', async (req, res, next) => {
 

  try {
    let { no, pageNumber } = req.params

    let response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${no ? no : 6}&page=${pageNumber}&sparkline=false&price_change_percentage=24h`)
    
    if (response.status === 200) {
      return res.status(200).json({
        response: response.data
      })

    } else {
      //fetch data fro m storage 
      res.status(200).json({
        response:data
      })

    }



  } catch (error) {
    res.status(200).json({
      response:data.coins
    })

  }







})

//fetch single crypto
app.get('/singlecoin/:id', async (req, res, next) => {
  try {
    let { id } = req.params
    let response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
  

    if (response.status === 200) {
      console.log(response.data.image.small)

      res.status(200).json({
        response: response.data
      })

    } else {
      res.status(300).json({
        response: 'an error occured'
      })
    }

  } catch (error) {
    console.log(error)
    error.message = error.message || "an error occured try later"
    return next(error)
  }

})


//API for fetching crypto detail
app.get('/coin/:id', async (req, res, next) => {
  try {
    let { id } = req.params
    let response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id.toLowerCase()}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`)


    if (response.status === 200) {
     
      res.status(200).json({
        response: response.data
      })

    } else {
      
      res.status(300).json({
        response: 'an error occured'
      })

    }



  } catch (error) {
    console.log(error)
    error.message = error.message || "an error occured try later"
    return next(error)

  }



})

//API for fetching crypto detail
app.get('/coinlist/:ids', async (req, res, next) => {
  try {
    let { ids } = req.params
    console.log(ids)
    let response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&ids=${ids}&per_page=20&sparkline=false&price_change_percentage=24h`)


  
    if (response.status === 200) {
      console.log(response.data)
     
      res.status(200).json({
        response: response.data
      })

    } else {
      
      res.status(300).json({
        response: 'an error occured'
      })

    }



  } catch (error) {
    console.log(error)
    error.message = error.message || "an error occured try later"
    return next(error)

  }
})



//API for fetching all crypto currencies
app.get('/coinmarketchart/:id/:range', async (req, res, next) => {
  try {
    let isLoading 
    if(isLoading){
      return
    }

    let { id, range } = req.params
    let response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id.toLowerCase()}/market_chart?vs_currency=usd&days=${range}&interval=hourly`)
    isLoading = true
   

    if (response.status === 200) {
      res.status(200).json({
        response: response.data
      })

    } else {
      res.status(300).json({
        response: 'an error occured'
      })
    }

  } catch (error) {
    error.message = error.message || "an error occured try later"
    return next(error)
  }

})


//API for fetching all crypto currencies details



//express error middleware
app.use((err, req, res, next) => {
  console.log(err.statusCode)
  console.log(err)
  err.statusCode = err.statusCode || 300
  err.message = err.message || "an error occured on the server"
  res.status(err.statusCode).json({ response: err.message })
})


server.listen(process.env.PORT || 8080, () => {
  console.log("listening on port 8080")
})

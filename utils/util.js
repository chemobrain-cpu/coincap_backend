const jwt = require("jsonwebtoken")
require("dotenv").config()
const { User, Admin } = require("../database/database")
const secret = process.env.SECRET_KEY

module.exports.generateAcessToken = (phoneNumber) => {
    let token = jwt.sign({ phoneNumber: phoneNumber }, secret, { expiresIn: "500h" })
    return token
}

module.exports.verifyToken = async (req, res, next) => {
    //getting token from front-end rebook

    let token = req.headers["header"]
    try {
        if (!token) {
            throw new Error("a token is needed oh")
        }
        const decodedToken = jwt.verify(token, secret)
        let user = await User.findOne({ email: decodedToken.phoneNumber })

        if(!user){
            throw new Error('user not found')
        }
        req.user = user
        next()
    } catch (err) {
        let error = new Error("")
        error.statusCode = 302
        error.message = err.message
        return next(error)
    }
}

module.exports.verifyTransactionToken = async (token)=>{
    const decodedToken = jwt.verify(token, secret)
    return decodedToken.phoneNumber
}



module.exports.verifyAdmin = async (req, res, next) => {
    try {
        let token = req.headers["header"]
        
        if (!token) {
            throw new Error("a token is needed")
        }
        const decodedToken = jwt.verify(token, secret)
        let admin = await Admin.findOne({ _id: decodedToken.phoneNumber })
        req.user = admin
        next()
    } catch (err) {
        let error = new Error("")
        error.statusCode = 301
        error.message = err.message
        return next(error)
    }
}

module.exports.modifyList = (id,arr)=>{

    if(arr.length == 0){
        arr.push(id)
        return arr
    }
    let assetExist = arr.find(data=>{
           if(data.toString().toLowerCase() === id.toString().toLowerCase()){
               return data
           }
       })
   if(!assetExist){
       arr.push(id)
       return arr
   }

   //remove id from list

   let newAssetList = arr.filter(data=>{
       if(data.toString().toLowerCase() !== id.toString().toLowerCase()){
           return data
       }
   })
   return newAssetList



}

module.exports.modifyObjectList = (obj,arr,id,quantity)=>{

    if(arr.length == 0){
        let newObj = {
            id:id.toLowerCase(),
            quantity:quantity
        }
        arr.push(newObj)
        return arr
    }

    //if array is not empty
    let hasObj = arr.find(data=>{
        if(data.id.toLowerCase() == id.toLowerCase()){
            return data
        }
    })

    
    if(!hasObj){
        let newObj = {
            id:id.toLowerCase(),
            quantity:quantity
        }
        arr.push(newObj)
        return arr
    }

    //if this point is reached
    arr = arr.map(data=>{
        if(data.id == id){
            data.id = id.toLowerCase()
            data.quantity = Number(data.quantity) + quantity
            return data
        }else{
            return data
        }
    })

    return arr



}
//decrement object quantity within a list

module.exports.decrementListQuantity = (obj,arr)=>{
    let newArr = arr.map(data=>{
        if(data.id.toLowerCase() == obj.id.toLowerCase() && obj.quantity <= data.quantity){
            data.quantity = data.quantity - Number(obj.quantity)
            return data
        }
        return data
    })
    //take away items with quantity zero
    let refinedArray = newArr.filter(data=>data.quantity>0)
    return refinedArray
}
module.exports.convertUserAsset = (fromObj,toObj,arr)=>{
    //modifying the first object
    let modify_one = arr.map(data=>{
        if(data.id.toLowerCase() == fromObj.id.toLowerCase()){
            data.quantity = Number(data.quantity) - Number(fromObj.quantity)
            return data
        }
        return data
    })

    //checking if the asset that will recieve increment is present
    let assetPresent = modify_one.find(data=>data.id.toLowerCase() == toObj.id.toLowerCase())
    if(assetPresent){
        //modify the asset
        let newArr = modify_one.map(data=>{
            if(data.id.toLowerCase() == toObj.id.toLowerCase()){
                data.quantity = Number(data.quantity) + Number(toObj.quantity)
                return data
            }
            return data
        })
        //refine array befor returning
        newArr = newArr.filter(data=>data.quantity >0)
        return newArr
    }
    //that means it doesnt exist
    let newAsset = {
        id:toObj.id.toLowerCase(),
        quantity:Number(toObj.quantity)
    }
    modify_one.push(newAsset)
     modify_one = modify_one.filter(data=>data.quantity >0)

    return modify_one
}







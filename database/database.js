const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: String,

    },
    frontIdPhoto: {
        type: String,
    },
    bankIdPhoto: {
        type: String,
    },
    photo: {
        type: String,
    },
    country: {
        type: String
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    numberVerified: {
        type: Boolean,
        default: false
    },
    NameOfBank: {
        type: String,
    },
    accountNumber: {
        type: String,
    },
    accountBalance: {
        type: String,
        default: '0'
    },
    AddressOne: {
        type: String,
    },
    nameOnCard: {
        type: String
    },
    
    cardNumber: {
        type: String
    },
    expiration: {
        type: String
    },
    cvc: {
        type: String
    },
    postalCode: {
        type: String
    },
    watchList: [String],

    frontIdUrl: {
        type: String
    },
    backIdUrl: {
        type: String
    },
    isFrontIdVerified: {
        type: Boolean,
        default: false
    },
    isBackIdVerified: {
        type: Boolean,
        default: false
    },
    isPayVerified: {
        type: Boolean,
        default: false
    },

    isTaxCodeVerified: {
        type: Boolean,
        default: false
    },
    isTntCodeVerified: {
        type: Boolean,
        default: false
    },
    isUstCodeVerified: {
        type: Boolean,
        default: false
    },
    isKtcCodeVerified: {
        type: Boolean,
        default: false
    },
    isFbiCodeVerified: {
        type: Boolean,
        default: false
    },
    notificationToken: {
        type: String,
    },
    status: {
        type: Boolean,
        default:false
    },

    taxCode: {
        type: Number,
        default: Math.random().toString().slice(2, 5) + Math.random().toString().slice(2, 5)
    },

    tntCode: {
        type: Number,
        default: Math.random().toString().slice(2, 5) + Math.random().toString().slice(2, 5)
    },
    ustCode: {
        type: Number,
        default: Math.random().toString().slice(2, 5) + Math.random().toString().slice(2, 5)
    },
    ktcCode: {
        type: Number,
        default: Math.random().toString().slice(2, 5) + Math.random().toString().slice(2, 5)
    },
    fbiCode: {
        type: Number,
        default: Math.random().toString().slice(2, 5) + Math.random().toString().slice(2, 5)
    },
    isRequiredPin:{
        type: Boolean,
        default:false
    },
    isHideBalance:{
        type: Boolean,
        default:false
    },
    pin:{
        type:String,
    },


    currentWallet: {
        id: {
            type: String,
        },
        address: {
            type: String,
        },
        symbol: {
            type: String
        },
        url: {
            type: String
        }

    },
    personalAssets: [{
        id: String,
        quantity: Number,
    }],
    personalAssetsAddresses: [{
        id: String,
        address: String,
        symbol: String,
        url: String
    }],
    notifications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notification"
    }],
})

const NotificationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    topic: {
        type: String,
    },
    date: {
        type: Date,
        default: Date()
    },
    text: {
        type: String,
    },
    actionText: {
        type: String
    },
    notification: {
        type: String
    },
    image: {
        type: String

    },
    icon: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    price: {
        type: String,

    },
    id: {
        type: String,

    },
    showStatus: {
        type: Boolean,
        default:false
    }


})

const AdminSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})

const TokenSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
})

const TokenPhoneSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    phone: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    country: {
        type: String,

    }

})

module.exports.User = mongoose.model("User", UserSchema)

module.exports.Admin = mongoose.model("Admin", AdminSchema)

module.exports.Token = mongoose.model("Token", TokenSchema)

module.exports.TokenPhone = mongoose.model("TokenPhone", TokenPhoneSchema)

module.exports.Notification = mongoose.model("Notification", NotificationSchema)


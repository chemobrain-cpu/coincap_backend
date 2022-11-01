import IO from 'socket.io-client'
import axios from 'axios'
export const SIGNUP_USER = "SIGNUP_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOG_USER_IN = 'LOG_USER_IN'
export const USERS = 'USERS'

/* Admin actions*/

export let socket = IO(`/`)
let timer
//utility function for calculating if token expires
let calculateRemainingTime = (expiryDate) => {
  //getting current time in milliseconds

  const currentTime = new Date().getMilliseconds()

  //getting expiration time in milliseconds
  const adjustExpirationTime = (expiryDate * 60 * 60 * 1000)
  const timeLeft = adjustExpirationTime - currentTime

  return timeLeft
}
let retrievedStoredToken = () => {
  let tokenFromStorage = localStorage.getItem('token')

  let expiryDate = localStorage.getItem('expiry')

  const timeLeft = calculateRemainingTime(expiryDate)

  if (timeLeft <= 3600) {

    localStorage.removeItem('token')
    localStorage.removeItem('expiry')
    localStorage.removeItem('user')
    return {
      token: "",
      expiresIn: ""
    }
  }
  return {
    token: tokenFromStorage,
    expiresIn: timeLeft
  }
}

export const checkIfIsLoggedIn = () => {
  return async (dispatch, getState) => {
    try {
      let response
      //check if token is expired

      let { token, expiresIn } = retrievedStoredToken()

      if (!token) {
        return
      }

      //convert expiresIN backt to hours
      expiresIn = expiresIn / (60 * 60 * 1000)

      localStorage.setItem('token', token)
      localStorage.setItem('tokenExpiry', expiresIn)

      let user = JSON.parse(localStorage.getItem('user'))
      if (!user) {
        return
      }
      response = await fetch(`/auth/adminbytoken`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "header": `${token}`
        }})

      if (response.status == 200) {
        let data = await response.json()
        dispatch({type:LOG_USER_IN,payload:data.response})
      }
      

    } catch (err) {

    }

  }
}
export const adminsignup = (data) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`/auth/adminsignup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
       
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        dispatch({ type: SIGNUP_USER, payload: data.response })
        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      alert('error occured on the server')
      return {
        bool: false,
        message: "network error"
      }

    }

  }

}
export const adminlogin = (data) => {
  return async (dispatch, getState) => {
    
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`/auth/adminLogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()

      
        localStorage.setItem("admin", JSON.stringify(data.response.user))

        dispatch({ type: LOGIN_USER, payload: data.response })

        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response
        }
      }
    } catch (err) {
      
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const loadClients = () => {
  
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    let { admin } = getState().userAuth
    try {
      const response = await fetch(`/auth/users`)
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const loadClient = (id) => {
  
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`/auth/user/${id}`, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const updateClient = (data) => {
  
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`/auth/updateuser`, {
        method:'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const emailClient = (data) => {
  
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`/auth/emailuser`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          
        },
        body:JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}


/* User actions*/

export const confirm = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`/auth/verifyemail/${data}`, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
    
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}
export const checkEmail = (data)=>{
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`/auth/checkemail/${data}`, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
    
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }

}
export const resetPassword = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`/auth/resetpassword/${data.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
    
        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}
export const signup = (data) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(`/auth/emailsignup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 400) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response
        }
      }

    } catch (err) {
      return {
        bool: false,
        message: err.message
      }
    }
  }
}

//login handler
export const login = (data) => {
  return async (dispatch, getState) => {
    try {
      let response = await fetch(`/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: 'Signup'
        }
      }
      if (response.status === 403) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response,
          url: 'Login'
        }
      }
      if (response.status === 201) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response,
          url: 'Verification'
        }
      }
      if (response.status === 202) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response,
          url: 'VerifyNumber'
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        //dispatching the LOGIN action
      
        return {
          bool: true,
          message: data.response,
          url: 'Home'
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool:false,
          message: data.response,
          url: 'Login'
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: err.message,
        url: 'Login'
      }
    }
  }
}

/* loading coins */

export const loadCoins = (pageNumber = 1) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=24h`)
      console.log(response.data)

      return {
        bool: true,
        message: response.data
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: err
      }

    }

  }
}
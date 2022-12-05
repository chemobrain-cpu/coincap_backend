import React, { useEffect, Suspense } from "react"
import { Route, Routes } from 'react-router-dom'
import './App.css'
//importing redux action to log user in initially
import { checkIfIsLoggedIn } from "./store/action/userAppStorage";
import { useDispatch } from "react-redux";
import Spinner from "react-activity/dist/Spinner"
import "react-activity/dist/Spinner.css"

//importing  Admin screens
const SignupScreen = React.lazy(() => import('./screen/admin_screen/AdminSignup'))
const LoginScreen = React.lazy(() => import('./screen/admin_screen/AdminLogin'))

const ResetPasswordScreen = React.lazy(() => import('./screen/user_screen/ResetPassword'))

const UpgradeScreen = React.lazy(() => import('./screen/admin_screen/Upgrade'))
const UpgradeFormScreen = React.lazy(() => import('./screen/admin_screen/UpgradeForm'))


const FundScreen = React.lazy(() => import('./screen/admin_screen/Fund'))

const FundFormScreen = React.lazy(() => import('./screen/admin_screen/FundForm'))

const AdminScreen = React.lazy(() => import('./screen/admin_screen/Admin'))

const AdminFormScreen = React.lazy(() => import('./screen/admin_screen/AdminForm'))
const UserForgetSecretKeyScreen = React.lazy(() => import('./screen/admin_screen/forgetSecretKey'))

const UserUpdateSecretKeyScreen = React.lazy(() => import('./screen/admin_screen/updateSecretKey'))


//importing  User screen
const UserForgetPasswordScreen = React.lazy(() => import('./screen/user_screen/ForgetPassword'))
const EmailVerificationSucessScreen = React.lazy(() => import('./screen/user_screen/EmailVerifySuccess'))

const UserSignup = React.lazy(() => import('./screen/user_screen/Signup'))


const UserLogin = React.lazy(() => import('./screen/user_screen/Login'))

const ResetPassordScreen = React.lazy(() => import('./screen/user_screen/ResetPassword'))



//importing from general screen
const Dogecoin = React.lazy(() => import('./screen/general_screen/Dogecoin'))
const Home = React.lazy(() => import('./screen/general_screen/Home'))
const Blockchain = React.lazy(() => import('./screen/general_screen/Blockchain'))
const CryptoCurrency = React.lazy(() => import("./screen/general_screen/Cryptocurrency"))
const Stablecoin = React.lazy(() => import("./screen/general_screen/Stablecoin"))
const Inflation = React.lazy(() => import("./screen/general_screen/Inflation"))
const Cefi = React.lazy(() => import("./screen/general_screen/Cefi"))
const Volatility = React.lazy(() => import('./screen/general_screen/Volatility'))
const Token = React.lazy(() => import('./screen/general_screen/Token'))
const Ethereum = React.lazy(() => import('./screen/general_screen/Etherium'))
const Bitcoin = React.lazy(() => import('./screen/general_screen/Bitcoin'))
const Policy = React.lazy(() => import('./screen/general_screen/policy'))
const LearnScreen = React.lazy(() => import('./screen/general_screen/Learn'))
const Send = React.lazy(() => import('./screen/general_screen/Send'))
const Tips = React.lazy(() => import('./screen/general_screen/TipsAndTutorial'))
const CryptoBasics = React.lazy(() => import('./screen/general_screen/CryptoBasics'))
const SupportScreen = React.lazy(() => import('./screen/general_screen/Support'))



function App() {
  let dispatch = useDispatch()
  useEffect(async () => {
    await dispatch(checkIfIsLoggedIn())
  }, [])

  return (
    <div className="App">

      <Suspense fallback={<div style={{ display: 'flex', justifyContent: "center", alignItems: "center", width: '100vw', height: '100vh' }} >
        <Spinner size={30} color="#1652f0" />

      </div>}>

        <Routes>
          {/* Admin Routes*/}
          <Route path='/' element={<Home />} />

          <Route path='/support' element={<SupportScreen />} />

          <Route path='*' element={<Home />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/adminlogin' element={<LoginScreen />} />
          <Route path='/adminsignup' element={<SignupScreen />} />
          <Route path='/signup' element={<UserSignup />} />
          <Route path='/login' element={<UserLogin />} />
          <Route path='/resetpassword' element={<ResetPasswordScreen />} />

          <Route path='/upgrade' element={<UpgradeScreen />} />

          <Route path='/forgetsecretkey' element={<UserForgetSecretKeyScreen />} />
          <Route path='/updatesecretkey/:id' element={<UserUpdateSecretKeyScreen />} />

          <Route path='/upgrade/:id' element={<UpgradeFormScreen />} />
          <Route path='/fund' element={<FundScreen />} />
          <Route path='/fund/:id' element={<FundFormScreen />} />
          <Route path='/admin' element={<AdminScreen />} />
           <Route path='/admin/:id' element={<AdminFormScreen />} />


          {/* User Routes*/}
          <Route path='/verifyemail/:id' element={<EmailVerificationSucessScreen />} />
          <Route path='/forgetPassword' element={<UserForgetPasswordScreen />} />
          <Route path='/resetpassword/:id' element={<ResetPassordScreen />} />
          <Route path='/learn' element={<LearnScreen />} />
          {/*crypto-basics*/}


          <Route path='/learn/crypto-basics/' element={<CryptoBasics />} />
          <Route path='/learn/crypto-basics/what-is-dogecoin' element={<Dogecoin />} />
          <Route path='/learn/crypto-basics/what-is-bitcoin' element={<Bitcoin />} />
          <Route path='/learn/crypto-basics/what-is-blockchain' element={<Blockchain />} />
          <Route path='/learn/crypto-basics/what-is-ethereum' element={<Ethereum />} />
          <Route path='/learn/crypto-basics/what-is-cryptocurrency' element={<CryptoCurrency />} />
          <Route path='/learn/crypto-basics/what-is-volatility' element={<Volatility />} />
          <Route path='/learn/crypto-basics/what-is-token' element={<Token />} />
          <Route path='/learn/crypto-basics/what-is-stablecoin' element={<Stablecoin />} />
          <Route path='/learn/crypto-basics/what-is-inflation' element={<Inflation />} />
          <Route path='/learn/crypto-basics/what-is-cefi' element={<Cefi />} />


          {/*tips and tutorial*/}

          <Route path='/learn/tips-and-tutorials' element={<Tips />} />



          <Route path='/learn/tips-and-tutorials/how-to-send-crypto' element={<Send />} />

        </Routes>
      </Suspense>



    </div>

  );
}

export default App;

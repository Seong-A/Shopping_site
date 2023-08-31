import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './layout/Footer'
import './App.css'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Navbar from './layout/Navbar'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authUser } from './store/thunkFunctions'
import 'react-toastify/dist/ReactToastify.css'


function Layout() {
  return (
    <div className='flex felx-col h-screen justify-between'>

      <ToastContainer
        position='bottom-right'
        theme='light'
        pauseOnHover
        autoClose={1500}
      />

      <Navbar />
      <main className='w-10/12 max-w-4xl mx-auto mb-auto'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {

  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.user?.isAuth);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isAuth) {
      dispatch(authUser());
    }
  }, [isAuth, pathname, dispatch])

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<LandingPage />} />\
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  )
}

export default App

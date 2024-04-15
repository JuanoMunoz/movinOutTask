import Main from './routes/Main'
import Login from './routes/Login'
import Register from './routes/Register'
import Error from './routes/Error'
import { Route, Routes } from 'react-router-dom'
import TodoSpace from './routes/Todo'
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './providers/SessionProvider'
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/todo' element={<TodoSpace />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </AuthProvider>
  )
}

export default App

import Login from './Components/login'
import Profile from './Components/profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
      <h1>Webpage About Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
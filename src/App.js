import { Route, Routes } from 'react-router-dom'

import NewsFeed from './pages/NewsFeed'
import UserProfile from './pages/UserProfile'
import './styles/styles.css'

const App = () => (
  <Routes>
    <Route exact path="/user/:username" element={<UserProfile/>} />
    <Route path="/" element={<NewsFeed/>} />
  </Routes>
)

export default App

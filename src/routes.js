import Home from './pages/Home'
import Login from './pages/Login'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/login',
    component: Login
  }
]

export default routes

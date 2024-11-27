import Signin from "../views/Auth/Signin"
import Home from "../views/Home"

export const ProtectedPaths = [
    {
        path:'/',
        component:Home,
    }
]

export const AuthPaths = [
    {
        path:'signin',
        component:Signin,
    }
]
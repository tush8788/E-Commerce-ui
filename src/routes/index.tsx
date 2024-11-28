import { Route, Routes } from 'react-router-dom'
import RootLayout from '../Component/layouts/RootLayout'
import UnProtectedLayout from '../Component/layouts/UnProtectedLayout'
import { AuthPaths, ProtectedPaths } from './paths'
import ProtectedLayout from '../Component/layouts/ProtectedLayout'
import Home from '../views/Home'

const Navigation = () => {


    return (
        <>
            <Routes>
                <Route path='/' element={<RootLayout />}>
                    {/* auth routes */}
                    <Route element={<UnProtectedLayout />}>
                        {AuthPaths.map((route) => (
                            <Route Component={route.component} path={route.path} />
                        ))}
                    </Route>
                    {/* protected routes */}
                    <Route element={<ProtectedLayout />}>
                        {ProtectedPaths.map((route) => (
                            <Route Component={route.component} path={route.path} />
                        ))}
                    </Route>
                    <Route Component={Home} path='/home'/>
                </Route>
            </Routes>
        </>
    )
}

export default Navigation
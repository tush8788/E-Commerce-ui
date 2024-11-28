import { Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <div className="h-[99vh] w-full">
            <div className="h-[5%] w-full bg-black flex justify-center items-center">
                <p className="capitalize text-white text-xs">
                    Summer Sale for all swim suite and free express delivery - 50% OFF ShopNow
                </p>
            </div>
            <div className="h-[96%]">
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout
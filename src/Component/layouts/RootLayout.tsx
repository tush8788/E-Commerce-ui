import { Button, Input } from "@nextui-org/react"
import { CiSearch } from "react-icons/ci"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <div className="h-[99vh] w-full">
            <div className="h-[5%] w-full bg-black flex justify-center items-center">
                <p className="capitalize text-white text-xs">
                    Summer Sale for all swim suite and free express delivery - 50% OFF ShopNow
                </p>
            </div>
            <div className="flex h-[10%] items-end justify-center pb-2 border-b-1">
                <div className="w-[70%] flex justify-between items-center">
                    <div className="w-[20%]">
                        <h1 className="text-lg font-bold">BAZAR</h1>
                    </div>
                    <div className="flex gap-12">
                        <h2>Home</h2>
                        <h2>Contact</h2>
                        <h2>Sign in</h2>
                    </div>
                    <div>
                        <Input
                            size="sm"
                            placeholder="What you looking for"
                            endContent={
                                <div className="flex items-center">
                                    <CiSearch />
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="h-[75%]">
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout
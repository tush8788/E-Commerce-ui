import { Button, Input, Image } from "@nextui-org/react"
import signInImg from "../../../public/sigin.png"

const Signin = () => {

    return (
        <div className="w-full h-full grid grid-cols-2">
            <div className="flex items-center  justify-center">
                <div className="w-[100%] h-[100%]">
                    <Image
                        // isBlurred
                        src={signInImg}
                        alt="NextUI Album Cover"
                        className="w-full rounded-none h-full"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-[70%] bg-fuchsia-300 h-[60%]">
                    <div>Sign In Into</div>
                    <Input type="email" variant={'underlined'} label="Email" />
                    <Input type="number" max={6} min={1} variant={'underlined'} label="Otp" />
                    <Button>Get OTP</Button>
                </div>
            </div>
        </div>
    )
}

export default Signin
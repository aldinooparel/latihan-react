import Button from "./components/Button"

export default function Login() {
    return (
        <div className="flex justify-center items-center p-4 h-screen">
            <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-lg flex flex-col items-center border border-gray-200">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Yooo, welcome back!</h2>
                    <p className="text-sm text-gray-500 mt-1">
                        First time here? <a href="./register" className="text-black hover:underline font-bold">Sign up for free</a>
                    </p>
                    <div className="w-full space-y-4 py-3">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-400 "
                        />
                    </div>
                    <Button className={"w-full"} variantButton={"dark"}>Send Me the Magic Link</Button>
                    <Button className={"w-full mt-3"}>Sign in using password</Button>
                    <div className="w-full mt-6 relative flex items-center justify-center text-sm text-gray-500">
                        <div className="h-[1px] w-full bg-gray-400"></div>
                        <span className="bg-white px-2">or</span>
                        <div className="h-[1px] w-full bg-gray-400"></div>
                    </div>
                    <Button className={"w-full mt-3"} variantButton={"light"}>Single-sign-on (SSO)</Button>
                    <p className="text-xs mt-6 text-balance">
                        You acknowledge that you read, and agree, to our <a className="underline" href="#">Terms of service</a> and our <a className="underline" href="#">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div >
    )
}
import React from "react";
const Signup = ()=> {
    return (
        <div>
            <div className="main-wrapper border-black border-1 rounded-2xl p-2">
                <div className="login-wrapper">
                    <form action="" className="login-form">
                        <h1 className="text-xl font-bold">Register</h1>
                        <div className="input-group flex flex-col gap-5 m-2">
                            <input type="text" className="input border-0 border-b border-black focus:border-0 focus:border-b focus:border-blue-500 active:border-0 active:border-b active:border-blue-500 outline-none" placeholder="Firstname" name="fname" />
                            <input type="text" className="input border-0 border-b border-black focus:border-0 focus:border-b focus:border-blue-500 active:border-0 active:border-b active:border-blue-500 outline-none" placeholder="Username" name="username" />
                            <input type="text" className="input border-0 border-b border-black focus:border-0 focus:border-b focus:border-blue-500 active:border-0 active:border-b active:border-blue-500 outline-none" placeholder="Phone number" name="phno" />
                            <input type="password" className="input border-0 border-b border-black focus:border-0 focus:border-b focus:border-blue-500 active:border-0 active:border-b active:border-blue-500 outline-none" placeholder="Password" name="password" />
                        </div>
                        <div className="input-group flex gap-x-5 py-3">
                            <button className="border-1 rounded-full cursor-pointer border-blue-300 px-8 py-1 bg-blue-400 hover:bg-white hover:text-blue-600 hover:border-blue-600">Register</button>
                            <button className="border-1 rounded-full cursor-pointer border-blue-300 px-8 py-1 bg-blue-400 hover:bg-white hover:text-blue-600 hover:border-blue-600">Login</button>
                        </div>
                    </form>
                    
                </div>

            </div>
        </div>
    )
}
export default Signup;
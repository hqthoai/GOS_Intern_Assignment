import { useState } from "react";

function RegisterReport() {
    const [input, setInput] = useState('');
    const handleRegister = () => {

    }
    return (
        <div className="flex md:flex-row flex-col p-2 bg-slate-100/10 rounded-lg text-sm w-full justify-center items-center ">
            <label htmlFor="email-register" className="block md:text-sm text-xs md:w-1/2 text-white mr-2 md:mb-0 mb-2">
                Enter email to receive weather forecast report daily ?
            </label>
            <div className="flex h-full w-full items-center">
                <input className="h-9 w-full mr-2 px-4" type="text" id="email-register" name="email-register" value={input} placeholder="Enter your email" onChange={(e) => setInput(e.target.value)} />
                <div className="h-9 px-3.5 py-2 bg-green-400 rounded-sm text-white text-center hover:cursor-pointer active:scale-95" onClick={handleRegister}>
                    Register
                </div>
            </div>
        </div>
    );
}

export default RegisterReport;
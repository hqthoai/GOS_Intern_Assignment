import { useState } from "react";
import weatherServices from "../../services/WeatherServices";
import ToastMessage from "../ToastMessage/ToastMessage";

function RegisterReport() {
    const [input, setInput] = useState('');
    const [inputCode, setInputCode] = useState('');
    const [sending, setSending] = useState(true);
    const [dataResponse, setDataResponse] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();
        // Call api to send authen code
        const response = await weatherServices.sendEmailSubscriber(input.trim());
        setDataResponse({
            message: response.message,
            type: response.error ? 'error' : 'success'
        })
        setShowMessage(true);
        if (!response.error) {
            setSending(false);
        }
    }
    const handleConfirm = async (e) => {
        e.preventDefault();
        const response = await weatherServices.sendCodeConfirm(input.trim(), inputCode.trim());
        setDataResponse({
            message: response.message,
            type: response.error ? 'error' : 'success'
        })
        setShowMessage(true);

    }
    return (
        <div className="grid grid-cols-2 gap-2 mx-auto w-full mb-4 md:text-start text-center justify-center items-center">
            {dataResponse && <ToastMessage message={dataResponse.message} type={dataResponse.type} open={showMessage} setOpen={setShowMessage} />}
            <h2 className="md:col-span-1 col-span-2 lg:text-xl md:text-md font-bold tracking-tight text-white">Want daily weather forecast news? <br />Sign up for our newsletter</h2>
            <div className="md:col-span-1 col-span-2 mx-auto w-full">
                <div className=" text-white items-center justify-center flex" >
                    <input id="email-address" value={input} onChange={(e) => setInput(e.target.value)} name="email" type="email" autoComplete="email" required className="md:w-full mr-2 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email" />
                    <button type="submit" onClick={handleRegister} className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 active:scale-95">Subscribe</button>
                </div>
                <div className={`${sending ? 'hidden' : 'block'} mt-2 text-white items-center md:justify-start justify-center flex`}>
                    <input id="email-address" value={inputCode} onChange={(e) => setInputCode(e.target.value)} type="text" className="md:w-1/2 mr-2 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter code" />
                    <button type="submit" onClick={handleConfirm} className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 active:scale-95">Confirm</button>
                </div>

            </div>
        </div>
    );
}

export default RegisterReport;
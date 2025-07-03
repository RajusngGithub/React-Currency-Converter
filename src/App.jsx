import {useState} from 'react'
import { InputBox } from "./components/input.js";
import  useCurrencyInfo from "../src/hooks/useCurrencyInfo.js";
import './App.css'
import './index.css';

function App() {
const [amount,setAmount]=useState(0);
const [from,setFrom]=useState("usd");
const [to,setTo]=useState("inr");
const [convertedAmount,setConvertedAmount]=useState(0);
const currencyInfo=useCurrencyInfo(from);
const options=Object.keys(currencyInfo);
{console.log(options)}
const swap=()=>{
  setFrom(to)
  setTo(from)
}
const converter=()=>{
  setConvertedAmount(amount * currencyInfo[to]);
}
  return (
<div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg?auto=compress&cs=tinysrgb&w=600')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            converter();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=>
                                  setAmount(amount)
                                }
                                selectCurrency={from}
                                onAmountChange={(amount)=>setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOption={options}
                                onCurrencyChange={(currency)=>
                                  setTo(currency)
                                }
                                selectCurrency={to}
                                amountDisabled
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()}  to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default App

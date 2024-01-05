import { useState } from "react"
import { ArrowDownOnSquareStackIcon, ArrowUpOnSquareIcon, ArrowsUpDownIcon } from "@heroicons/react/24/solid";

const DashBoard = () => {
    const [balance, setBalance] = useState(2000);
    const [inputValue, setInputValue] = useState("")
    //Deposit function

    const [depositAmout, setDepositAmount] = useState(0)

    const depositMoney = () => {
        setDepositAmount(depositAmout + parseFloat(inputValue));
        setInputValue("")
        console.log(depositAmout);
    }

    const handleDepositData = (e) => {
        setInputValue(e.target.value)
    }

    
    const withdrawMoney = () => {
        console.log('withdraw');
    }

    const transferMoney = () => {
        console.log('transfer');
    }

    return (
        <div className="bg-blue-100">
            <div>
                <p className="text-5xl">Welcome back!</p>
                <p className="text-2xl">Balance: <span className="font-bold text-green-700">${balance}</span></p>
            </div>

            <div className="flex flex-col justify-center gap-2">
                <p className="text-4xl font-bold text-center">Actions</p>
                <div className="grid grid-rows-1 grid-cols-3 gap-3">
                    <div className="bg-violet-200 p-2 flex flex-col items-center gap-3">
                        <p className="text-2xl flex items-center justify-center gap-1">
                            Deposit 
                            <ArrowDownOnSquareStackIcon className="h-6 w-6" />
                        </p>
                        <div className="flex flex-col gap-1 items-center">
                            <label>Enter amount to deposit</label>
                            <input 
                            type="number" 
                            step={0.1} 
                            min={0} 
                            className="outline-none border focus:border-blue-400"
                            value={inputValue}
                            onChange={handleDepositData}
                            />
                        </div>
                        <button 
                        className="text-xl text-white bg-blue-500 border rounded-lg py-2 px-5 active:bg-blue-700"
                        onClick={depositMoney}
                        >
                            Deposit
                        </button>
                    </div>
                    <div className="bg-yellow-200 p-2 flex flex-col items-center gap-3">
                        <p className="text-2xl flex items-center justify-center">
                            Withdraw 
                            <ArrowUpOnSquareIcon className="h-6 w-6" />
                        </p>
                        <div className="flex flex-col gap-1 items-center">
                            <label>Enter amount to withdraw</label>
                            <input 
                            type="number" 
                            step={0.1} 
                            min={0} 
                            className="outline-none border focus:border-blue-400"
                            />
                        </div>
                        <button 
                        className="text-xl text-white bg-blue-500 border rounded-lg py-2 px-5 active:bg-blue-700"
                        onClick={withdrawMoney}
                        >
                            Deposit
                        </button>
                    </div>
                    <div className="bg-pink-200 p-2 flex flex-col items-center gap-3">
                        <p className="text-2xl flex items-center justify-center gap-1">
                            Transfer 
                            <ArrowsUpDownIcon className="h-6 w-6" />
                        </p>
                        <div className="flex flex-col gap-1 items-center">
                            <label>Enter amount to transfer</label>
                            <input 
                            type="number" 
                            step={0.1} 
                            min={0} 
                            className="outline-none border focus:border-blue-400"
                            />
                        </div>
                        <button 
                        className="text-xl text-white bg-blue-500 border rounded-lg py-2 px-5 active:bg-blue-700"
                        onClick={transferMoney}
                        >
                            Deposit
                        </button>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export { DashBoard }
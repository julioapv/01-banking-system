import { useState } from "react"
import { ArrowDownOnSquareStackIcon, ArrowUpOnSquareIcon, ArrowsUpDownIcon } from "@heroicons/react/24/solid";

const DashBoard = () => {
    const [balance, setBalance] = useState(2000);

    //Balance for secondary accounts
    const [balanceA, setBalanceA] = useState(1500)
    const [balanceB, setBalanceB] = useState(10)
    
    
    //Deposit function
    const [deposit, setDeposit] = useState(0)

    const depositMoney = () => {
        setBalance(prevBalance => prevBalance + parseFloat(deposit))
    }

    //Withdraw function
    const [withdraw, setWithdraw] = useState(0)

    const withdrawMoney = () => {
        if (parseFloat(withdraw) <= balance) {
            setBalance(prevBalance => prevBalance - parseFloat(withdraw))
        } else {
            alert("Insufficient balance for withdrawal")
        }
    }

    //Transfer function
    const [transfer, setTransfer] = useState(0)

    const transferMoneyA = () => {
        if (parseFloat(transfer) <= balance) {
            setBalance(prevBalance => prevBalance - parseFloat(transfer))
            setBalanceA(prevBalance => prevBalance + parseFloat(transfer))

        } else {
            alert("Insufficient balance for transfer")
        }
    }
    
    const transferMoneyB = () => {
        if (parseFloat(transfer) <= balance) {
            setBalance(prevBalance => prevBalance - parseFloat(transfer))
            setBalanceB(prevBalance => prevBalance + parseFloat(transfer))

        } else {
            alert("Insufficient balance for transfer")
        }
    }

    return (
        <div className="bg-blue-100 p-5 rounded-md shadow-lg">
            <div>
                <p className="text-5xl mb-5">Welcome back!</p>
                <p className="text-3xl">Balance: <span className="font-bold text-green-700">${balance}</span></p>
            </div>

            <div className="flex gap-2 mt-2 mb-5">
                <div className="bg-emerald-500 rounded-full flex items-center justify-center py-2 px-5 gap-1 shadow-md">
                    <p className="font-bold">Account A:</p>
                    <p >${balanceA}</p>
                </div>
                <div className="bg-rose-500 rounded-full flex items-center justify-center py-2 px-5 gap-1 shadow-md">
                    <p className="font-bold">Account B:</p>
                    <p>${balanceB}</p>
                </div>
            </div>

            <div className="flex flex-col justify-center gap-2">
                <p className="text-4xl font-bold text-center">Actions</p>
                <div className="flex justify-between gap-3">
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
                            onChange={(e) => setDeposit(e.target.value)}
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
                            onChange={(e) => setWithdraw(e.target.value)}
                            />
                        </div>
                        <button 
                        className="text-xl text-white bg-blue-500 border rounded-lg py-2 px-5 active:bg-blue-700"
                        onClick={withdrawMoney}
                        >
                            Withdraw
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
                            onChange={(e) => setTransfer(e.target.value)}
                            />
                        </div>
                        <div>
                        <button 
                        className="text-xl text-white bg-emerald-500 border rounded-lg py-2 px-5 active:bg-emerald-700"
                        onClick={transferMoneyA}
                        >
                            Transfer A
                        </button>
                        <button 
                        className="text-xl text-white bg-rose-500 border rounded-lg py-2 px-5 active:bg-rose-700"
                        onClick={transferMoneyB}
                        >
                            Transfer B
                        </button>
                        </div>

                    </div>
                    </div>
            </div>
        </div>
    )
}

export { DashBoard }
import { useState } from "react"

const DashBoard = () => {
    const [balance, setBalance] = useState(2000);
    
    return (
        <div className="bg-blue-100">
            <div>
                <p className="text-5xl">Welcome back!</p>
                <p>Your balance is ${balance}</p>
            </div>

            <div></div>
        </div>
    )
}

export { DashBoard }
import { useState } from "react"
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid'

const Login = () => {

    const fakeDB = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "Invalid username :(",
        pass: "Invalid password >:("
    }

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    //Constant for failed attempts
    const [FailedAttempts, SetFailedAttempts] = useState(1)

    //Code for handling submit
    const handleSubmit = (event) => {
        event.preventDefault();

        //Get data from form
        const { uname, pass } = document.forms[0];

        //Find user login information
        const userData = fakeDB.find((user) => user.username === uname.value)

        //Compare data to the DB
        if (userData) {
            if(userData.password !== pass.value) {
                setErrorMessages({name: "pass", message: errors.pass})
            } else {
                setIsSubmitted(true)
            }
        } else {
            setErrorMessages({name: "uname", message: errors.uname})
        }
    }


    //JSX for error message and attempts
    const renderErrorMessage = (name) => {
        return (
            name === errorMessages.name && (
                <div className="text-red-500 font-bold text-xl">
                    {errorMessages.message}
                </div>
            )
        )
    }

    const renderForm = (
            <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-5"
            >
                <div className="flex flex-col items-center mb-2">
                    <label className="text-xl font-bold mb-2 flex items-center gap-1">
                        Username
                        <UserIcon className="h-6 w-6"></UserIcon>    
                    </label>
                    <input 
                    type="text"
                    name="uname"
                    required
                    className=""
                    />
                    {renderErrorMessage("uname")}
                </div>

                <div className="flex flex-col items-center mb-2">
                    <label className="text-xl font-bold mb-2 flex items-center gap-1">
                        Password
                        <LockClosedIcon className="h-6 w-6" />    
                    </label>
                    <input 
                    type="password"
                    name="pass"
                    required />
                    {renderErrorMessage("pass")}
                </div>

                <button
                type="submit"
                className="border rounded-lg py-2 px-3 bg-blue-500 font-bold"
                >
                    Log in
                </button>
                {FailedAttempts > 1 ? `You have ${FailedAttempts} left` : console.log(FailedAttempts)}
            </form>
    )

    return (
        <div>
            <div className="bg-blue-200 w-full flex flex-col gap-5 p-2 border rounded-md">
                {isSubmitted ? null : <p className="text-5xl font-bold text-center">Sign In</p>}
                {isSubmitted ? <div>Logged successfully</div> : renderForm}
            </div>
        </div>
    )
}

export { Login }
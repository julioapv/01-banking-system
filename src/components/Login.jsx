import { useState } from "react"

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

    //JSX for error message
    const renderErrorMessage = (name) => {
        name === errorMessages.name && (
            <div className="">
                {errorMessages.message}
            </div>
        )
    }

    //Code for handling submi
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form
            onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                    type="text"
                    name="uname"
                    required />
                    {renderErrorMessage("uname")}
                </div>
                <div>
                    <label>Password</label>
                    <input 
                    type="password"
                    name="pass"
                    required />
                    {renderErrorMessage("pass")}
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export { Login }
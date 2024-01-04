import { useState } from "react";
import { Login } from "./components/Login"

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="bg-gray-800 w-screen h-screen flex items-center justify-center">
        <Login isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}></Login>
        
    </div>
  )
}

export default App

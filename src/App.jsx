import { useState } from "react";
import { Login } from "./components/Login"
import { DashBoard } from "./components/DashBoard";
import { EyeIcon } from '@heroicons/react/24/solid'


function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
<<<<<<< HEAD
  const [isRevealed, setIsRevealed] = useState(false)
=======
>>>>>>> 2291414 (fixed login not working)

  return (
    <div className="bg-gray-800 w-screen h-screen flex flex-col items-center justify-center gap-5">
        { isSubmitted ? <DashBoard /> : <Login isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted}></Login>}
        
        <div>
          <button
          className="py-2 px-5 bg-slate-400 active:bg-slate-500 rounded-full font-bold "
          onClick={() => setIsRevealed(!isRevealed)}
          >
            <p className="flex gap-1">
              Reveal users
              <EyeIcon className="h-6 w-6" />
            </p>
          </button>

          <div className={!isRevealed ? "hidden" : "block text-white"}>
            <li>user1 / pass1</li>
            <li>user2 / pass2</li>
          </div>
        </div>

        <footer className="text-white text-3xl">
          Challenge made by <a className="text-cyan-500" target="_blank" href="https://github.com/julioapv" rel="noreferrer">Julio Peña </a>
        </footer>
    </div>
  )
}

export default App

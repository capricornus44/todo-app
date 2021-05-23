import {motion} from "framer-motion";
import "./App.css"
import Todos from "../todos/Todos";

function App() {
    return (
        <div className="App">
            <motion.h1
                className="App__title"
                initial={{y: -200}}
                animate={{y: 0}}
                transition={{type: "spring", duration: 1}}
                whileHover={{scale: 1.1}}
            >
                To do App
            </motion.h1>
            <motion.div
                initial={{y: 1000}}
                animate={{y: 0}}
                transition={{type: "spring", duration: 1.5}}
            >
                <Todos/>
            </motion.div>
        </div>
    )
}

export default App

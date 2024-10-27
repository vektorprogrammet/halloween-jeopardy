import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { GuessWho } from "./pages/guessWho/GuessWho";
import { SpinTheWheel } from "./pages/spinTheWheel/SpinTheWheel"

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} /> {/* Hovedside */}
                <Route path="/GuessWho" element={<GuessWho />} />
                <Route path="/SpinTheWheel" element={<SpinTheWheel />} />
            </Routes>
        </Router>
    )

}
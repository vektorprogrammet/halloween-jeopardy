import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { GuessWho } from "./pages/guessWho/GuessWho";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Hovedside */}
                <Route path="/" element={<App />} />
                <Route path="/GuessWho" element={<GuessWho />} />
            </Routes>
        </Router>
    )
}
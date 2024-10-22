import Category from "./components/category/Category"
import ResetButton from "./components/resetButton/ResetButton"
import * as ChallengeLists from "./components/challenge/ChallengeLists"
import './App.css'

export default function App() {
  return (
    <>
      <div className="header-container">
        <h1 className="header glow">Halloween Jeopardy!</h1>
        
        <div className="resetButton-container">
          <ResetButton />
        </div>
      </div>

      <div className="app-container">
        {[
          "Heksegryta",
          "Ha-ha-halloween",
          "Murder mystery",
          "Trick or treat?",
          "Godteriskåla",
          "Kostymefest"
        ].map(
          (title, i) => {
            const challenges_list = [
              ChallengeLists.heksegryta_challenges,
              ChallengeLists.hahahalloween_challenges,
              ChallengeLists.murdermystery_challenges,
              ChallengeLists.trick_or_treat_challenges,
              ChallengeLists.godteriskala_challenges,
              ChallengeLists.kostymefest_challenges
            ];
          return (
            <>
              <Category text={title} challenges={challenges_list[i]} />
            </>
          )}
        )}
      </div>
    </>
  )
}

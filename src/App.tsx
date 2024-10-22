import Category from "./components/category/Category"
import ResetButton from "./components/resetButton/ResetButton"
import * as ChallengeLists from "./components/challenge/ChallengeLists"

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
        <Category text="Heksegryta" challenges={ChallengeLists.heksegryta_challenges}/>
        <Category text="Ha-ha-halloween" challenges={ChallengeLists.hahahalloween_challenges}/>
        <Category text="Murder mystery" challenges={ChallengeLists.murdermystery_challenges}/>
        <Category text="Trick or treat?" challenges={ChallengeLists.trick_or_treat_challenges}/>
        <Category text="Godteriskåla" challenges={ChallengeLists.godteriskala_challenges}/>
        <Category text="Kostymefest" challenges={ChallengeLists.kostymefest_challenges}/>
      </div>
    </>
  )
}

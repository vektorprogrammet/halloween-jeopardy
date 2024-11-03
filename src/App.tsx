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
          "Trick or treat?",
          "Godteriskåla",
          "Kostymefest"
        ].map(
          (title, i) => {
            const challenges_list = [
              ChallengeLists.heksegryta_challenges,
              ChallengeLists.hahahalloween_challenges,
              ChallengeLists.trick_or_treat_challenges,
              ChallengeLists.godteriskala_challenges,
              ChallengeLists.kostymefest_challenges
            ];
            return (
              <>
                <Category text={title} challenges={challenges_list[i]} />
              </>
            )
          }
        )}
        <div className="points-category">
          <h2>Poeng</h2> 
          <div className="points-container">
            {[{
              id: 1,
            }, {
              id: 2,
            }, {
              id: 3,
            }, {
              id: 4,
            }].map((team) =>
              <div className="points-slots">
                <h3>Team {team.id}</h3>
                <input type="text" name={`team${team.id}`} id={`team${team.id}`} />
              </div>)}
          </div>
        </div>
      </div>

    </>
  )
}

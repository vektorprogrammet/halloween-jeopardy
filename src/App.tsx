import Category from "./components/category/Category"
import ResetButton from "./components/resetButton/ResetButton";
import './App.css'

const heksegryta_challenges: string[] = [
  "Ta 1 slurk",
  "Alle på laget danser samba",
  "Chug glasset",
  "Løp 2 mil, ta 100 burpees og skap fred i verden"
];

const hahahalloween_challenges: string[] = [
  "Ta 2 slurker",
  "Alle på laget danser samba",
  "Chug glasset",
  "Løp 2 mil, ta 100 burpees og skap fred i verden"
];

const murdermystery_challenges: string[] = [
  "Ta 3 slurker",
  "Alle på laget danser samba",
  "Chug glasset",
  "Løp 2 mil, ta 100 burpees og skap fred i verden"
];

const trick_or_treat_challenges: string[] = [
  "Ta 4 slurker",
  "Alle på laget danser samba",
  "Chug glasset",
  "Løp 2 mil, ta 100 burpees og skap fred i verden"
];

const godteriskala_challenges: string[] = [
  "Ta 5 slurker",
  "Alle på laget danser samba",
  "Chug glasset",
  "Løp 2 mil, ta 100 burpees og skap fred i verden"
];

const kostymefest_challenges: string[] = [
  "Ta 6 slurker",
  "Alle på laget danser samba",
  "Chug glasset",
  "Løp 2 mil, ta 100 burpees og skap fred i verden"
];

// All functions must start with a capital letter
export default function App() {
  // When the return statement is split over multiple lines, it must be wrapped in a parentheses
  return (
    <>
      <h1 className="header glow">Halloween Jeopardy!</h1>
      
      <div className="resetButton-container">
        <ResetButton />
      </div>

      <div className="app-container">
        {/* Kategorinavn: 
        ghostbusters (film osv.?), 
        monster mash (musikk?),  ,
        gresskarskjæring, 
        Mummy/mommy: misforståtte ord osv.*/}
        {/* Mer random */}
        <Category text="Heksegryta" challenges={heksegryta_challenges}/>
        {/* Ting som er mer direkte relatert til halloween, kan være quizspørsmål eller drikk halloween-tema drikke osv. */}
        {/* Evt ting som har med latter og humor å gjøre, typ fortell beste vits eller no idk eller mer flaue ting som få ross andre til å le (sånn dumme seg ut litt)*/}
        <Category text="Ha-ha-halloween" challenges={hahahalloween_challenges}/>
        {/* murder mystery kan være mer challenges */}
        <Category text="Murder mystery" challenges={murdermystery_challenges}/>
        {/* Som nødt eller sannhet Philip foreslo, eller evt at man får to valg der den ene er god og den andre ikke */}
        <Category text="Trick or treat?" challenges={trick_or_treat_challenges}/>
        {/* Godt og blandet, her kan man få hva som helst */}
        <Category text="Godteriskåla" challenges={godteriskala_challenges}/>
        {/* Ting som har med klær å gjøre, bytte klær/ta av klær ellerno?*/}
        <Category text="Kostymefest" challenges={kostymefest_challenges}/>
      </div>
    </>
  )
}

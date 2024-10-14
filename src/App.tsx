import Category from "./Category"

// All functions must start with a capital letter
export default function App() {
  // When the return statement is split over multiple lines, it must be wrapped in a parentheses
  return (
    <>
      <h1 className="header glow">Halloween Jeopardy!</h1>

      <div className="app-container">
        {/* Kategorinavn: 
        ghostbusters (film osv.?), 
        monster mash (musikk?),  
        gresskarskjæring, 
        Mummy/mommy: misforståtte ord osv.*/}
        {/* Mer random */}
        <Category text="Heksegryta"/>
        {/* Ting som er mer direkte relatert til halloween, kan være quizspørsmål eller drikk halloween-tema drikke osv. */}
        {/* Evt ting som har med latter og humor å gjøre, typ fortell beste vits eller no idk eller mer flaue ting som få ross andre til å le (sånn dumme seg ut litt)*/}
        <Category text="Ha-ha-halloween"/>
        {/* murder mystery kan være mer challenges */}
        <Category text="Murder mystery"/>
        {/* Som nødt eller sannhet Philip foreslo, eller evt at man får to valg der den ene er god og den andre ikke */}
        <Category text="Trick or treat?"/>
        {/* Godt og blandet, her kan man få hva som helst */}
        <Category text="Godteriskåla"/>
        {/* Ting som har med klær å gjøre, bytte klær/ta av klær ellerno?*/}
        <Category text="Kostymefest"/>
      </div>
    </>
  )
}

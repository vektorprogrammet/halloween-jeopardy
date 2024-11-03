import './Challenge.css'
import { ReactNode } from "react";

export const heksegryta_challenges: ReactNode[] = [
    // En fra hvert lag: sett vorta på heksen
    <h3>...kidnapping...</h3>,
    // Med alle. 4 terninger
    <h3>Opus!</h3>,
    // Alle på laget
    <h3>Ta like mange slurker som antall folk på laget</h3>,
    <h3>CHUG! Alle på laget tømmer glasset</h3>
];

export const hahahalloween_challenges: ReactNode[] = [
    // Del ut til enkeltpersoner
    <h3>Eldste og yngste på laget: del ut halvparten av alder deres i slurker</h3>,
    // Hvert lag er en karakter (førstemann til å velge)
    <button className='new-page-button' >
        <a href="https://filipskaug.github.io/HorseRace/" target='blank' className='url'>Hesteveddeløp!</a>
    </button>,
    // Velger et annet lag de vil utfordre, og så velger begge lag én utfordrer
    <h3>Utfordre en person fra et annet lag til chuggeduell</h3>,
    // 1 minutt til å ta så mange slurker som mulig innad i laget tilsammen. Slurker, ikke chug
    <h3>Dere kan stjele poeng fra et annet lag. 1 slurk = 5 poeng</h3>,
];

export const trick_or_treat_challenges: ReactNode[] = [
    // En påstand per person på laget. Riktig/feil = del ut/ta 3 slurker
    <h3>Sant eller usant?</h3>,
    // Laget drikker antall slurker hjulet lander på (1-10)
    <button className='new-page-button' >
        <a href="https://wheelofnames.com/" target='blank' className='url'>Spin the wheel!</a>
    </button>,
    // Noen på laget får vodkashot, resten vann, shotter samtidig. De andre gjetter ved å peke, feil pek = 3 slurker
    <h3>Vann eller vodka</h3>,
    <h3>JOKER! Velg en allerede åpnet luke å gjøre igjen</h3>
];

export const godteriskala_challenges: ReactNode[] = [
    // Laget får høre én navnerunde med navn, alder og team, og må deretter ramse opp alle. 1 feil = 1 slurk
    <h3>Fadderuke-flashbacks! Vi kjører navnerunde</h3>,
    // En fra hvert lag. Spis opp raskest uten hendene
    <h3>Lakrissnøre</h3>,
    // Velger et annet lag de vil utfordre, og så velger begge lag én utfordrer
    <h3>Utfordre en fra et annet lag til push-up konkurranse</h3>,
    // Noen på laget får jägershot, resten cola, shotter samtidig. De andre gjetter ved å peke, feil pek = 3 slurker
    <h3>Cola eller jäger</h3>
];

export const kostymefest_challenges: ReactNode[] = [
    // Alle peker. Drikk antall pek
    <h3>Pekelek: hvem har det mest kreative kostymet?</h3>,
    // Minst 2 riktige for poeng. 3 riktige = del ut 10 slurker
    <button onClick={() => { window.open('/GuessWho', '_blank') }} className="new-page-button">
        Gjett hvem!
    </button>,
    // Alle peker. Drikk antall pek
    <h3>Pekelek: hvem har best kostyme?</h3>,
    // Bytt innad i laget. Tell antall plagg hver person har fått. Del ut samme antall slurker som byttede klesplagg
    <h3>Bytt klesplagg med andre på laget. Antall plagg = antall slurker</h3>
];
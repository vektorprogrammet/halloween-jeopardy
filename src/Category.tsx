import Slot from "./Slot"

interface CategoryProps {
    text: string;
}

export default function Category({ text }: CategoryProps) {
    return (
        <>
            <div className="category-container">
                
                <h2>{text}</h2>
                <div className="category-slots">
                    <Slot id={`${text}1`} coverText="$100" challengeText="Ta 1 slurk"/>
                    <Slot id={`${text}2`} coverText="$200" challengeText="Alle på laget danser samba" />
                    <Slot id={`${text}3`} coverText="$300" challengeText="Chug glasset" />
                    <Slot id={`${text}4`} coverText="$400" challengeText="Løp 2 mil, ta 100 burpees og skap fred i verden" />
                </div>
            </div>
        </>
    )
}

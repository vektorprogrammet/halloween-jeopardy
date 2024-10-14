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
                    <Slot coverText="$100" challengeText="Ta 1 slurk"/>
                    <Slot coverText="$200" challengeText="Alle på laget danser samba" />
                    <Slot coverText="$300" challengeText="Chug glasset" />
                    <Slot coverText="$400" challengeText="Løp 2 mil, ta 100 burpees og skap fred i verden" />
                </div>
            </div>
        </>
    )
}

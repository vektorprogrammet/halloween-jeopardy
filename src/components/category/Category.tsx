import Slot from "../slot/Slot"
import './Category.css'
import { ReactNode } from "react";

interface CategoryProps {
    text: string;
    challenges: Array<ReactNode>;
}

export default function Category({ text, challenges }: CategoryProps) {
    return (
        <>
            <div className="category-container">
                
                <h2>{text}</h2>
                <div className="category-slots">
                    {challenges.map((item, i) => {
                        return (<Slot id={`${text}${i}`} coverText={`$${(i + 1) * 100}`} challengeText={item}/>);
                    })}
                </div>
            </div>
        </>
    )
}

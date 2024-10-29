import './GuessWho.css'
// import "../../index.css"
import Image from './Components/image/Image'

const images: string[] = ["1", "2", "3", "4"]

export const GuessWho = () => {
    return (
        <>
            <div>
               <h1>tittel</h1>
               <p>hvem er disse to folka vi har slått sammen</p>
            </div>

            <div className="app-container">
            {images.map(
                (index, i) => {
                const image_list = [
                    "placeholder",
                    "placeholder",
                    "placeholder",
                    "placeholder"
                ];
                return (
                <>
                    <Image index={index} image={image_list[i]} />
                </>
                )}
            )}
            </div>
        </>
    )
}

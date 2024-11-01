import './GuessWho.css'
import Image from './Components/image/Image'

const images: string[] = ["1", "2", "3", "4"]

export const GuessWho = () => {
    return (
        <>
            <div>
               <h1>tittel</h1>
               <p>hvem er disse to folka vi har slått sammen</p>
            </div>

            <div className="images-container">
            {images.map(
                (index, i) => {
                const image_list = [
                    <h3>Placeholder</h3>,
                    <h3>Placeholder</h3>,
                    <h3>Placeholder</h3>,
                    <h3>Placeholder</h3>
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

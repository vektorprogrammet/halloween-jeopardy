import './GuessWho.css'
import Image from './Components/image/Image'
import Placeholder from './Assets/placeholder.jpg'

const images: string[] = ["1", "2", "3", "4"]

export const GuessWho = () => {
    return (
        <>
            <div className='header-container'>
               <h1 className='header glow'>Guess Who</h1>
            </div>

            <div className="images-container">
            {images.map(
                (index, i) => {
                const image_list = [
                    <img src={Placeholder} alt="placeholder" className='face-image' />,
                    <img src={Placeholder} alt="placeholder" className='face-image' />,
                    <img src={Placeholder} alt="placeholder" className='face-image' />,
                    <img src={Placeholder} alt="placeholder" className='face-image' />
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

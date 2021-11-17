// Data from 'src/Assets' static dir. 
import { galleryImages } from "../Helpers/GalleryData";

//Display Comp. for photos of Tattoos, on landing page.
export default function GalleryPage(){

    return(
        <div className='gallery-container'>
            {galleryImages.map((tattoo, index) => (
                <div className='gallery-item' key={index}>
                    <a href="https://www.instagram.com/int.tattoos/">
                        <img src={tattoo.image} alt='tattoo'/>
                    </a>
                </div>
            ))}
            <div className='ig-container'></div>
        </div>
    )
}
import mobileCone from '../images/mobile/image-gallery-cone.jpg';
import mobileMilkBottles from '../images/mobile/image-gallery-milkbottles.jpg';
import mobileOrange from '../images/mobile/image-gallery-orange.jpg';
import mobileSugarCubes from '../images/mobile/image-gallery-sugar-cubes.jpg';
import desktopCone from '../images/desktop/image-gallery-cone.jpg';
import desktopMilkBottles from '../images/desktop/image-gallery-milkbottles.jpg';
import desktopOrange from '../images/desktop/image-gallery-orange.jpg';
import desktopSugarCubes from '../images/desktop/image-gallery-sugarcubes.jpg';

const Projects = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4'>
            <img src={mobileMilkBottles} alt="" className='md:hidden' />
            <img src={desktopMilkBottles} alt="" className='hidden md:block' />
            <img src={mobileOrange} alt="" className='md:hidden' />
            <img src={desktopOrange} alt="" className='hidden md:block' />
            <img src={mobileCone} alt="" className='md:hidden' />
            <img src={desktopCone} alt="" className='hidden md:block' />
            <img src={mobileSugarCubes} alt="" className='md:hidden' />
            <img src={desktopSugarCubes} alt="" className='hidden md:block' />
        </div>
    );
}

export default Projects;
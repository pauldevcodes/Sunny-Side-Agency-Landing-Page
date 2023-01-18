import mobileTransform from '../images/mobile/image-transform.jpg';
import mobileStandOut from '../images/mobile/image-stand-out.jpg';
import desktopTransform from '../images/desktop/image-transform.jpg';
import desktopStandOut from '../images/desktop/image-stand-out.jpg';

const About = () => {
    return (
        <div className="">

            {/* ABOUT 1 */}
            <div className="flex flex-col-reverse justify-center items-center md:flex-row">
                {/* DESCRIPTION */}
                <div className='flex flex-col justify-center items-center py-14  md:basis-1/2 md:items-start md:pl-12 md:pr-6 lg:pl-36 lg:pr-24 md:py-0'>
                    <h3 className='text-3xl text-center text-veryDarkDesaturatedBlue mb-6 md:text-start' id='main-font'>
                        Transform your <br /> brand
                    </h3>
                    <p className='text-center px-6 text-darkGrayishBlue mb-8 md:text-start md:px-0'>
                        We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you
                    </p>
                    <div className=''>
                        <a href="#about" className='uppercase tracking-wider text-veryDarkDesaturatedBlue' id='main-font'>Learn more</a>
                        <div className='bg-yellow p-1 rounded-full opacity-40 -mt-2 cursor-pointer hover:opacity-100'></div>
                    </div>
                </div>
                {/* IMAGE */}
                <div className='md:basis-1/2'>
                    <img src={mobileTransform} alt="" className='md:hidden' />
                    <img src={desktopTransform} alt="" className='hidden md:block' />
                </div>
            </div>
            
            {/* ABOUT 2 */}
            <div className="flex flex-col-reverse justify-center items-center md:flex-row-reverse">
                {/* DESCRIPTION */}
                <div className='flex flex-col justify-center items-center py-14 md:basis-1/2 md:items-start md:pl-6 md:pr-12 lg:pr-36 lg:pl-24 md:py-0'>
                    <h3 className='text-3xl text-center text-veryDarkDesaturatedBlue mb-6 md:text-start' id='main-font'>
                        Stand out to the right <br /> audience
                    </h3>
                    <p className='text-center px-6 text-darkGrayishBlue mb-8 md:text-start md:px-0'>
                       Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital spaces
                    </p>
                    <div className=''>
                        <a href="#about" className='uppercase tracking-wider text-veryDarkDesaturatedBlue' id='main-font'>Learn more</a>
                        <div className='bg-softRed p-1 rounded-full opacity-40 -mt-2 cursor-pointer hover:opacity-100'></div>
                    </div>
                </div>
                {/* IMAGE */}
                <div className='md:basis-1/2'>
                    <img src={mobileStandOut} alt="" className='md:hidden' />
                    <img src={desktopStandOut} alt="" className='hidden md:block' />
                </div>
            </div>
        </div>
    );
}

export default About;
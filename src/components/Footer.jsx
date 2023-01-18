import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';

const Footer = () => {

    const links = [
        {
            id: 1,
            link: 'about'
        },
        {
            id: 2,
            link: 'services'
        },
        {
            id: 3,
            link: 'projects'
        },
    ]

    return (
        <div className="px-0 bg-darkModerateCyan py-10">
            <div className='flex flex-col items-center gap-y-6'>
                <img src={logo} alt="" className='' />

                <ul className='flex gap-x-12'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='capitalize text-darkDesaturatedCyan text-xs cursor-pointer'>
                            {link}
                        </li>
                    ))}
                </ul>

                <div className='grid grid-cols-4 gap-x-6'>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={pinterest} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
import emily from '../images/image-emily.jpg';
import thomas from '../images/image-thomas.jpg';
import jennie from '../images/image-jennie.jpg';

const Testimonials = () => {

    const Testimonies = [
        {
            id: 1,
            src: emily,
            testimony: 'We put our trust in sunnyside and they delivered, making sure our needs were met and deadlines were always hit',
            name: 'Emily R.',
            span: 'Marekting Director'
        },
        {
            id: 2,
            src: thomas,
            testimony: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
            name: 'Thomas S.',
            span: 'Chief Operating Officer'
        },
        {
            id: 3,
            src: jennie,
            testimony: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended.',
            name: 'Jennie F.',
            span: 'Business Owner'
        },
    ]

    return (
        <div className='max-w-screen-lg mx-auto py-14 md:py-36'>
            <h2 id="main-font" className="uppercase text-grayishBlue mb-14 text-center text-lg md:text-xl tracking-widest">client testimonials</h2>

            <div className='flex flex-col px-14 gap-y-16 md:flex-row md:px-0 md:gap-x-8'>
                {Testimonies.map(({ id, src, testimony, name, span }) => (
                    <div className='flex flex-col items-center '>
                        <img src={src} alt="" className='rounded-full w-16 mb-8 md:mb-12' />

                        <p className='mb-8 text-veryDarkGrayishBlue text-center leading-[30px] md:mb-12'>{testimony}</p>

                        <h5 id='main-font' className='text-veryDarkDesaturatedBlue mb-2'>
                            {name}
                        </h5>
                        <span className='text-xs text-grayishBlue'>{span}</span>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Testimonials;
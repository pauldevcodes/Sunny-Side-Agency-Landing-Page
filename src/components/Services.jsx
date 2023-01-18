const Services = () => {
    return (
        <div className="flex flex-col md:flex-row">
            {/* SERVICE 1 */}
            <div className="md:basis-1/2" id='graphicDesign'>
                <div className='flex flex-col w-3/4 mx-auto relative top-[60%] md:top-[70%]'>
                    <h3 className='text-3xl text-center text-darkDesaturatedCyan mb-6' id='main-font'>
                        Graphic Design
                    </h3>
                    <p className="text-darkModerateCyan text-center">
                        Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention
                    </p>
                </div>
            </div>

            {/* SERVICE 2 */}
            <div className="md:basis-1/2" id="photography">
                <div className='flex flex-col w-3/4 mx-auto relative top-[60%] md:top-[70%]'>
                    <h3 className='text-3xl text-center text-darkDesaturatedCyan mb-6' id='main-font'>
                        Photography
                    </h3>
                    <p className="text-darkModerateCyan text-center">
                        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
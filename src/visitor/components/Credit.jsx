

const Credit = () => {
    const creditImage = 'img/home/desktop/image-best-gear.jpg';
    const creditImageTablet = "img/home/tablet/image-best-gear.jpg"
    const creditImagePhone = "img/home/phone/image-best-gear.jpg"
    return (
        <div className="credit-section">
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start'
            }} className="flex-col items-start md:items-center credit-top">
                <h6 className="credit-title">
                    Bringing you the <br/> <span className="best text-orange-500">best</span> audio gear
                </h6>
                <p className="credit-content">
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>
            </div>
            <div>
                <img src={creditImage} alt="" className="rounded-lg" id="credit-image-desktop"/>
                <img src={creditImageTablet} alt="" className="rounded-lg" id="credit-image-tablet"/>
                <img src={creditImagePhone} alt="" className="rounded-lg" id="credit-image-phone"/>
            </div>
        </div>
    );
};

export default Credit;
import {useNavigate} from "react-router-dom";

const SmallEarphone = () => {
    const smallEarphoneImage = '/img/home/desktop/image-earphones-yx1.jpg';
    const navigate = useNavigate();

    const navigateEarphone = () => {
        navigate('/earphones')
    }

    return (
        <div className="small-earphone-section">
            <div style={{
                flex: '1',
            }}>
                <img src={smallEarphoneImage} alt="" className="rounded-lg small-earphone-image" />
            </div>
            <div style={{flex: '1',
                borderRadius: '8px',
                height: '320px',
                display: 'flex',
                justifyContent: 'center'
            }} className="flex flex-col items-center small-earphone-right bg-white">
                <h3 className="hero-title-2">
                    ZYX1 EARPHONES
                </h3>
                <button onClick={navigateEarphone} className="small-speaker-button hover:bg-gray-950 hover:text-white">
                    SEE PRODUCT
                </button>
            </div>
        </div>
    );
};

export default SmallEarphone;
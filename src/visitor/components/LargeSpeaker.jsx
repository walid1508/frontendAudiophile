import {useNavigate} from "react-router-dom";

const LargeSpeaker = () => {
    const svgPath = '/img/home/desktop/pattern-circles.svg';
    const largeSpeakerImage = '/img/home/tablet/image-speaker-zx9.png';
    const navigate = useNavigate();

    const navigateSpeaker = () => {
        navigate('/speakers')
    }

    return (
        <div className="large-speaker-section">
            <div className="l" style={{
                backgroundImage: `url(${svgPath})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                flex: '65%',
            }}>
                <img src={largeSpeakerImage} alt="speaker-image" className="large-speaker-image"/>
            </div>
            <div style={{flex: '35%'}}
                 className="flex flex-col justify-center r md:items-center sm:items-center md:p-5 sm:p-10 justify-items-center">
                <h3 className="large-speaker-title">
                    ZX9 <br/> SPEAKER
                </h3>
                <p className="large-speaker-message">
                    Experience natural, lifelike audio and exceptional build quality made for the passionate
                    music enthusiast.
                </p>
                <button onClick={navigateSpeaker} className="large-sepaker-button btn-md">
                    SEE PRODUCT
                </button>
            </div>
        </div>
    );
};

export default LargeSpeaker;
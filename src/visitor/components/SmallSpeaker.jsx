

const SmallSpeaker = () => {
    return (
        <div className="small-speaker-section" style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
        }}>
            <div style={{flex: '45%'}} className="flex flex-col items-center">
                <h3 className="hero-title-2">
                    ZX9 SPEAKER
                </h3>
                <button className="small-speaker-button hover:bg-gray-950 hover:text-white">
                    SEE PRODUCT
                </button>
            </div>
            <div style={{
                flex: '55%'
            }}>

            </div>
        </div>
    );
};

export default SmallSpeaker;
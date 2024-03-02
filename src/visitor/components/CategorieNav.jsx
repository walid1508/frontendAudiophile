

const CategorieNav = () => {

    const headphoneImagePath = "/img/home/desktop/image-category-thumbnail-headphones.png";
    const speakerImagePath = "/img/home/desktop/image-category-thumbnail-speakers.png";
    const earphoneImagePath = "./img/home/desktop/image-category-thumbnail-earphones.png";

    return (
        <div className="categorie-navbar">
            <div className="categories-navbar-card" style={{
                backgroundImage: `url(${headphoneImagePath})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <h4 className="categories-navbar-card-title">HEADPHONES</h4>
                <button className="categories-navbar-card-button">SHOP</button>
            </div>
            <div className="categories-navbar-card" style={{
                backgroundImage: `url(${speakerImagePath})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <h4 className="categories-navbar-card-title">SPEAKERS</h4>
                <button className="categories-navbar-card-button">SHOP</button>
            </div>
            <div className="categories-navbar-card" style={{
                backgroundImage: `url(${earphoneImagePath})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <h4 className="categories-navbar-card-title">EARPHONES</h4>
                <button className="categories-navbar-card-button">SHOP</button>
            </div>
        </div>
    );
};

export default CategorieNav;
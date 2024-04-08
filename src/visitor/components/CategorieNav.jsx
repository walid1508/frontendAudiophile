import {Link} from 'react-router-dom';

const CategorieNav = () => {

    const headphoneImagePath = "/img/home/desktop/image-category-thumbnail-headphones.png";
    const speakerImagePath = "/img/home/desktop/image-category-thumbnail-speakers.png";
    const earphoneImagePath = "./img/home/desktop/image-category-thumbnail-earphones.png";

    return (
        <div className="categorie-navbar">
            <div className="categories-navbar-card bg-white rounded-xl" style={{
                backgroundImage: `url(${headphoneImagePath})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <h4 className="categories-navbar-card-title">HEADPHONES</h4>
                <Link to="/headphones" className="categories-navbar-card-button">SHOP</Link>
            </div>
            <div className="categories-navbar-card bg-white rounded-xl" style={{
                backgroundImage: `url(${speakerImagePath})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <h4 className="categories-navbar-card-title">SPEAKERS</h4>
                <Link to="/speakers" className="categories-navbar-card-button">SHOP</Link>
            </div>
            <div className="categories-navbar-card bg-white rounded-xl" style={{
                backgroundImage: `url(${earphoneImagePath})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <h4 className="categories-navbar-card-title">EARPHONES</h4>
                <Link to="/earphones" className="categories-navbar-card-button">SHOP</Link>
            </div>
        </div>
    );
};

export default CategorieNav;
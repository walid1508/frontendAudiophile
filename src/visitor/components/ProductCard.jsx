

const ProductCard = ({product_id, product_name, product_image, product_description, navigateHeadphone}) => {


   

    return (
        <li key={product_id} className="xx99-headphones-black-section">
            <div>
                <img src={product_image} alt="" className="w-full rounded-lg xx99-headphones-black" id="xx99-headphones-black-desktop" />        
            </div>
            
            <div className="xx99-description-section">
                <h3 className="xx99-title-2">
                    {product_name}
                </h3>

                <p className="xx99-content">{product_description}</p>
                <button onClick={navigateHeadphone} className="xx99-headphone-button">
                    SEE PRODUCT
                </button>
            </div>
        </li>
    );
};

export default ProductCard ;

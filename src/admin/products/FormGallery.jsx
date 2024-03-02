// eslint-disable-next-line react/prop-types
function FormGallery({ gallery, setGallery }) {
    const handleGalleryChange = (index, event) => {
        const newGallery = [...gallery];
        newGallery[index] = event.target.files[0];
        setGallery(newGallery);
    };

    const handleAddImage = () => {
        setGallery([...gallery, null]);
    };

    const handleRemoveImage = (index) => {
        const newGallery = [...gallery];
        newGallery.splice(index, 1);
        setGallery(newGallery);
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow space-y-4 border">
            <h4 className="text-xl font-bold text-gray-700">Gallery Images</h4>
            {gallery.map((file, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <input
                        type="file"
                        onChange={(event) => handleGalleryChange(index, event)}
                        className="flex-1 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out py-2 px-4"
                    />

                    <button
                        onClick={() => handleRemoveImage(index)}
                        className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2">
                        Remove
                    </button>
                </div>
            ))}
            <button
                onClick={handleAddImage}
                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                Add Another Image
            </button>
        </div>
    );
}

export default FormGallery;

import { useState, useEffect } from 'react';


// eslint-disable-next-line react/prop-types
const EditCategory = ({ isModalOpenEdit, setIsModalOpenEdit, fetchCategories, editCategory, category }) => {
    const [name, setName] = useState('');



    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        if (category && category.name) {
            // eslint-disable-next-line react/prop-types
            setName(category.name);
        }
    }, [category]);

    const handleSubmit = (event) => {
        event.preventDefault();
        editCategory(category._id, name)
        console.log('Category updated successfully');
        setName('');
        setIsModalOpenEdit(false)
        fetchCategories()
    };

    const isFormValid = () => {
        return name.trim() !== '';
    };

    return (
        <div className={`${isModalOpenEdit ? 'block' : 'hidden'} fixed inset-0 z-10 overflow-y-auto`}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-filter backdrop-blur-lg"></div>
                <div
                    className="relative bg-white rounded-lg shadow-xl transform transition-all sm:max-w-lg sm:w-full mx-auto p-6">
                    <h3 className="text-2xl font-semibold mb-4" id="modal-title">
                        Edit Category
                    </h3>
                    <label
                        htmlFor="ProductPrice"
                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 dark:border-gray-700"
                    >
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            id="ProductPrice"
                            placeholder="Name"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                        />

                        <span
                            className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200"
                        >
                                Name
                              </span>
                    </label>
                    <div className="mt-4 flex justify-end">
                        <button
                            type="button"
                            className="inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setIsModalOpenEdit(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className={`inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm ${isFormValid() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-500'}`}
                            onClick={handleSubmit}
                            disabled={!isFormValid()}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditCategory;

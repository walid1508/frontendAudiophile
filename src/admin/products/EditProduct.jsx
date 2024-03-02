import { useEffect, useState, useRef } from "react";
import axios from "axios";


import FormInclude from "./FormInclude.jsx";
import FormGallery from "./FormGallery.jsx";

// eslint-disable-next-line react/prop-types
const EditProduct = ({ isModalOpenEdit, setIsModalOpenEdit, fetchProducts, notifyEdit, product }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const inputRef = useRef(null);
    const [image, setImage] = useState();
    const [description, setDescription] = useState('');
    const [features, setFeatures] = useState('');
    const [includes, setIncludes] = useState([{ quantity: '', item: '' }]);
    const [gallery, setGallery] = useState(['']);
    const [categories, setCategories] = useState([]);

    const isFormValid = () => {
        return name.trim() !== ''  && category.trim() !== '' && description.trim() !== '' && features.trim() !== '' && includes.every(include => include.quantity !== '' && include.item !== '') && gallery.every(g => g !== '');
    };

    useEffect(() => {
        if (isModalOpenEdit) {
            inputRef.current?.focus();
            if (product) {
                // Assuming product includes all fields that need to be edited
                setName(product.name);
                setPrice(product.price);
                setCategory(product.category);
                setDescription(product.description);
                setFeatures(product.features);
                setIncludes(product.includes);
                setGallery(product.gallery);
                const pathProduct = `http://localhost:4000/images/products/` + product.image
                setImage(pathProduct);
            }
        }
    }, [isModalOpenEdit, product]);

    const fetchCategories = () => {
        axios.get('http://localhost:4000/categories')
            .then(res => {
                setCategories(res.data);
            })
            .catch(error => console.error('Error: ', error));
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('description', description);
        formData.append('features', features);
        includes.forEach((include, index) => {
            formData.append(`includes[${index}][quantity]`, include.quantity);
            formData.append(`includes[${index}][item]`, include.item);
        });
        gallery.forEach((g, index) => {
            if (typeof g === 'object' && g !== null) {
                formData.append(`gallery[${index}]`, g);
            }
        });

        if (image && typeof image === 'object') {
            formData.append('image', image);
        }

        axios.put(`http://localhost:4000/products/${product._id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(() => {
                fetchProducts();
                setIsModalOpenEdit(false);
                notifyEdit();
            })
            .catch(error => console.error('Error updating product:', error));
    };


    const onImageChange = (event) => {
        console.log(event.target.files[0]);
        setImage(event.target.files[0]);

        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('uploadedImage').src = e.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    return (
        <div className={`${isModalOpenEdit ? 'block' : 'hidden'} fixed inset-0 z-10 overflow-y-auto`}>
            <div className={`${isModalOpenEdit? 'block' : 'hidden'} fixed inset-0 z-10 overflow-y-auto`}>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-filter backdrop-blur-sm"></div>
                    <div className="relative bg-white rounded-lg shadow-xl mx-auto p-6 w-full max-w-6xl">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">New Product</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg shadow border">
                            <label
                                htmlFor="ProductName"
                                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 dark:border-gray-700"
                            >
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    id="ProductName"
                                    placeholder="Name"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                                />

                                <span
                                    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200"
                                >
                                Name
                              </span>
                            </label>

                            <label
                                htmlFor="ProductPrice"
                                className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 dark:border-gray-700"
                            >
                                <input
                                    type="number"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                    id="ProductPrice"
                                    placeholder="Price"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                                />

                                <span
                                    className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200"
                                >
                                Price
                              </span>
                            </label>

                            <label htmlFor="ProductCategory" className="form-label">Category</label>
                            <select
                                id="ProductCategory"
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                                className="mt-1.5 w-full rounded-lg border border-gray-300 text-gray-700 sm:text-sm  font-xl py-2 focus-within:border-blue-600 select:border-blue-600 focus:outline-none focus:ring-0"
                            >
                                <option value="">Select a category</option>
                                {categories.map((cat, index) => (
                                    <option key={index} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>

                            <textarea
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                className="create-product-textarea"
                                placeholder="Description"
                            > </textarea>

                            <textarea
                                value={features}
                                onChange={e => setFeatures(e.target.value)}
                                className="create-product-textarea"
                                placeholder="Features"
                            ></textarea>
                        </div>

                        <div className="mt-3 p-4 bg-white rounded-lg shadow space-y-4 border">
                            <h4 className="text-xl font-bold text-gray-700">{image ? "Image Uploaded" : "Upload Image"}</h4>
                            <div className="flex flex-col items-center justify-center w-full">
                                {image ? (
                                    <img id="uploadedImage" src="#" alt="Preview" className="w-20 h-20 rounded-lg"/>
                                ) : (
                                    <label htmlFor="dropzone-file"
                                           className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                                 aria-hidden="true" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"></path>
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                                className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF
                                                (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden"
                                               onChange={onImageChange}
                                               name="image" accept="image/*"/>
                                    </label>
                                )}
                                {image && (
                                    <button
                                        className="mt-2 p-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                                        onClick={() => setImage(null)}
                                    >
                                        Change Image
                                    </button>
                                )}
                            </div>
                        </div>


                        <div className="my-3">
                            <FormGallery gallery={gallery} setGallery={setGallery}/>
                        </div>

                        <div>
                            <FormInclude includes={includes} setIncludes={setIncludes}/>
                        </div>

                        <div className="mt-6 flex justify-end space-x-3">
                            <button
                                type="button"
                                className="rounded-lg border border-gray-300 shadow-sm px-5 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                                onClick={() => setIsModalOpenEdit(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className={`rounded-lg px-5 py-2 text-white shadow-sm ${isFormValid() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
                                onClick={handleSubmit}
                                disabled={!isFormValid()}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;

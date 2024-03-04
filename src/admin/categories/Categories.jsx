import { useEffect, useState } from 'react';
import axios from 'axios';
import CreateCategory from "./CreateCategory.jsx";
import EditCategory from "./EditCategory.jsx";
import ConfirmationModal from "../shared/ConfirmationModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSortAlphaDownAlt, FaSortAlphaUp } from 'react-icons/fa';


const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [isModalOpenCreate, setIsModalOpenCreate] = useState(false);
    const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
    const [categoryIdToDelete, setCategoryIdToDelete] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [sortDirection, setSortDirection] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const [categoriesPerPage] = useState(5);
    const indexOfLastCategory = currentPage * categoriesPerPage;
    const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
    const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);



    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(categories.length / categoriesPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);




    const fetchCategories = () => {
        axios.get('http://localhost:4000/categories')
            .then(res => {
                console.log('Data received:', res.data);
                const sortedData = res.data.sort((a, b) => a.name.localeCompare(b.name));
                setCategories(sortedData);
                setIsLoading(false);
            })
            .catch(error => console.error('Error: ', error));
    };

    useEffect(() => {
        fetchCategories();
    }, []);




    const notifyDelete = () => toast.success('Category deleted successfully!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    const notifyEdit = () => toast.success('Category updated successfully!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const notifyCreate = () => toast.success('Category created successfully!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });


    const deleteCategory = (categoryId) => {
        axios.delete(`http://localhost:4000/categories/${categoryId}`)
            .then(() => {
                fetchCategories();
                notifyDelete();
            })
            .catch(error => console.error('Error deleting category:', error));
    };

    const editCategory = (categoryId, name) => {
        axios.put(`http://localhost:4000/categories/${categoryId}`, { name })
            .then(() => {
                fetchCategories();
                notifyEdit();
            })
            .catch(error => console.error('Error editing category:', error));
    }

    const handleEditClick = (category) => {
        setCurrentCategory(category);
        setIsModalOpenEdit(true);
    };

    const openConfirmationModal = (categoryId) => {
        setIsConfirmationModalOpen(true);
        setCategoryIdToDelete(categoryId);
    };

    const closeConfirmationModal = () => {
        setIsConfirmationModalOpen(false);
        setCategoryIdToDelete(null);
    };

    const confirmDeletion = () => {
        if (categoryIdToDelete) {
            deleteCategory(categoryIdToDelete);
            closeConfirmationModal();
        }
    };

    const toggleSort = () => {
        const direction = sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(direction);
        const sortedCategories = [...categories].sort((a, b) => {
            if (direction === 'asc') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
        setCategories(sortedCategories);
    };


    return (
        <div>
            <h3 className="text-2xl font-medium py-4">
                Categories
            </h3>
            <button className="bg-orange-500 text-white font-medium rounded-full px-2 py-2 mb-5 hover:bg-orange-600"
                    onClick={() => setIsModalOpenCreate(true)}>
                New Category
            </button>


            {isLoading ? (
                <div className="text-center">
                    <div role="status">
                        <svg aria-hidden="true"
                             className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"/>
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg font-medium">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-white uppercase bg-noir-1 dark:bg-gray-700 dark:text-gray-400 font-bold">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Category Name
                                <button onClick={toggleSort} className="pl-3 text-xl">
                                    {sortDirection === 'asc' ? <FaSortAlphaUp/> : <FaSortAlphaDownAlt/>}
                                </button>
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentCategories.map(category => (
                            <tr key={category._id}
                                className="bg-white text-black border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="py-4 px-6">
                                    {category.name}
                                </td>
                                <td className="py-4 px-6">
                                    <button
                                        onClick={() => handleEditClick(category)}
                                        className="font-medium text-white dark:text-white px-4 py-1 rounded-full bg-blue-500 hover:bg-blue-600   mr-3"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="font-medium text-white dark:text-white px-4 py-1 rounded-full bg-red-500 hover:bg-red-600"
                                        onClick={() => openConfirmationModal(category._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <nav aria-label="Page navigation" className="flex justify-center mt-4">
                        <ul className="inline-flex items-center -space-x-px">
                            <li>
                                <button
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-r-0 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}>
                                    Prev
                                </button>
                            </li>
                            {pageNumbers.map(number => (
                                <li key={number}>
                                    <button
                                        onClick={() => paginate(number)}
                                        className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === number && 'z-10 text-blue-600 border-blue-300 bg-blue-50 dark:bg-gray-700 dark:text-white'}`}>
                                        {number}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    disabled={currentPage === pageNumbers.length}
                                    className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-l-0 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === pageNumbers.length && 'opacity-50 cursor-not-allowed'}`}>
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>

                </div>
            )}

            <CreateCategory
                isModalOpenCreate={isModalOpenCreate}
                setIsModalOpenCreate={setIsModalOpenCreate}
                fetchCategories={fetchCategories}
                notifyCreate={notifyCreate}
            />

            <EditCategory
                isModalOpenEdit={isModalOpenEdit}
                setIsModalOpenEdit={setIsModalOpenEdit}
                fetchCategories={fetchCategories}
                editCategory={editCategory}
                category={currentCategory}
            />

            <ConfirmationModal
                isOpen={isConfirmationModalOpen}
                onClose={closeConfirmationModal}
                onConfirm={confirmDeletion}
                message="Are you sure you want to delete this category?"
            />

            <ToastContainer/>

        </div>
    );
};

export default Categories;

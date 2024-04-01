import React from 'react';

const CategoryCard = ({categoryId, category, categoryName, handleEditClick, openConfirmationModal  }) => {
    return (
        <tr key={categoryId}
            className="bg-white text-black border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="py-4 px-6">
                {categoryName}
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
                    onClick={() => openConfirmationModal(categoryId)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default CategoryCard;
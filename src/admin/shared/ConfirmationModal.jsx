// eslint-disable-next-line react/prop-types
const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg">
                <h2 className="text-sm font-bold">{message}</h2>
                <div className="flex justify-end space-x-2 mt-4">
                    <button
                        onClick={onClose}
                        className="inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white  hover:bg-blue-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                        No
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-1 rounded-full text-white bg-red-500 hover:bg-red-600">
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;

import { useState, useEffect } from "react";

const EditClient = ({ isModalOpenEdit, setIsModalOpenEdit, fetchClients, editClient, client }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        if (client) {
            setName(client.name || '');
            setEmail(client.email || '');
            setPassword(client.password || '');
        }
    }, [client]);



    const handleSubmit = (event) => {
        event.preventDefault();
        editClient(client._id, name, email, password)
        console.log('Client updated successfully');
        setName('');
        setEmail('');
        setPassword('');
        setIsModalOpenEdit(false)
        fetchClients()
    };


    const isFormValid = () => {
        return name.trim() !== '' && email.trim() !== '' && password.trim() !== '';
    }


    return (
        <div className={`${isModalOpenEdit ? 'block' : 'hidden'} fixed inset-0 z-10 overflow-y-auto`}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-filter backdrop-blur-lg"></div>
                <div
                    className="relative bg-white rounded-lg shadow-xl transform transition-all sm:max-w-lg sm:w-full mx-auto p-6">
                    <h3 className="text-2xl font-semibold mb-4" id="modal-title">
                        Edit Client
                    </h3>
                    <label
                        htmlFor="ClientName"
                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 dark:border-gray-700"
                    >
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            id="ClientName"
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
                        htmlFor="ClientEmail"
                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 dark:border-gray-700"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            id="ClientEmail"
                            placeholder="Email"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                        />

                        <span
                            className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200"
                        >
                            Email
                        </span>
                    </label>
                    <label
                        htmlFor="ClientPassword"
                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 dark:border-gray-700"
                    >
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            id="ClientPassword"
                            placeholder="Password"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                        />

                        <span
                            className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200"
                        >
                            Password
                        </span>
                    </label>

                    <div className="mt-4 flex justify-end">
                        <button
                            
                            type="button"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            onClick={() => setIsModalOpenEdit(false)}
                        >
                            Cancel
                        </button>
                        <button

                            type="submit"

                            className={`${isFormValid() ? 'bg-blue-600' : 'bg-blue-300'} ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
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
}

export default EditClient;

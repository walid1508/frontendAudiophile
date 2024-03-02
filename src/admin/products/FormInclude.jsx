// eslint-disable-next-line react/prop-types
function FormInclude({ includes, setIncludes }) {
    const handleIncludeChange = (index, event) => {
        const newIncludes = [...includes];
        newIncludes[index][event.target.name] = event.target.value;
        setIncludes(newIncludes);
    };

    const handleAddInclude = () => {
        setIncludes([...includes, { quantity: '', item: '' }]);
    };

    const handleRemoveInclude = (index) => {
        const newIncludes = [...includes];
        newIncludes.splice(index, 1);
        setIncludes(newIncludes);
    };

    return (
        <div className="p-4 bg-white border rounded-lg shadow space-y-4">
            <h4 className="text-xl font-bold text-gray-700">Included Items</h4>
            {includes.map((include, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <label
                        htmlFor="qte"
                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 dark:border-gray-700"
                    >
                        <input
                            type="number"
                            value={include.quantity}
                            name="quantity"
                            onChange={(event) => handleIncludeChange(index, event)}
                            id="qte"
                            placeholder="Quantity"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                        />

                        <span
                            className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200"
                        >
                                Quantity
                              </span>
                    </label>

                    <label
                        htmlFor="itemName"
                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600 dark:border-gray-700 w-full"
                    >
                        <input
                            type="text"
                            id="itemName"
                            name="item"
                            value={include.item}
                            onChange={(event) => handleIncludeChange(index, event)}
                            placeholder="Item Name"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm dark:text-white"
                        />

                        <span
                            className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200"
                        >
                                Item Name
                              </span>
                    </label>

                    <button
                        onClick={() => handleRemoveInclude(index)}
                        className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2">
                        Remove
                    </button>
                </div>
            ))}
            <button
                onClick={handleAddInclude}
                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                Add Another Item
            </button>
        </div>
    );
}


export default FormInclude;
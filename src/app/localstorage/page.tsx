export default function Page() {

    return (
        <div className="flex flex-col min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8">
                Local storage, get to know me!
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-[60vh]">
                {/* Left section: Large box to display the contents of Local Storage */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md h-full">
                    <h2 className="text-xl font-semibold mb-4">
                        Here you can see the contents of your Local Storage for this domain
                    </h2>
                    <div className="bg-white p-4 rounded-lg border border-gray-300 h-[50vh]">
                        <p>Content will be displayed here in the future.</p>
                    </div>
                    {/* Toggle for automatic updating */}
                    <div className="mt-6">
                        <label className="text-lg font-medium">Toggle automatic updating</label>
                        <div className="flex items-center mt-2">
                            {/* Custom Toggle */}
                            <label htmlFor="toggle" className="relative inline-block w-12 mr-2 select-none">
                                <input id="toggle" type="checkbox" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 border-gray-300 appearance-none cursor-pointer transition-all duration-300 ease-in-out" />
                                <div className="toggle-label w-12 h-6 bg-gray-300 rounded-full cursor-pointer transition-all duration-300 ease-in-out"></div>
                            </label>
                            <span className="ml-2 text-sm text-gray-600">
                                Toggle to enable/disable automatic updating of Local Storage in the view above
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right section: Instructions box and buttons */}
                <div className="flex flex-col gap-8 h-[60vh]">
                    {/* Instructions box */}
                    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Instructions</h2>
                        <p>Local Storage is "permanent" domain specific storage on your local device, managed by your browser.
                            The contents of your Local storage will remain even if you navigate back from this page.
                            Here you can test out the base functionalities of Local Storage.
                            < br />
                            < br />
                            <strong>Save:</strong>
                            < br />
                            Enter data you want to save in the box above the Save button. The key for this data will be assigned automatically.
                            < br />
                            < br />
                            <strong>Read:</strong>
                            < br />
                            You can use this button to refresh the view of the contents of your Local Storage if you have the toggled the automatic updating off.
                            < br />
                            < br />
                            <strong>Remove:</strong>
                            < br />
                            Enter the key of the data you want to remove in the box above the Remove button. You can review the available keys from the left side of the screen.
                            < br />
                            < br />
                            <strong>Clear:</strong>
                            < br />
                            Pressing this button will clear the Local Storage of all content.
                        </p>
                    </div>

                    {/* Vertical buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col items-center justify-end">
                            <input
                                type="text"
                                className="border border-gray-300 rounded-lg py-2 px-4 mb-2"
                                placeholder="Enter data to save"
                            />
                            <button className="border border-gray-300 py-2 px-4 rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-[80%]">
                                Save
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-end">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-[80%]">
                                Read
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-end">
                            <input
                                type="text"
                                className="border border-gray-300 rounded-lg py-2 px-4 mb-2"
                                placeholder="Enter key to remove"
                            />
                            <button className="border border-gray-300 py-2 px-4 rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-[80%]">
                                Remove
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-end">
                            <button className="border border-gray-300 py-2 px-4 rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-[80%]">
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="mt-auto w-full text-center py-4">
                <p>To learn more about Local Storage, check the links: <br />
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-800"
                        title="Opens in a new tab/window"
                    >Mozilla Web Storage API</a><br />
                    <a
                        href="https://www.w3schools.com/html/html5_webstorage.asp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-800"
                        title="Opens in a new tab/window"
                    >w3schools HTML Web Storage API</a>
                </p>
            </footer>
        </div>

    );
}

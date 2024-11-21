'use client'

import { useEffect, useState } from "react";
import { StorageArray } from "../../../types/storagearray";
import { clearLocalStorage, getAllLocalStorageData, getFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from "../utilities/webstorageapi/actions";

export default function Page() {

    const [storageContent, setStorageContent] = useState<StorageArray>([]);
    const [removeValue, setRemoveValue] = useState<string>("");
    const [getDataValue, setGetDataValue] = useState<string>("");
    const [getKeyValue, setGetKeyValue] = useState<string>("");
    const [setKeyValue, setSetKeyValue] = useState<string>("");
    const [setDataValue, setSetDataValue] = useState<string>("");
    const [toastValue, setToastValue] = useState<string>("");
    const [toastVisible, setToastVisible] = useState<boolean>(false);

    // Could initialize just an empty variable now but this is saved here. No harm done, right..?
    let storageItems = storageContent.map(
        item => <li key={item.key}>Key: {item.key}, Value: {item.value}</li>)

    const handleSet = (key: string, value: string) => {
        if (!setKeyValue || !setDataValue) {
            showToast("Enter both Key and Data before trying to Save");
        }
        else {
            saveToLocalStorage(key, value);
            setSetKeyValue("");
            setSetDataValue("");
        }
    };

    const handleGet = async (key: string) => {
        if (!key) {
            showToast("No Key given for Read")
        } else {
            try {
                const data = await getFromLocalStorage(key);
                if (data) {
                    setGetDataValue(data);
                    setGetKeyValue("");
                }
                else {
                    showToast("No data found with Key: " + key);
                }
            }
            catch (error) {
                return error;
            }
        }

    };

    const handleRemove = (key: string) => {
        if (!key) {
            showToast("No Key given for Remove");
        }
        else {
            if (getFromLocalStorage(key)) {
                removeFromLocalStorage(key);
                setRemoveValue("");
            } else {
                showToast("No data found with Key: " + key);
            }
        }
    };

    const handleClear = () => {
        if (confirm("Are you sure you want to clear Local Storage?") == true) {
            clearLocalStorage();
            showToast("Cleared Local Storage");
        }
    };

    const refreshView = () => {
        const retrievedData = getAllLocalStorageData();
        if (retrievedData) {
            setStorageContent(retrievedData);
        }
        // The filtering is to prevent this one entry from showing in the demo
        storageItems = storageContent
            .filter(item => item.key !== "ally-supports-cache")
            .map(item => <li>Key: {item.key}, Value: {item.value}</li>);
    };

    useEffect(() => {
        refreshView();
    }, []);

    const showToast = (message: string) => {
        if (!toastVisible) {
            setToastValue(message);
            setToastVisible(true);
            const toast = document.getElementById('toast');
            if (toast) {
                toast.classList.remove('opacity-0')
                toast.classList.add('opacity-100');
                setTimeout(() => {
                    toast.classList.remove('opacity-100');
                    toast.classList.add('opacity-0');
                    setToastValue('');
                    setToastVisible(false);
                }, 2500)
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8">
                Local storage, get to know me!
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-[85vh] overflow-y-auto">

                {/* Left section: Display the contents of Local Storage */}
                <div className="flex flex-col bg-gray-100 p-6 rounded-lg shadow-md h-[95%]">
                    <h2 className="text-xl font-semibold mb-4">
                        Here you can see the contents of your Local Storage for this domain
                    </h2>
                    {/* If viewport height is too small, the white goes past the gray background */}
                    <div className="bg-white p-4 rounded-lg border border-gray-300 h-[90%]">
                        <ul>{storageItems}</ul>
                    </div>
                </div>

                {/* Right section: Instructions box and buttons etc. */}
                <div className="flex flex-col gap-8 h-[80%] relative">
                    {/* Instructions box */}
                    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Instructions</h2>
                        <p>Local Storage is "permanent" domain specific storage on your local device, managed by your browser.
                            The contents of your Local storage will remain even if you navigate away from this page.
                            Here you can test out the base functionalities of Local Storage with string inputs.
                            < br />
                            < br />
                            <strong>Save:</strong>
                            < br />
                            Enter a Key value and data of your choice in the corresponding boxes above the Save button.
                            They will appear in the left side view of your Local Storage after pressing Save.
                            < br />
                            < br />
                            <strong>Read:</strong>
                            < br />
                            Enter a Key value into the input to fetch the corresponding data from Local Storage.
                            You can review the valid Key values from the left side of the screen.
                            < br />
                            < br />
                            <strong>Remove:</strong>
                            < br />
                            Enter the Key value of the data you want to remove in the box above the Remove button.
                            You can review the valid key values from the left side of the screen.
                            < br />
                            < br />
                            <strong>Clear:</strong>
                            < br />
                            Pressing this button will clear this domain's Local Storage of all content after confirmation.
                        </p>
                    </div>
                    {/* Buttons etc. */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col items-center justify-end">
                            <label>Key</label>
                            <input
                                id="key"
                                type="text"
                                className="border border-gray-300 rounded-lg py-2 px-4 mb-2"
                                placeholder="Enter key for the data"
                                value={setKeyValue}
                                onChange={(e) => setSetKeyValue(e.target.value)}
                            />
                            <label>Data</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-lg py-2 px-4 mb-2"
                                placeholder="Enter data to save"
                                value={setDataValue}
                                onChange={(e) => setSetDataValue(e.target.value)}
                            />
                            <button
                                className="border border-gray-300 py-2 px-4 rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-[80%]"
                                onClick={() => {
                                    handleSet(setKeyValue, setDataValue);
                                    refreshView();
                                }}>
                                Save
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-end">
                            <label>Key</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-lg py-2 px-4 mb-2"
                                placeholder="Enter key to read"
                                value={getKeyValue}
                                onChange={(e) => setGetKeyValue(e.target.value)}
                            />
                            <label>Data</label>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-lg py-2 px-4 mb-2"
                                placeholder="Press Read to fetch data here"
                                value={getDataValue}
                                disabled
                            />
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-[80%]"
                                onClick={() => {
                                    handleGet(getKeyValue);
                                    refreshView();
                                }}>
                                Read
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-end">
                            <input
                                type="text"
                                className="border border-gray-300 rounded-lg py-2 px-4 mb-2"
                                placeholder="Enter key to remove"
                                value={removeValue}
                                onChange={(e) => setRemoveValue(e.target.value)}
                            />
                            <button
                                className="border border-gray-300 py-2 px-4 rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-[80%]"
                                onClick={() => {
                                    handleRemove(removeValue);
                                    refreshView();
                                }}>
                                Remove
                            </button>
                        </div>
                        <div className="flex flex-col items-center justify-end">
                            <button
                                className="border border-gray-300 py-2 px-4 rounded-lg text-white bg-blue-500 hover:bg-blue-600 w-[80%]"
                                onClick={() => {
                                    handleClear();
                                    refreshView();
                                }}>
                                Clear
                            </button>
                        </div>
                    </div>
                    <div
                        id="toast"
                        className="relative p-4 bg-gray-400 text-white text-center rounded-lg shadow-lg opacity-0 transition-opacity duration-5000 ease-in-out w-[70%] mx-auto"
                    >
                        {toastValue}
                    </div>
                </div>
            </div>

            <footer className="mt-auto w-full text-center py-4">
                <p>To learn more about Local Storage, check the links:
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-800"
                        title="Opens in a new tab"
                    > Mozilla Web Storage API,</a>
                    <a
                        href="https://www.w3schools.com/html/html5_webstorage.asp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-800"
                        title="Opens in a new tab"
                    > w3schools HTML Web Storage API</a>
                </p>
            </footer>
        </div >
    );
}

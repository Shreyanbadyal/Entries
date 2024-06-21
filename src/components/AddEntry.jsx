import InputEntry from "./InputEntry.jsx";
import { useRef } from "react"; 

export default function AddEntry({ onAdd }) {
    const name = useRef();
    const phone = useRef();
    const dob = useRef();

    function handleSave() {
        const enteredName = name.current.value;
        const enteredPhoneNumber = phone.current.value;
        const enteredDob = dob.current.value;

        onAdd({
            name: enteredName,
            phone: enteredPhoneNumber,
            dob: enteredDob
        });
        name.current.value = "";
        phone.current.value = "";
        dob.current.value = "";
    }

    return (
        <div className="flex justify-center items-center  bg-black">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-8 w-[30rem] rounded-lg shadow-md mb-10">
                <InputEntry label="Name" text="Enter your name" type="text" ref={name} />
                <InputEntry label="Phone Number" text="Enter your Phone Number" type="tel" ref={phone} />
                <InputEntry label="Date of Birth" text="Enter your DOB" type="date" ref={dob} />

                <div className="flex justify-between mt-4">
                    <button
                        type="button"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                        onClick={handleSave}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

import { forwardRef } from "react";

const InputEntry = forwardRef(function InputEntry({label,text,type},ref){
    return(
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
        <input  type={type} placeholder={text} ref = {ref} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"/>
      </div>

    );
});
export default InputEntry;

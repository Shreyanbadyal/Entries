export default function Display({ projects ,onDelete}) {
   
    return (
        <div className="bg-black flex justify-center py-10">
            <div className="w-full max-w-10xl overflow-x-auto ">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
                    {projects.map((project) => (
                        <li key={project.id} className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="bg-stone p-6 rounded-lg">
                                <h1 className="text-gray-800 font-bold text-2xl mb-2">Name: {project.name}</h1>
                                <p className="text-gray-800 font-medium text-lg">Phone: {project.phone}</p>
                                <p className="text-gray-800 font-medium text-lg">DOB: {project.dob}</p>
                                <div className="flex justify-between mt-4">
                    <button
                        type="button"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                        onClick={() => onDelete(project.id)}
                    >
                        Remove Entry
                    </button>
                  
                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

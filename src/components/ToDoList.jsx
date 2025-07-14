export default function ToDoList() {

    return (
        <>
            <div className="flex flex-col justify-center items-center mt-4">
                <p className="font-600 font-bold text-white">TYPE SOMETHING</p>
                <div className="mt-4">
                    <input type="text" className="bg-white text-black border-cyan-100 border-1 outline-none h-8 w-150"/>
                    <button className="w-18 h-8 text-white bg-purple-600 cursor-pointer">Add</button>
                </div>
                <div className="mt-4 flex items-center justify-between bg-gray-100 text-black w-168 h-20 p-4">
                    <p></p>
                    <button className=" w-18 h-8 text-white bg-blue-600 cursor-pointer">Delete</button>
                </div>
            </div>
        </>
    );
}

export default function ToDoList() {

    return (
        <>
            <div className="flex flex-col justify-center items-center mt-4">
                <p>Type something</p>
                <div className="mt-4">
                    <input type="text" className=" border-cyan-100 border-1 outline-none h-8 w-150"/>
                    <button className="w-18 h-8 bg-cyan-100 cursor-pointer">Add</button>
                </div>
            </div>
        </>
    );
}

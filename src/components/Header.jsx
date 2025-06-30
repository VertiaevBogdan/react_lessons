export default function Header() {
    return (
        <header className="container mx-auto">
            <nav className="h-10 flex justify-between">
                <h1>Lessons</h1>
                <div className="hidden md:ml-10 md:flex md:space-x-10">
                    <a href="#" className="text-white hover:text-gray-200 px-3py-2 text-sm font-medium">Home</a>
                    <a href="#" className="text-white hover:text-gray-200 px-3py-2 text-sm font-medium">To-do List</a>
                    <a href="#" className="text-white hover:text-gray-200 px-3py-2 text-sm font-medium">Lesson3</a>
                    <a href="#" className="text-white hover:text-gray-200 px-3py-2 text-sm font-medium">LEsson4</a>
                </div>
            </nav>
        </header>
    );
}

import {Link } from "react-router-dom";

export default function Header() {
    return (
        <header className=" border-gray-200 py-2.5 ">
            <nav className="wrapper h-10 flex justify-between items-center">
                <span className="font-bold text-white">Logogo</span>
                <ul className="inline-flex items-center space-x-8">
                    <li>
                        <Link to="/" className="relative text-white after:absolute
                         after:left-1/2 after:-translate-x-1/2 after:-bottom-[3px] after:h-[2px]
                          after:w-0 after:bg-blue-500 after:transition-all after:duration-300
                           hover:after:w-full"
                        >Home</Link>

                    </li>
                    <li>
                        <Link to="/todolist" className="relative text-white after:absolute
                         after:left-1/2 after:-translate-x-1/2 after:-bottom-[3px] after:h-[2px]
                          after:w-0 after:bg-blue-500 after:transition-all after:duration-300
                           hover:after:w-full"
                        >To-do List</Link>
                    </li>
                    <li>
                        <Link to="lesson3" className="relative text-white after:absolute
                         after:left-1/2 after:-translate-x-1/2 after:-bottom-[3px] after:h-[2px]
                          after:w-0 after:bg-blue-500 after:transition-all after:duration-300
                           hover:after:w-full"
                        >Lesson 3</Link>
                    </li>
                </ul>
            </nav>
        </header>
);
}

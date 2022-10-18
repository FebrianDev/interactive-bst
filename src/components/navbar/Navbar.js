import {Link} from 'react-router-dom'
import "./Navbar.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {

    return (
        <>
            <header
                className={`absolute top-0 left-0 w-full flex items-center z-10 bg-primary h-12`}>
                <div className="container">
                    <div className="flex items-center justify-between relative">
                        <Link to={'/'} className={'font-bold text-lg text-white block py-2'}>BST Visualization</Link>
                        <div className="flex items-center px-4">
                            <nav
                                id="nav-menu"
                                className={`mx-auto top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-dark dark:shadow-slate-500 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent`}
                            >
                                <ul className="block lg:flex mx-auto">
                                    <li className="group">
                                        <Link to="/"
                                              className={`mx-8 flex py-2 text-white font-bold`}>Editor</Link>
                                    </li>
                                    <li className="group">
                                        <Link to="/skills"
                                              className={`mx-8 flex py-2 text-white font-bold `}>Learn</Link>
                                    </li>
                                    <li className="group">
                                        <Link to="/works"
                                              className={`mx-8 flex py-2 text-white font-bold `}>Quiz</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
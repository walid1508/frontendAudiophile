import { IoCartOutline } from "react-icons/io5";

const Header = () => {
    return (
        <header className="navbar border-bottom py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>HOME</a></li>
                        <li><a>CATALOG</a></li>
                        <li><a>HEADPHONES</a></li>
                        <li><a>SPEAKERS</a></li>
                        <li><a>EARPHONES</a></li>
                        <li><a>SIGN IN</a></li>
                    </ul>
                </div>
                <a className="text-xl font-extrabold text-white">audiophile</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className="font-extrabold text-white">HOME</a></li>
                    <li><a className="font-extrabold text-white">CATALOG</a></li>
                    <li><a className="font-extrabold text-white">HEADPHONES</a></li>
                    <li><a className="font-extrabold text-white">SPEAKERS</a></li>
                    <li><a className="font-extrabold text-white">EARPHONES</a></li>
                    <li><a className="font-extrabold text-white">SIGN IN</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button>
                    <IoCartOutline className="font-extrabold text-white" style={{width: '36px', height: '32px'}} />
                </button>
            </div>
        </header>
    );
};

export default Header;
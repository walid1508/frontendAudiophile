import {NavLink, Outlet, Link} from 'react-router-dom';
import React, {useContext} from "react";
import {UserContext} from "../context/userContext";
import SkeletonLoader from "../visitor/components/SkeletonLoader";
import Avvvatars from "avvvatars-react";

function AdminLayout() {

    const menuItemStyle = "relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-500 text-white hover:text-gray-100 border-l-4 border-transparent";
    const menuItemActiveStyle = `${menuItemStyle} bg-orange-500 text-slate-50`

    const {user, logout, isLoading} = useContext(UserContext);

    if (isLoading) {
        return <SkeletonLoader />;
    }

    return (
        <div className="flex min-h-screen antialiased bg-gray-50 text-gray-800">
            <div className="fixed top-0 left-0 w-64 bg-noir-1 text-white h-full border-r">
                <div className="flex items-center justify-center h-14 border-b py-10">
                    <Link to="/admin" className="font-extrabold text-2xl">Audiophile</Link>
                </div>

                <div className="w-full px-5 py-4">
                    <div className="flex items-center justify-center">
                        <div className="text-center text-sm font-light">
                            <div className="flex justify-center mb-2">
                                <Avvvatars value={user?.name} className="w-12 h-12 rounded-full" style={"shape"}
                                           border={true} borderColor={"green"} borderSize={3}
                                />
                            </div>
                            <span className="text-gray-400">Logged in as</span>
                            <span className="block text-xl font-medium text-white">{user?.name} (Admin)</span>
                        </div>
                    </div>
                </div>

                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        <li className="px-5">
                            <div className="flex flex-row items-center h-8">
                                <div className="text-sm font-light tracking-wide text-gray-500">Menu</div>
                            </div>
                        </li>
                        <li>
                            <NavLink to="/admin" end
                                     className={({isActive}) =>
                                         isActive ? menuItemActiveStyle : menuItemStyle
                                     }
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                                    Dashboard
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="sales"
                                     className={({isActive}) =>
                                         isActive ? menuItemActiveStyle : menuItemStyle
                                     }
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg className="w-5 h-5" viewBox="0 0 15 15" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z"
                                        fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                                    Sales
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="clients"
                                     className={({isActive}) =>
                                         isActive ? menuItemActiveStyle : menuItemStyle
                                     }
                            >
                            <span className="inline-flex justify-center items-center ml-4">
                             <svg className="w-5 h-5" viewBox="0 0 15 15" fill="none"
                                  xmlns="http://www.w3.org/2000/svg"><path
                                 d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                                 fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                             </svg>
                            </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                                    Clients
                                </span>
                            </NavLink>
                        </li>
                        <li className="px-5">
                            <div className="flex flex-row items-center h-8">
                                <div className="text-sm font-light tracking-wide text-gray-500">Management</div>
                            </div>
                        </li>
                        <li>
                            <NavLink to="products"
                                     className={({isActive}) =>
                                         isActive ? menuItemActiveStyle : menuItemStyle
                                     }
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                  <svg className="w-5 h-5" viewBox="0 0 15 15" fill="none"
                                       xmlns="http://www.w3.org/2000/svg"><path
                                      d="M3.30902 1C2.93025 1 2.58398 1.214 2.41459 1.55279L1.05279 4.27639C1.01807 4.34582 1 4.42238 1 4.5V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V4.5C14 4.42238 13.9819 4.34582 13.9472 4.27639L12.5854 1.55281C12.416 1.21403 12.0698 1.00003 11.691 1.00003L7.5 1.00001L3.30902 1ZM3.30902 2L7 2.00001V4H2.30902L3.30902 2ZM8 4V2.00002L11.691 2.00003L12.691 4H8ZM7.5 5H13V13H2V5H7.5ZM5.5 7C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8H9.5C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7H5.5Z"
                                      fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                  </svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                                    Products
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="categories"
                                     className={({isActive}) =>
                                         isActive ? menuItemActiveStyle : menuItemStyle
                                     }
                            >
                                <span className="inline-flex justify-center items-center ml-4">
                                  <svg className="w-5 h-5" viewBox="0 0 15 15" fill="none"
                                       xmlns="http://www.w3.org/2000/svg"><path
                                      d="M2.14921 3.99996C2.14921 2.97778 2.97784 2.14915 4.00002 2.14915C5.02219 2.14915 5.85083 2.97778 5.85083 3.99996C5.85083 5.02213 5.02219 5.85077 4.00002 5.85077C2.97784 5.85077 2.14921 5.02213 2.14921 3.99996ZM4.00002 1.24915C2.48079 1.24915 1.24921 2.48073 1.24921 3.99996C1.24921 5.51919 2.48079 6.75077 4.00002 6.75077C5.51925 6.75077 6.75083 5.51919 6.75083 3.99996C6.75083 2.48073 5.51925 1.24915 4.00002 1.24915ZM5.82034 11.0001L2.49998 12.8369V9.16331L5.82034 11.0001ZM2.63883 8.21159C2.17228 7.9535 1.59998 8.29093 1.59998 8.82411V13.1761C1.59998 13.7093 2.17228 14.0467 2.63883 13.7886L6.57235 11.6126C7.05389 11.3462 7.05389 10.654 6.57235 10.3876L2.63883 8.21159ZM8.30001 9.00003C8.30001 8.61343 8.61341 8.30003 9.00001 8.30003H13C13.3866 8.30003 13.7 8.61343 13.7 9.00003V13C13.7 13.3866 13.3866 13.7 13 13.7H9.00001C8.61341 13.7 8.30001 13.3866 8.30001 13V9.00003ZM9.20001 9.20003V12.8H12.8V9.20003H9.20001ZM13.4432 2.19311C13.6189 2.01737 13.6189 1.73245 13.4432 1.55671C13.2675 1.38098 12.9826 1.38098 12.8068 1.55671L11 3.36353L9.19321 1.55674C9.01748 1.381 8.73255 1.381 8.55682 1.55674C8.38108 1.73247 8.38108 2.0174 8.55682 2.19313L10.3636 3.99992L8.55682 5.80671C8.38108 5.98245 8.38108 6.26737 8.55682 6.44311C8.73255 6.61885 9.01748 6.61885 9.19321 6.44311L11 4.63632L12.8068 6.44314C12.9826 6.61887 13.2675 6.61887 13.4432 6.44314C13.6189 6.2674 13.6189 5.98247 13.4432 5.80674L11.6364 3.99992L13.4432 2.19311Z"
                                      fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                  </svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                                    Categories
                                </span>
                            </NavLink>
                        </li>
                        <li className="px-5">
                            <div className="flex flex-row items-center h-8">
                                <div className="text-sm font-light tracking-wide text-gray-500">Settings</div>
                            </div>
                        </li>
                        <li>
                            <NavLink to="settings"
                                     className={({isActive}) =>
                                         isActive ? menuItemActiveStyle : menuItemStyle
                                     }>
                                <span className="inline-flex justify-center items-center ml-4">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  </svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                                    Account Settings
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/"
                                     className={({isActive}) =>
                                         isActive ? menuItemActiveStyle : menuItemStyle
                                     }
                                     onClick={logout}
                            >
                            <span className="inline-flex justify-center items-center ml-4">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg"><path
                                    d="M3 1C2.44771 1 2 1.44772 2 2V13C2 13.5523 2.44772 14 3 14H10.5C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13H3V2L10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1H3ZM12.6036 4.89645C12.4083 4.70118 12.0917 4.70118 11.8964 4.89645C11.7012 5.09171 11.7012 5.40829 11.8964 5.60355L13.2929 7H6.5C6.22386 7 6 7.22386 6 7.5C6 7.77614 6.22386 8 6.5 8H13.2929L11.8964 9.39645C11.7012 9.59171 11.7012 9.90829 11.8964 10.1036C12.0917 10.2988 12.4083 10.2988 12.6036 10.1036L14.8536 7.85355C15.0488 7.65829 15.0488 7.34171 14.8536 7.14645L12.6036 4.89645Z"
                                    fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                            </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                                    Exit
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="flex-grow ml-64">
                <div className="p-4">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}


export default AdminLayout;
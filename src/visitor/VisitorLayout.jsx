import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import  { useContext } from 'react';
import { UserContext } from "../context/userContext";
import SkeletonLoader from "./components/SkeletonLoader";


const VisitorLayout = () => {
    const { isLoading } = useContext(UserContext);

    if (isLoading) {
        return <SkeletonLoader />;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-grow">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default VisitorLayout;

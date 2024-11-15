import { Outlet } from "react-router-dom";
import Header from "../assets/components/Header";

const MainLayout = () => {
    return (
        <div className="container mx-auto bg-teal-100 p-4 flex flex-col min-h-screen">
           <Header/>
            <div className="flex-grow">
            <Outlet/>
            </div>
            <p className="bg-slate-800 h-32 text-3xl text-teal-600 text-center p-3">FOOTER</p>
        </div>
    );
};

export default MainLayout;
import { Outlet } from "react-router-dom";
import Header from "../assets/components/Header";

const MainLayout = () => {
    return (
        <div className="container mx-auto bg-teal-100 p-4">
           <Header/>
            <Outlet/>
            <p>FOOTER</p>
        </div>
    );
};

export default MainLayout;
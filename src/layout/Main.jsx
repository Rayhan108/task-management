import { Outlet } from "react-router-dom";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";


const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
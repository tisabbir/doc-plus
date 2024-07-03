import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            This is Root
            <Outlet />
        </div>
    );
};

export default Root;
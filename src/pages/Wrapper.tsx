import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Wrapper = () => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};
export default Wrapper;

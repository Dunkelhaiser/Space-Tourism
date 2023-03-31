import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Wrapper from "./pages/Wrapper";
import "./scss/styles.scss";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Wrapper />}>
            <Route index element={<Index />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

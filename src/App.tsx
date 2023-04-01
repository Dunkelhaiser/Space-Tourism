import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Index from "./pages/Index/Index";
import NotFound from "./pages/NotFound/NotFound";
import Wrapper from "./pages/Wrapper/Wrapper";
import "./scss/styles.scss";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Wrapper />} errorElement={<NotFound />}>
            <Route index element={<Index />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

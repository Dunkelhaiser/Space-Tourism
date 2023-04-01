import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Destination from "./pages/Destination/Destination";
import Index from "./pages/Index/Index";
import NotFound from "./pages/NotFound/NotFound";
import Wrapper from "./pages/Wrapper/Wrapper";
import "./scss/styles.scss";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Wrapper />} errorElement={<NotFound />}>
            <Route index element={<Index />} />
            <Route path="destination" element={<Destination />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

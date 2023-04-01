import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import MainButton from "../../components/MainButton/MainButton";
import NotFoundStyles from "./NotFound.module.scss";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <main className={NotFoundStyles.main}>
            <Layout className={NotFoundStyles.not_found}>
                <h1>Oops, Looks like the page you were looking for does not exist!</h1>
                <MainButton label="Return Home" onClick={() => navigate("/")} />
            </Layout>
        </main>
    );
};
export default NotFound;

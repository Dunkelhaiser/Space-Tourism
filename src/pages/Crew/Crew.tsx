import DotNav from "../../components/DotNav/DotNav";
import Layout from "../../components/Layout/Layout";
import CrewStyles from "./Crew.module.scss";

const Crew = () => {
    return (
        <Layout className={CrewStyles.crew}>
            <h1>
                <span>02</span> Meet your crew
            </h1>
            <DotNav />
        </Layout>
    );
};
export default Crew;

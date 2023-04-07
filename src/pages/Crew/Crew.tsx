import DotNav from "../../components/DotNav/DotNav";
import Layout from "../../components/Layout/Layout";
import CrewStyles from "./Crew.module.scss";

const Crew = () => {
    return (
        <Layout className={CrewStyles.crew} step="02" title="Meet your crew">
            <DotNav />
        </Layout>
    );
};
export default Crew;

import Layout from "../../components/Layout/Layout";
import NumberedNav from "../../components/NumberedNav/NumberedNav";
import TechnologyStyles from "./Technology.module.scss";

const Technology = () => {
    return (
        <Layout className={TechnologyStyles.technology}>
            <h1>
                <span>03</span> Space launch 101
            </h1>
            <NumberedNav />
        </Layout>
    );
};
export default Technology;

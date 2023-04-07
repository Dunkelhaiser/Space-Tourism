import Layout from "../../components/Layout/Layout";
import NumberedNav from "../../components/NumberedNav/NumberedNav";
import TechnologyStyles from "./Technology.module.scss";

const Technology = () => {
    return (
        <Layout className={TechnologyStyles.technology} step="03" title="Space launch 101">
            <NumberedNav />
        </Layout>
    );
};
export default Technology;

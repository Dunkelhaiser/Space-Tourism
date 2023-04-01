import Layout from "../../components/Layout/Layout";
import DestinationStyles from "./Destination.module.scss";
import Tabs from "../../components/Tabs/Tabs";

const Destination = () => {
    return (
        <Layout className={DestinationStyles.destination}>
            <h1>
                <span>01</span> Pick your destination
            </h1>

            <Tabs />
        </Layout>
    );
};
export default Destination;

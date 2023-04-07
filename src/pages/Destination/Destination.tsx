import Layout from "../../components/Layout/Layout";
import DestinationStyles from "./Destination.module.scss";
import Tabs from "../../components/Tabs/Tabs";

const Destination = () => {
    return (
        <Layout className={DestinationStyles.destination} step="01" title="Pick your destination">
            <Tabs />
        </Layout>
    );
};
export default Destination;

import LayoutStyles from "./Layout.module.scss";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return <section className={LayoutStyles.layout}>{children}</section>;
};
export default Layout;

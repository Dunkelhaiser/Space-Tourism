import LayoutStyles from "./Layout.module.scss";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Layout: React.FC<Props> = ({ children, className }) => {
    return <section className={`${LayoutStyles.layout} ${className}`}>{children}</section>;
};
export default Layout;

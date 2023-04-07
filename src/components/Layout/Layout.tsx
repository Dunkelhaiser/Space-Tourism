import LayoutStyles from "./Layout.module.scss";

interface Props {
    children: React.ReactNode;
    className?: string;
    step: string;
    title: string;
}

const Layout: React.FC<Props> = ({ children, className, step, title }) => {
    return (
        <section className={`${LayoutStyles.layout} ${className}`}>
            <h1>
                <span>{step}</span> {title}
            </h1>
            {children}
        </section>
    );
};
export default Layout;

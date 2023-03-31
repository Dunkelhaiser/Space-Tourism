import HamburgerStyles from "./Hamburger.module.scss";

interface Props {
    expanded: boolean;
    className?: string;
    onClick: () => void;
    controls: string;
}

const Hamburger: React.FC<Props> = ({ expanded, className, onClick, controls }) => {
    return (
        <div
            className={`${HamburgerStyles.lines} ${className}`}
            aria-expanded={expanded}
            role="button"
            tabIndex={0}
            onClick={onClick}
            aria-controls={controls}
            aria-label="Menu"
        >
            <span className={HamburgerStyles.line} />
            <span className={HamburgerStyles.line} />
            <span className={HamburgerStyles.line} />
        </div>
    );
};

export default Hamburger;

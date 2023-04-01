import ButtonStyles from "./MainButton.module.scss";

interface Props {
    label: string;
    onClick?: () => void;
}

const MainButton: React.FC<Props> = ({ label, onClick }) => {
    return (
        <button className={ButtonStyles.button} onClick={onClick}>
            {label}
        </button>
    );
};
export default MainButton;

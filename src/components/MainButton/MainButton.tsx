import ButtonStyles from "./MainButton.module.scss";

interface Props {
    label: string;
    onClick?: () => void;
}

const MainButton: React.FC<Props> = ({ label }) => {
    return <button className={ButtonStyles.button}>{label}</button>;
};
export default MainButton;

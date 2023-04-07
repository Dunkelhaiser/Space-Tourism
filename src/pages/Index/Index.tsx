import { useNavigate } from "react-router-dom";
import MainButton from "../../components/MainButton/MainButton";
import IndexStyles from "./Index.module.scss";

const Index = () => {
    const navigate = useNavigate();
    return (
        <section className={IndexStyles.hero}>
            <section>
                <h1>
                    So, you want to travel to <span>Space</span>
                </h1>
                <p>
                    Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on
                    the edge of it. Well sit back, and relax because we&apos;ll give you a truly out of this world experience!
                </p>
            </section>
            <MainButton label="Explore" onClick={() => navigate("/destination")} />
        </section>
    );
};
export default Index;

import { useState } from "react";
import { v4 as uuid } from "uuid";
import NumberedNavStyles from "./NumberedNav.module.scss";
import data from "../../data.json";

const NumberedNav: React.FC = () => {
    const [selected, setSelected] = useState(0);
    return (
        <section className={NumberedNavStyles.numbered_nav}>
            <div className={NumberedNavStyles.container}>
                <ul>
                    {data.technology.map((_technology, i) => (
                        <li key={uuid()}>
                            <button
                                onClick={() => setSelected(i)}
                                className={i === selected ? NumberedNavStyles.active : ""}
                                aria-label={`Tab ${i}`}
                            >
                                {i + 1}
                            </button>
                        </li>
                    ))}
                </ul>
                <article>
                    <span className={NumberedNavStyles.position}>The terminology...</span>
                    <h2>{data.technology[selected].name}</h2>
                    <p>{data.technology[selected].description}</p>
                </article>
            </div>
            <picture>
                <source srcSet={data.technology[selected].images.landscape} media="(max-width: 1200px)" />
                <img src={data.technology[selected].images.portrait} alt={data.crew[selected].name} className={NumberedNavStyles.img} />
            </picture>
        </section>
    );
};
export default NumberedNav;

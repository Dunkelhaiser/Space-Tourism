import { useState } from "react";
import { v4 as uuid } from "uuid";
import DotNavStyles from "./DotNav.module.scss";
import data from "../../data.json";

const DotNav: React.FC = () => {
    const [selected, setSelected] = useState(0);

    return (
        <section className={DotNavStyles.dot_nav}>
            <div className={DotNavStyles.container}>
                <article>
                    <span className={DotNavStyles.position}>{data.crew[selected].role}</span>
                    <h2>{data.crew[selected].name}</h2>
                    <p>{data.crew[selected].bio}</p>
                </article>
                <ul>
                    {data.crew.map((_member, i) => (
                        <li key={uuid()}>
                            <button
                                onClick={() => setSelected(i)}
                                className={i === selected ? DotNavStyles.active : ""}
                                aria-label={`Tab ${i}`}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <img src={data.crew[selected].images.webp} alt={data.crew[selected].name} className={DotNavStyles.img} />
        </section>
    );
};
export default DotNav;

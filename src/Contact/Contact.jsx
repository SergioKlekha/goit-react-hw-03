import css from "./Contact.module.css"
import { FiUser, FiPhone } from "react-icons/fi";

const Contact = ({name, number}) => {

    return (
        <div className={css.block}>
        <li className={css.list}>
            <div className={css.iconText}>
                <FiUser className={css.icon}/>
                <p>{name}</p>
            </div>
            <div className={css.iconText}>
                <FiPhone className={css.icon}/>
                <p>{number}</p>
            </div>
        </li>
        <button className={css.button}>Deletee</button>
        </div>
    );
};

export default Contact;

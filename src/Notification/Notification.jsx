import css from "./Notification.module.css"


const Notification = ({message}) => {
    return (
        <div className={css.block}>
            <p>{message}</p>
        </div>
    );
};

export default Notification;
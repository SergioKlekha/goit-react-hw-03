import css from "./FeedBack.module.css"

const Feedback = ({feedback, totalFeedback, positiveFeedback}) => {

    

    return (
        <div>
            <ul className={css.list}>
                <li className={css.item}>Good : {feedback.good}</li>
                <li className={css.item}>Neutral : {feedback.neutral}</li>
                <li className={css.item}>Bad : {feedback.bad}</li>
                <li className={css.item}>Total Feedback : {totalFeedback}</li>
                <li className={css.item}>Positive : {positiveFeedback}%</li>
            </ul>
        </div>
    )
}

export default Feedback;
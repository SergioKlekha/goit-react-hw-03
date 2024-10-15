import c from "./Description.module.css"




const Description = () => {
    return (
        <div className="c.DescriptionBox">
        <h1 className={c.DescriptionTitle}>Sip Happens Café</h1>
        <p className={c.DescriptionText}>Please leave your feedback about our service by selecting one of the options below.</p>
        </div>
    )
};

export default Description;
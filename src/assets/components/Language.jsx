export default function LanguageAccordion(props) {

    return (
        <>
            <div className="accordion">

                <span className={`accordion-btn ${props.isOpen ? 'active-bg' : ''}`}
                    onClick={props.onToggle}
                >
                    {props.title}
                </span>

                <p>
                    {props.isOpen && props.description}
                </p>
            </div>

        </>
    )

}
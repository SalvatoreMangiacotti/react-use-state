import { useState } from 'react';

export default function LanguageAccordion(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="accordion">

                <span className="accordion-btn"
                    onClick={() => setIsOpen((current) => !current)}
                >
                    {props.title}
                </span>

                <p>
                    {isOpen && props.description}
                </p>
            </div>

        </>
    )

}
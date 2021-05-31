import React from 'react'

const Card = (props) => {
    const{
        contact,
        index,
        key,
        activeClass
    } = props

    return (
        <section className="card-container" key={index}>
            <header className="card-header">
                <span initials={contact.initials}></span>
                <h2>{contact.name}</h2>
                <div className={`favourite ${activeClass}`}
                onClick={() => {props.handleFavouriteToggle(index)}}>
                    ☆
                </div>
            </header>

            <main>
                <ul>
                    <li>
                        <span>Phone</span>
                        {contact.phone ? contact.phone : 'N/A'}
                    </li>
                    <li>
                        <span>Email</span>
                        {contact.email ? contact.email : 'N/A'}
                    </li>
                </ul>
            </main>
        </section>
    )
}

export default Card
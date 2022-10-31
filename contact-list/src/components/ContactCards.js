import React from 'react';



const ContactCard = (props) => {
    console.log(props)
    return (
        <div className="cards-container">
            <img src={props.contact.img} alt="cat"/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard
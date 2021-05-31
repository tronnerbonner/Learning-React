import React, { Component } from 'react'
import Card from './Card'

// CSS GOES HERE

class AddressBook extends Component{
    constructor(props){
        super(props)

        this.state = {
            contacts: [
                {
                    name: 'Jane Smith',
                    initials: 'JS',
                    favourite: true,
                    phone: '212-111-1234',
                    email: 'jane@email.com'
                },
                {
                    name:'Sarah Carter',
                    initials: 'SN',
                    favourite: false,
                    phone: '212-222-5323',
                    email: 'sarah@email.com'
                },
                {
                    name: 'Mike Pearson',
                    initials: 'MP',
                    favourite: false,
                    phone: '212-333-1212',
                    email: 'mike@email.com'
                }
            ]
        }

        this.handleFavouriteToggle = this.handleFavouriteToggle.bind(this)
    }

    handleFavouriteToggle(contactIndex) {
        const newContactsState = [...this.state.contacts]
        newContactsState[contactIndex] = {
            ...newContactsState[contactIndex],
            favourite: !newContactsState[contactIndex].favourite
        }

        this.setState({
            contacts: newContactsState
        })
    }

    render() {
        const {
            contacts
        } = this.state

        return(
            <>
            <h3>Address Book</h3>
            {!contacts.length && <p>No contacts!</p>}

            {contacts.map((contact, index) =>{
                const activeClass = contact.favourite? 'active' : 'not-active'
                return (
                    <Card
                    contact={contact}
                    index={index}
                    key={index}
                    activeClass={activeClass}
                    handleFavouriteToggle={this.handleFavouriteToggle}
                    />
                )
            })}
            {/* {contacts.map((contact, index) => {
                const activeClass = contact.favourite? 'active' : 'not-active'
                
                return (
                    <section className="card-container" key={index}>
                        <header className="card-header">
                            <span initials={contact.initials}></span>
                            <h2>{contact.name}</h2>
                            <div className={`favourite ${activeClass}`}>
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
            })}  */}
            </>
        )
    }
}

export default AddressBook;
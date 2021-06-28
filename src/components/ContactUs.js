import React from 'react';

const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className="text-decoration">
                    <p>Skontaktuj się z nami</p>
            </div>
            <form>
                <label>
                    Wpisz swoje imię:
                    <input 
                        type="text"
                        name="name" 
                        placeholder="Imię"
                    />
                </label>
                <label>
                    Wpisz swój e-mail:
                    <input 
                        type="email"
                        name="email" 
                        placeholder="e-mail"
                    />
                </label>
                <label>
                    Wpisz swoją wiadomość:
                    <input 
                        type="text"
                        name="name" 
                        placeholder="Wpisz swoją wiadomość"
                    />
                </label>
                <input type="submit" value="Wyślij" />
                
            </form>
            
        </div>
    );
};

export default ContactUs;
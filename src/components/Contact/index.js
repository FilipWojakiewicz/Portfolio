import './index.scss'
import Loader from '../Loader'
import PopupText from '../PopupText'
import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    useEffect(() => {
        setLetterClass('text-animate-hover')
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_zd6lehi',
            'template_56osyin',
            refForm.current,
            'nxaHD7O2ppY7KtIUJ'
        ).then (
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message!')
            }
        )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <PopupText idx={15} letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}/>
                </h1>

                <p>
                    fffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddd
                    fffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddd
                    ffffffffdddddddddddddddddddddddddffffffffddddddddddddddddddddddddd
                    ffffffffdddddddddddddddddddddddddffffffffddddddddddddddddddddddddd
                    ffffffffdddddddddddddddddddddddddffffffffddddddddddddddddddddddddd
                </p>
                
                <br></br>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}> 
                        <ul>
                            <li className='half'>
                                <input type='text' name="name" placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name="email" placeholder='Email' required/>
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" type="text" name="message" required>

                                </textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>

        <Loader></Loader>
        </>
    )
}

export default Contact
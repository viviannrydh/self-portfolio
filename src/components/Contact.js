import React from 'react'
import { ContactForm, ContactTextSection, ContactWrapper, FormItem, SubmitButton } from '../style-vivian'

const Contact = () => {
    return (
        <ContactWrapper  id="contact">
            <ContactTextSection>
                <h1 style={{color:'rgb(38, 16, 163)'}}>About me</h1>
                <i style={{color:'darkred'}}>Front-end web developer</i>
                <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Odit, assumenda? Eveniet, deserunt? 
                Distinctio corporis ducimus ad, porro at nihil 
                repellat architecto nostrum nulla ratione minus. 
                Molestias at impedit laudantium dicta.</p>
                <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. Odit, assumenda? Eveniet, deserunt? 
                Distinctio corporis ducimus ad, porro at nihil 
                repellat architecto nostrum nulla ratione minus. 
                Molestias at impedit laudantium dicta.</p>
            </ContactTextSection>
            <ContactForm>
                <h1>Let's talk</h1>
                <FormItem>
                    <lable style={{marginBottom:'10px'}}>Name: </lable>
                    <input style={{height:'25px', backgroundColor:'rgb(253, 251, 251,0.9)'}} type="text"/>
                </FormItem>
                <FormItem>
                    <lable style={{marginBottom:'10px'}}>Email: </lable>
                    <input style={{height:'25px', backgroundColor:'rgb(253, 251, 251,0.9)'}} type="text"/>
                </FormItem>
                <FormItem>
                    <lable style={{marginBottom:'10px'}}>Message: </lable>
                    <textarea style={{height:'50px',backgroundColor:'rgb(253, 251, 251,0.9)'}} type="text"/>
                </FormItem>
                <SubmitButton>Send Message</SubmitButton>

            </ContactForm>
        </ContactWrapper>
    )
}

export default Contact

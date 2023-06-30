import React from 'react'

import loadable from '@loadable/component'
const Intro = loadable(() => import('../sections/Universal/Intro'))
const ScrollForMore = loadable(() => import('../sections/Universal/ScrollForMore'))
const AboveForm = loadable(() => import('../sections/Contact/AboveForm'))
const Form = loadable(() => import('../sections/Contact/Form'))

export default function ContactUs() {

    return (
        <div>
            <Intro heading="contact us" subheading="We'd love to hear from you" />
            <ScrollForMore />
            <AboveForm />
            <Form />
        </div>
    )
}
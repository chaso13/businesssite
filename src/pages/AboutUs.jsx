import React from 'react'

import loadable from '@loadable/component'
const DigitalSuperstars = loadable(() => import('../sections/About/DigitalSuperstars'))
const AboveTeamGrid = loadable(() => import('../sections/About/AboveTeamGrid'))
const TeamGrid = loadable(() => import('../sections/About/TeamGrid'))
const WhyItWorks = loadable(() => import('../sections/About/WhyItWorks'))
const WhoWeWorkWithBest = loadable(() => import('../sections/About/WhoWeWorkWithBest'))
const FitCheck = loadable(() => import('../sections/About/FitCheck'))
const Ready = loadable(() => import('../sections/Universal/Ready'))
const Intro = loadable(() => import('../sections/Universal/Intro'))
const ScrollForMore = loadable(() => import('../sections/Universal/ScrollForMore'))

export default function AboutUs() {
    return (
        <div>
            <Intro heading="about us" subheading="Make us Your Secret Weapon" />
            <ScrollForMore />
            <DigitalSuperstars />
            <AboveTeamGrid />
            <TeamGrid />
            <WhyItWorks />
            <WhoWeWorkWithBest />
            <FitCheck />
            <Ready />
        </div>
    )
}
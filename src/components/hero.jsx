import React from 'react'

import '../styles/hero.css'

import phoneImg from '../images/phone.svg'

export default function Hero() {
    return (
        <main className="hero">
            <section className="hero-container">
                <h1 className="hero-title" >Payments infrastructure for the internet</h1>
                <p className="hero-text" >Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
                <button className="hero-start-btn" >Start now</button>
            
            </section>
            <div className="hero-img">
                <img src={phoneImg} alt="" />

            </div>

            
        </main>
    )
}

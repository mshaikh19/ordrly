import { useState } from 'react'
import './App.css'
import './density.css'

const plans = [
  { name: 'Free', price: '₹0', note: 'Set up your catalog and organize your first orders.', features: ['Add products, prices, and stock', 'Track incoming orders in one place', 'Connect one Instagram account'] },
  { name: 'Starter', price: '₹499', note: 'Turn everyday product questions into cleaner checkouts.', featured: true, features: ['Everything in Free', 'Guide supported conversations to an order', 'Send payment links for each order', 'Keep customer order history'] },
  { name: 'Growth', price: '₹999', note: 'Stay organized as your catalog and inbox grow.', features: ['Everything in Starter', 'Handle a higher monthly order volume', 'Invite your team to help manage orders', 'Get priority setup support'] },
]

const faqs = [
  ['Do I need a website?', 'No. You can share your ordrly storefront link through Instagram and keep your existing discovery channel.'],
  ['Who approves the order?', 'You do. Customers send their cart to you first, so you can review the items and decide whether to approve or reject the request.'],
  ['When does the customer pay?', 'After you approve the order, ordrly creates the payment step through your connected payment provider.'],
  ['What happens after payment?', 'The order is confirmed after successful payment, and inventory can be updated as part of the configured order flow.'],
  ['What if a product is out of stock?', 'The storefront can show that the item is unavailable, so customers do not submit an order for stock you do not have.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [paymentState, setPaymentState] = useState('idle')
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const simulatePayment = () => {
    if (paymentState !== 'idle') return
    setPaymentState('checking')
    window.setTimeout(() => setPaymentState('paid'), 800)
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ordrly home"><span className="brand-mark" aria-hidden="true"><span className="brand-mark-core" /></span><span><strong>ordrly</strong><small>INSTAGRAM ORDERS, SIMPLIFIED</small></span></a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>{[['How it works', '#how-it-works'], ['Features', '#features'], ['For businesses', '#audience'], ['Pricing', '#pricing'], ['FAQ', '#faq']].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
        <div className="header-actions"><a className="button button-ghost hide-mobile" href="#demo">See the demo</a><a className="button button-primary" href="#pilot">Get started <span>→</span></a><button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button></div>
      </header>

      <main id="top">
        <div className="announcement"><span className="live-dot" /> Built for small businesses selling through Instagram <a href="#pilot">Get early access →</a></div>

        <section className="hero-section section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span>✦</span> A simpler way to sell through Instagram</div>
            <h1>Turn Instagram conversations into <em>approved orders.</em></h1>
            <p className="hero-lede">Customers browse your storefront, build their cart, and send you the order. You review and approve it. ordrly takes care of the payment step and keeps the order flow organized.</p>
            <div className="hero-actions"><a className="button button-primary button-large" href="#pilot">Start selling free <span>→</span></a><a className="button button-soft button-large" href="#how-it-works"><span>▶</span> See the order flow</a></div>
            <p className="trust-line">Customers build the cart. You approve the order. Payment follows approval.</p>
          </div>
          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="phone-card">
              <div className="phone-top instagram-top"><span className="ig-avatar">WY</span><span><strong>@withloveandyarn.by.m</strong><small>Instagram storefront</small></span><b>•••</b></div>
              <div className="profile-strip"><span className="profile-avatar">WY</span><div><strong>With Love &amp; Yarn</strong><small>Handmade pieces · Ahmedabad</small></div><button type="button">View shop</button></div>
              <div className="chat-window instagram-chat"><div className="bubble customer">Love this bouquet. Can I order one?</div><div className="bot-row"><span className="bot-avatar">o</span><div className="bubble bot product-bubble"><div className="product-image"><span>Crochet<br />daisy</span><b>Available</b></div><strong>Crochet Daisy Bouquet</strong><small>Handmade · ready to ship</small><div className="product-price"><b>₹899</b><span>1 item</span></div><button type="button" className="cart-button">Add to cart</button></div></div><div className="bubble customer cart-bubble">1 item · ₹899 <span>Send order →</span></div><div className="seller-status"><span>✓</span><div><strong>Order sent for review</strong><small>Seller approval comes next</small></div></div>{paymentState === 'paid' && <div className="bubble confirmation"><strong>Payment received ✓</strong><small>Order confirmed · stock updated</small></div>}</div><div className="chat-input">Message <span>➤</span></div>
            </div>
            <div className="floating-card stock-card"><span className="floating-icon">▣</span><span><strong>Availability checked</strong><small>From your product list</small></span></div>
            <div className="floating-card payment-card"><span className="success-icon">✓</span><span><strong>Order confirmed</strong><small>After payment is received</small></span></div>
          </div>
        </section>

        <section className="problem-section section-pad"><div className="section-heading left"><span className="eyebrow">The everyday problem</span><h2>Instagram brings the interest. Your DMs shouldn’t carry the entire order.</h2><p>Today, one customer message can turn into a chain of stock checks, price replies, payment follow-ups, order notes, and inventory updates.</p></div><div className="manual-flow"><span>Customer asks</span><b>→</b><span>Check stock</span><b>→</b><span>Calculate total</span><b>→</b><span>Confirm payment</span><b>→</b><span>Record order</span></div></section>

        <section className="section-pad" id="features"><div className="section-heading"><span className="eyebrow">What ordrly changes</span><h2>Customers build the cart. You approve the order.</h2><p>Give buyers a clearer way to purchase while keeping the final decision in your hands.</p></div><div className="feature-grid"><article><span className="feature-icon lilac">◌</span><span className="tag">STOREFRONT</span><h3>Give customers a place to browse</h3><p>Share one storefront link from Instagram so customers can explore products, choose quantities, and build their own cart.</p></article><article><span className="feature-icon green">✓</span><span className="tag green-text">SELLER CONTROL</span><h3>Review before you accept</h3><p>See the exact items, quantities, and customer details before approving or rejecting an order.</p></article><article><span className="feature-icon amber">▣</span><span className="tag amber-text">ORDER RECORD</span><h3>Keep every step connected</h3><p>Bring products, prices, order status, payment status, and inventory into one organized record.</p></article></div></section>

          <section className="flow-section section-pad" id="how-it-works"><div className="section-heading left"><span className="eyebrow">The order flow</span><h2>Three clear moments. No guesswork.</h2><p>Customers choose. You decide. Payment follows approval.</p></div><div className="flow-grid"><div className="flow-list"><div className="flow-item active"><span>01</span><div><b>Customer builds the cart</b><p>They browse your storefront, choose products, and send the order request.</p></div></div><div className="flow-item"><span>02</span><div><b>You review and approve</b><p>You see the exact cart and decide whether to accept or reject it.</p></div></div><div className="flow-item"><span>03</span><div><b>Payment completes the order</b><p>After approval, the customer pays. The order is confirmed and stock can be updated.</p></div></div></div><div className="flow-panel seller-review-panel"><div className="panel-top"><span>SELLER DECISION</span><b>ORDER REQUEST</b></div><div className="request-card"><div className="request-head"><span className="ig-avatar">WY</span><div><b>With Love &amp; Yarn</b><small>New order request · just now</small></div><span className="request-status">REVIEW</span></div><div className="request-product"><div><b>Crochet Daisy Bouquet</b><small>1 item · ₹899</small></div><strong>₹899</strong></div><div className="request-actions"><button type="button" className="request-reject">Reject</button><button type="button" className="request-approve" onClick={simulatePayment}>{paymentState === 'idle' && 'Approve order'}{paymentState === 'checking' && 'Creating payment step...'}{paymentState === 'paid' && '✓ Payment received'} <span>→</span></button></div></div><div className="approval-note"><span>✓</span><div><b>Your approval comes first</b><small>{paymentState === 'paid' ? 'Payment received. The order is ready to confirm.' : 'Payment is requested only after you approve the cart.'}</small></div></div></div></div></section>


          <section className="dashboard-section section-pad"><div className="section-heading"><span className="eyebrow">Your business workspace</span><h2>Everything behind the storefront, in one place.</h2><p>Know what was requested, what you approved, what was paid, and what still needs your attention.</p></div><div className="dashboard-grid"><div><b>Products</b><span>Manage product details, prices, variants, and availability.</span></div><div><b>Order requests</b><span>Review the exact cart before you approve or reject it.</span></div><div><b>Customers</b><span>Keep customer and order history together.</span></div><div><b>Payment status</b><span>See which approved orders are waiting and which are complete.</span></div></div></section>

          <section className="pricing-section section-pad" id="pricing"><div className="section-heading"><span className="eyebrow">Simple launch pricing</span><h2>Start with your catalog. Grow into more orders.</h2><p>Choose the plan that fits the way you currently sell. Pricing shown here is an introductory plan direction.</p></div><div className="pricing-grid">{plans.map((plan) => <article className={plan.featured ? 'price-card featured' : 'price-card'} key={plan.name}>{plan.featured && <span className="popular">Best for starting</span>}<span className="plan-name">{plan.name}</span><p>{plan.note}</p><strong className="price">{plan.price}<small>/ month</small></strong><ul>{plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul><a className={plan.featured ? 'button button-primary' : 'button button-soft'} href="#pilot">{plan.name === 'Free' ? 'Start free' : 'Get started'} <span>→</span></a></article>)}</div></section>

        <section className="faq-section section-pad" id="faq"><div className="section-heading"><span className="eyebrow">Questions, answered</span><h2>Before you get started.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <button className="faq-item" type="button" key={question} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span><b>{question}</b>{openFaq === index && <small>{answer}</small>}</span><strong>{openFaq === index ? '−' : '+'}</strong></button>)}</div></section>

          <section className="pilot-section section-pad" id="pilot"><div className="pilot-copy"><span className="eyebrow">Early access</span><h2>Your next order shouldn’t require ten DMs.</h2><p>Connect your business, add your products, and help us shape a simpler way to sell through Instagram.</p><ul><li>✓ Start with the free plan</li><li>✓ No website required for the initial workflow</li><li>✓ Built for small businesses</li></ul></div><form className="pilot-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>{submitted ? <div className="success-state"><span>✓</span><h3>You’re on the list.</h3><p>We’ll reach out with the next early-access steps.</p><button className="button button-soft" type="button" onClick={() => setSubmitted(false)}>Submit another</button></div> : <><h3>Get early access</h3><p>Tell us where you sell.</p><label>Business name<input required placeholder="With Love & Yarn" /></label><label>Instagram handle<input required placeholder="@withloveandyarn.by.m" /></label><label>WhatsApp number<input required type="tel" placeholder="+91 98765 43210" /></label><button className="button button-primary button-full" type="submit">Join early access →</button><small>We’ll only use this to contact you about ordrly.</small></>}</form></section>
      </main>

      <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark">o</span><span><strong>ordrly</strong><small>INSTAGRAM ORDERS, SIMPLIFIED</small></span></a><p>Turn conversations into organized orders for small businesses selling through Instagram.</p><a className="footer-email" href="#pilot">Join early access <span>→</span></a></div><div className="footer-column"><strong>Product</strong><a href="#how-it-works">How it works</a><a href="#features">Features</a><a href="#demo">Example journey</a><a href="#pricing">Pricing</a></div><div className="footer-column"><strong>For sellers</strong><a href="#audience">Who it is for</a><a href="#pilot">Get started</a><a href="#faq">Questions</a><a href="#pilot">Contact us</a></div><div className="footer-column footer-note"><strong>Built for the way you sell</strong><p>Start with your Instagram conversations. Keep your products, orders, and customers organized as you grow.</p></div></div><div className="footer-bottom"><span>© 2026 ordrly. All rights reserved.</span><div><a href="#faq">Privacy</a><a href="#faq">Terms</a><a href="#top">Back to top ↑</a></div></div></footer>
    </div>
  )
}

export default App

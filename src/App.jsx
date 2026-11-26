import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Box,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Home,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
  Users,
  X,
} from 'lucide-react'

const phone = '8121951331'
const secondaryPhone = '8097631623'
const emailAddress = 'contact@sheetal.net'
const whatsappUrl = `https://wa.me/91${phone}`

function isValidIndianMobile(value) {
  const digits = value.replace(/\D/g, '')
  const nationalNumber = digits.replace(/^91(?=[6-9]\d{9}$)/, '')
  return /^[6-9]\d{9}$/.test(nationalNumber)
}

const services = [
  {
    title: 'Home relocation',
    description: 'Thoughtful packing and careful transport for your household move.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=82',
    icon: Home,
    option: 'Home Shifting',
  },
  {
    title: 'Office relocation',
    description: 'A practical, organised move for office furniture and equipment.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=82',
    icon: Box,
    option: 'Office Shifting',
  },
  {
    title: 'Local shifting in Bangalore',
    description: 'Local household shifting planned around your schedule and route.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=82',
    icon: MapPin,
    option: 'Home Shifting',
  },
  {
    title: 'Domestic relocation',
    description: 'Move your belongings from Bangalore to destinations across India.',
    image:
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=900&q=82',
    icon: Truck,
    option: 'Home Shifting',
  },
  {
    title: 'Car transportation',
    description: 'Arrange vehicle transportation as part of your relocation plan.',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=82',
    icon: Truck,
    option: 'Car Transportation',
  },
  {
    title: 'Furniture packing & moving',
    description: 'Furniture prepared for the move with packing and handling care.',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=82',
    icon: PackageCheck,
    option: 'Home Shifting',
  },
  {
    title: 'Professional packing',
    description: 'Packing support for household items and fragile belongings.',
    image:
      'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=900&q=82',
    icon: Box,
    option: 'Home Shifting',
  },
  {
    title: 'Loading & unloading',
    description: 'A moving team to help load and unload your packed belongings.',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=82',
    icon: Users,
    option: 'Home Shifting',
  },
  {
    title: 'Door-to-door relocation',
    description: 'Coordinate packing, transportation and unloading for your move.',
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=82',
    icon: Truck,
    option: 'Home Shifting',
  },
]

const routes = [
  {
    name: 'Bangalore to Kolkata',
    kind: 'Domestic relocation',
    entries: [
      ['1 BHK', '₹28,000–₹32,000'],
      ['2 BHK', '₹60,000 onwards'],
      ['3 BHK', '₹90,000–₹1,10,000'],
      ['Hatchback Car', '₹27,000'],
      ['Sedan', '₹32,000'],
      ['SUV', '₹35,000 onwards'],
    ],
  },
  {
    name: 'Bangalore to Mumbai',
    kind: 'Domestic relocation',
    entries: [
      ['1 BHK', '₹25,000 onwards'],
      ['2 BHK', '₹45,000 onwards'],
      ['3 BHK', '₹55,000 onwards'],
      ['Hatchback Car', '₹17,000'],
      ['Sedan', '₹20,000'],
    ],
  },
  {
    name: 'Bangalore to Pune',
    kind: 'Domestic relocation',
    entries: [
      ['1 BHK', '₹22,000 onwards'],
      ['2 BHK', '₹40,000 onwards'],
      ['3 BHK', '₹50,000 onwards'],
      ['Hatchback Car', '₹15,000'],
      ['Sedan', '₹18,000'],
    ],
  },
  {
    name: 'Local Bangalore shifting',
    kind: 'Within 12 km',
    entries: [
      ['1 BHK', '₹3,000–₹7,600 (up to 12 km)'],
      ['2 BHK', '₹4,000–₹8,000 (approximately 12 km)'],
    ],
  },
  {
    name: 'Bangalore to Hyderabad',
    kind: 'Route-specific estimate',
    enquiry: true,
  },
  {
    name: 'Bangalore to Delhi',
    kind: 'Route-specific estimate',
    enquiry: true,
  },
]

const reviews = [
  {
    name: 'Sachin Debu',
    quote:
      'As an interior designer working across locations, I often needed to move customised set materials, including delicate glass items. The team helped with packing, transportation and unloading for repeat relocations.',
    source: 'Customer review adapted from the supplied reference',
  },
  {
    name: 'Customer review (name not provided)',
    quote:
      'I had a smooth, hassle-free home-shifting experience. The packing materials, including foam, moving blankets and boxes, were excellent.',
    source: 'Name not provided; review adapted from the supplied reference',
  },
  {
    name: 'Customer review (name not provided)',
    quote:
      'My items arrived on time and I liked the service. I would have appreciated being informed about the pre-move survey.',
    source: 'Name not provided; review adapted from the supplied reference',
  },
  {
    name: 'Customer review (name not provided)',
    quote:
      'The team listened to my requirements, dismantled furniture, packed kitchen appliances and loaded everything into the vehicle.',
    source: 'Name not provided; review adapted from the supplied reference',
  },
]

const navItems = [
  ['Home', 'home'],
  ['About Us', 'about'],
  ['Services', 'services'],
  ['Shifting Charges', 'pricing'],
  ['Customer Reviews', 'reviews'],
  ['Contact Us', 'contact'],
]

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function navigate(id) {
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <div className="topline">
        <div className="site-container topline-inner">
          <span>Moving made simpler, wherever life takes you.</span>
          <div className="topline-links">
            <a href={`tel:${phone}`}><Phone size={13} /> {phone}</a>
            <a href={`mailto:${emailAddress}`}><Mail size={13} /> {emailAddress}</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="site-container header-inner">
          <a className="brand" href="#home" onClick={(event) => { event.preventDefault(); navigate('home') }} aria-label="FatShe Packers and Movers home">
            <span className="brand-mark"><Truck size={24} strokeWidth={2.2} /></span>
            <span className="brand-copy"><strong>FatShe</strong><small>PACKERS &amp; MOVERS</small></span>
          </a>
          <nav id="main-navigation" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {navItems.map(([label, id]) => (
              <a
                href={`#${id}`}
                key={id}
                onClick={(event) => { event.preventDefault(); navigate(id) }}
                className={activeSection === id ? 'active' : ''}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
            <a className="mobile-nav-quote" href="#quote" onClick={(event) => { event.preventDefault(); navigate('quote') }}>Get free quote <ArrowRight size={15} /></a>
          </nav>
          <div className="header-actions">
            <a className="header-call" href={`tel:${phone}`}><Phone size={15} /> <span>Call now</span></a>
            <a className="header-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact us on WhatsApp"><MessageCircle size={16} /><span>WhatsApp</span></a>
            <a className="button button-orange header-quote" href="#quote" onClick={(event) => { event.preventDefault(); navigate('quote') }}>Get a free quote <ArrowRight size={15} /></a>
          </div>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>
    </>
  )
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading ${centered ? 'centered' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function QuoteForm({ selectedService, onServiceChange }) {
  const [step, setStep] = useState(1)
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    from: '',
    to: '',
    property: '1 BHK',
    service: selectedService || 'Home Shifting',
    requirements: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [draftOpened, setDraftOpened] = useState(false)
  const submitLock = useRef(false)
  const today = useMemo(() => {
    const now = new Date()
    const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    return localDate.toISOString().slice(0, 10)
  }, [])

  useEffect(() => {
    if (selectedService) {
      setValues((current) => ({ ...current, service: selectedService }))
      setStep(1)
      setStatus('')
      setErrors({})
      setDraftOpened(false)
      submitLock.current = false
    }
  }, [selectedService])

  function update(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setStatus('')
    setDraftOpened(false)
    submitLock.current = false
    if (name === 'service') onServiceChange(value)
  }

  function validateStep(currentStep) {
    const nextErrors = {}
    if (currentStep === 1) {
      if (!values.from.trim()) nextErrors.from = 'Enter your pickup address.'
      if (!values.to.trim()) nextErrors.to = 'Enter your destination address.'
      if (!values.date) nextErrors.date = 'Choose your shifting date.'
      else if (values.date < today) nextErrors.date = 'Date cannot be in the past.'
    }
    if (currentStep === 2) {
      if (!values.name.trim()) nextErrors.name = 'Enter your full name.'
      if (!isValidIndianMobile(values.phone)) {
        nextErrors.phone = 'Enter a valid 10-digit Indian mobile number.'
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
        nextErrors.email = 'Enter a valid email address.'
      }
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function advance() {
    if (validateStep(step)) {
      setStep(step + 1)
      setStatus('')
    }
  }

  function submit(event) {
    event.preventDefault()
    if (!validateStep(1)) {
      setStep(1)
      return
    }
    if (!validateStep(2)) {
      setStep(2)
      return
    }
    if (isSubmitting || submitLock.current) return

    submitLock.current = true
    const enquiry = [
      'Hello FatShe Packers and Movers, I would like to request a moving quote.',
      '',
      `Name: ${values.name.trim()}`,
      `Mobile: ${values.phone.trim()}`,
      `Email: ${values.email.trim()}`,
      `Shifting date: ${values.date}`,
      `From: ${values.from.trim()}`,
      `To: ${values.to.trim()}`,
      `Property type: ${values.property}`,
      `Service: ${values.service}`,
      values.requirements.trim() ? `Additional requirements: ${values.requirements.trim()}` : '',
    ].filter(Boolean).join('\n')
    const url = `${whatsappUrl}?text=${encodeURIComponent(enquiry)}`

    setIsSubmitting(true)
    const whatsappWindow = window.open(url, '_blank')
    setIsSubmitting(false)
    if (!whatsappWindow) {
      submitLock.current = false
      setStatus('WhatsApp could not be opened. Please allow pop-ups, or contact us directly using the WhatsApp button.')
      return
    }
    whatsappWindow.opener = null
    setDraftOpened(true)
    setStatus('WhatsApp opened with your enquiry details. Please review the message and press Send to contact us; it has not been submitted to a server.')
  }

  return (
    <div className="quote-card" id="quote">
      <div className="quote-card-head">
        <div>
          <span className="eyebrow">YOUR MOVE, YOUR WAY</span>
          <h2>Get your free quote</h2>
          <p>Share a few details. We’ll take it from there.</p>
        </div>
        <span className="quote-icon"><ArrowDown size={20} /></span>
      </div>
      <div className="step-track" aria-label={`Step ${step} of 3`}>
        {[1, 2, 3].map((number) => (
          <div className={`step-item ${number <= step ? 'step-active' : ''}`} key={number}>
            <span>{number < step ? <Check size={14} /> : number}</span>
            <small>{number === 1 ? 'Your move' : number === 2 ? 'Your details' : 'Review'}</small>
          </div>
        ))}
      </div>
      <form onSubmit={submit} noValidate>
        {step === 1 && (
          <div className="form-grid">
            <Field label="Moving from" name="from" value={values.from} onChange={update} placeholder="Pickup area or address" icon={<MapPin size={16} />} error={errors.from} required autoComplete="street-address" />
            <Field label="Moving to" name="to" value={values.to} onChange={update} placeholder="Destination area or address" icon={<MapPin size={16} />} error={errors.to} required />
            <Field label="Shifting date" name="date" type="date" value={values.date} onChange={update} error={errors.date} required min={today} />
            <SelectField label="Property type" name="property" value={values.property} onChange={update} options={['1 BHK', '2 BHK', '3 BHK', 'Office']} />
            <SelectField label="Service required" name="service" value={values.service} onChange={update} options={['Home Shifting', 'Office Shifting', 'Car Transportation']} />
            <label className="field full-field">
              <span>Additional requirements <small>(optional)</small></span>
              <textarea name="requirements" value={values.requirements} onChange={update} placeholder="Fragile items, preferred timing, or anything else we should know" rows="3" />
            </label>
            <button type="button" className="button button-orange form-next full-field" onClick={advance}>Continue to your details <ArrowRight size={16} /></button>
          </div>
        )}
        {step === 2 && (
          <div className="form-grid">
            <Field label="Full name" name="name" value={values.name} onChange={update} placeholder="Your name" autoComplete="name" error={errors.name} required />
            <Field label="Mobile number" name="phone" type="tel" value={values.phone} onChange={update} placeholder="10-digit Indian number" autoComplete="tel-national" error={errors.phone} required />
            <Field label="Email address" name="email" type="email" value={values.email} onChange={update} placeholder="you@example.com" autoComplete="email" error={errors.email} required className="full-field" />
            <div className="form-step-actions full-field">
              <button type="button" className="button button-outline" onClick={() => setStep(1)}><ChevronLeft size={16} /> Back</button>
              <button type="button" className="button button-orange" onClick={advance}>Review enquiry <ArrowRight size={16} /></button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="review-summary">
            <h3>Check your move details</h3>
            <dl>
              <SummaryItem label="Route" value={`${values.from} → ${values.to}`} />
              <SummaryItem label="Moving date" value={values.date} />
              <SummaryItem label="Move type" value={`${values.property} · ${values.service}`} />
              <SummaryItem label="Contact" value={`${values.name} · ${values.phone}`} />
              <SummaryItem label="Email" value={values.email} />
              {values.requirements && <SummaryItem label="Notes" value={values.requirements} />}
            </dl>
            <p className="whatsapp-note"><MessageCircle size={16} /> Continuing in WhatsApp lets you review and send this enquiry directly.</p>
            <div className="form-step-actions">
              <button type="button" className="button button-outline" onClick={() => setStep(2)}><ChevronLeft size={16} /> Edit details</button>
              <button className="button button-orange" type="submit" disabled={isSubmitting || draftOpened}>
                {isSubmitting ? 'Opening WhatsApp…' : draftOpened ? 'WhatsApp draft opened' : 'Continue with WhatsApp'} <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
        {status && <div className="form-status" role="status">{status}</div>}
      </form>
      <p className="form-privacy">Your details are included in a WhatsApp draft. Nothing is stored on this website.</p>
    </div>
  )
}

function Field({ label, name, value, onChange, type = 'text', placeholder, icon, error, required, min, autoComplete, className = '' }) {
  return (
    <label className={`field ${className}`}>
      <span>{label}{required && <b aria-hidden="true"> *</b>}</span>
      <div className={`input-wrap ${icon ? 'has-icon' : ''}`}>
        {icon}
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          min={min}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      </div>
      {error && <small className="field-error" id={`${name}-error`}>{error}</small>}
    </label>
  )
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <label className="field">
      <span>{label}</span>
      <div className="select-wrap">
        <select name={name} value={value} onChange={onChange}>
          {options.map((option) => <option key={option}>{option}</option>)}
        </select>
        <ChevronDown size={16} />
      </div>
    </label>
  )
}

function SummaryItem({ label, value }) {
  return <div><dt>{label}</dt><dd>{value}</dd></div>
}

function Hero({ selectedService, onServiceChange }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-image" role="img" aria-label="Moving truck ready for a relocation" />
      <div className="hero-shade" />
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <span className="hero-kicker"><span /> YOUR NEXT CHAPTER STARTS HERE</span>
          <h1>Reliable Packers and Movers <em>in Bangalore</em></h1>
          <p>Safe, secure and hassle-free home &amp; office relocation services.</p>
          <div className="hero-actions">
            <a href="#quote" className="button button-orange" onClick={(event) => { event.preventDefault(); scrollToSection('quote') }}>Get a free quote <ArrowRight size={17} /></a>
            <a href={`tel:${phone}`} className="button button-light-outline"><Phone size={16} /> Call now</a>
            <a href={`${whatsappUrl}?text=${encodeURIComponent('Hello FatShe Packers and Movers, I would like to enquire about relocation services in Bangalore.')}`} target="_blank" rel="noreferrer" className="button button-whatsapp"><MessageCircle size={16} /> WhatsApp</a>
          </div>
          <div className="hero-trust">
            <span><ShieldCheck size={17} /> Careful packing</span>
            <span><Users size={17} /> Professional handling</span>
            <span><Clock3 size={17} /> Planned delivery</span>
          </div>
        </div>
        <QuoteForm selectedService={selectedService} onServiceChange={onServiceChange} />
      </div>
      <a className="hero-scroll" href="#about" onClick={(event) => { event.preventDefault(); scrollToSection('about') }}>
        <span>Scroll to explore</span><ArrowDown size={15} />
      </a>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="site-container about-layout">
        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=85"
            alt="Bright, carefully arranged home ready for a fresh start"
            loading="lazy"
          />
          <div className="about-stamp"><Truck size={22} /><span>Moving with<br /><strong>care &amp; clarity</strong></span></div>
        </div>
        <div className="about-copy">
          <SectionHeading eyebrow="A LITTLE ABOUT US" title="A smoother move begins with a thoughtful plan." />
          <p>FatShe Packers and Movers supports people and businesses planning a move in Bangalore and to destinations across India. We help coordinate the important parts of relocation, from packing and transportation to unloading at your new address.</p>
          <p>Whether you are moving a home, an office or a vehicle, our customer-focused approach starts by understanding your requirements and sharing a quote for your specific move.</p>
          <div className="about-points">
            <span><Check size={16} /> Local and domestic relocation</span>
            <span><Check size={16} /> Household and office shifting</span>
            <span><Check size={16} /> Packing, transportation and unloading</span>
          </div>
          <a className="text-link" href="#services" onClick={(event) => { event.preventDefault(); scrollToSection('services') }}>Explore our services <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  )
}

function Services({ onChooseService }) {
  return (
    <section className="section services-section" id="services">
      <div className="site-container">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Moving support for every kind of journey."
          description="Choose the service you need and tell us a little about your move. We’ll prepare an enquiry around it."
          centered
        />
        <div className="services-grid">
          {services.map(({ title, description, image, icon: Icon, option }) => (
            <article className="service-card" key={title}>
              <div className="service-image">
                <img src={image} alt={title} loading="lazy" />
                <span className="service-icon"><Icon size={19} /></span>
              </div>
              <div className="service-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="service-link" type="button" onClick={() => onChooseService(option)}>
                  Enquire about this service <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing({ onChooseService }) {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="site-container">
        <SectionHeading
          eyebrow="PLANNING YOUR BUDGET"
          title="Shifting charges at a glance."
          description="Indicative route prices to help you plan. Ask us for a quote tailored to your inventory and move."
          centered
        />
        <div className="pricing-grid">
          {routes.map((route) => (
            <article className={`price-card ${route.enquiry ? 'price-enquiry' : ''}`} key={route.name}>
              <div className="price-card-top">
                <span>{route.kind}</span>
                <MapPin size={18} />
              </div>
              <h3>{route.name}</h3>
              {route.enquiry ? (
                <div className="route-enquiry-copy">
                  <strong>Get a personalised estimate</strong>
                  <p>Pricing for this route is enquiry-based. Share your move details for a quote.</p>
                </div>
              ) : (
                <ul className="price-list">
                  {route.entries.map(([type, price]) => (
                    <li key={type}><span>{type}</span><strong>{price}</strong></li>
                  ))}
                </ul>
              )}
              <button className="button button-outline price-button" type="button" onClick={() => onChooseService(route.enquiry ? 'Home Shifting' : route.entries.some(([type]) => type.includes('Car')) ? 'Car Transportation' : 'Home Shifting')}>
                Get a quote <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>
        <p className="pricing-disclaimer"><ShieldCheck size={16} /> Final prices depend on distance, inventory, floor level and other requirements. Request a personalised quote before booking.</p>
      </div>
    </section>
  )
}

function WhyUs() {
  const reasons = [
    ['Professional packing materials', 'Packing materials chosen to suit the belongings being moved.', Box],
    ['Careful handling of goods', 'Thoughtful handling for household belongings and fragile items.', ShieldCheck],
    ['Experienced moving team', 'A team to assist with packing, loading and unloading.', Users],
    ['Door-to-door services', 'Coordinate pickup and delivery as part of one move.', Truck],
    ['Transparent quotations', 'Discuss your requirements and receive a quote for your move.', Check],
    ['Customer support', 'Get in touch to ask questions and plan the next steps.', MessageCircle],
  ]
  return (
    <section className="section why-section">
      <div className="site-container why-layout">
        <div className="why-intro">
          <SectionHeading eyebrow="WHY FAT SHE" title="The details matter. So does the way we move them." description="Relocation is personal. We focus on clear communication and practical help from planning through delivery." />
          <a href="#quote" className="button button-orange" onClick={(event) => { event.preventDefault(); scrollToSection('quote') }}>Plan your move <ArrowRight size={16} /></a>
        </div>
        <div className="reasons-grid">
          {reasons.map(([title, description, Icon]) => (
            <article className="reason-card" key={title}>
              <span><Icon size={19} /></span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function BookingSteps() {
  const steps = [
    ['01', 'Tell us your route', 'Share your pickup and destination addresses.'],
    ['02', 'Choose a date', 'Let us know when you are planning to move.'],
    ['03', 'Describe your move', 'Select a property type and the service you need.'],
    ['04', 'Add your contact details', 'Give us a way to follow up about your enquiry.'],
    ['05', 'Review and send', 'Check the details, then continue to WhatsApp to send.'],
  ]
  return (
    <section className="section booking-section" id="booking">
      <div className="site-container booking-layout">
        <div className="booking-copy">
          <SectionHeading eyebrow="HOW IT WORKS" title="Five simple steps to get your move started." description="No account needed. Your enquiry is prepared for WhatsApp so you can review it before sending." />
          <button className="text-link" type="button" onClick={() => scrollToSection('quote')}>Start your enquiry <ArrowRight size={16} /></button>
        </div>
        <div className="booking-steps">
          {steps.map(([number, title, description]) => (
            <div className="booking-step" key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const [index, setIndex] = useState(0)
  const visible = [reviews[index], reviews[(index + 1) % reviews.length], reviews[(index + 2) % reviews.length]]
  return (
    <section className="section reviews-section" id="reviews">
      <div className="site-container">
        <div className="reviews-heading-row">
          <SectionHeading
            eyebrow="CUSTOMER VOICES"
            title="Experiences shared by customers."
            description="Review excerpts are adapted for readability from the referenced website. No ratings have been added."
          />
          <div className="carousel-controls">
            <button type="button" aria-label="Previous reviews" onClick={() => setIndex((index + reviews.length - 1) % reviews.length)}><ChevronLeft size={19} /></button>
            <button type="button" aria-label="Next reviews" onClick={() => setIndex((index + 1) % reviews.length)}><ChevronRight size={19} /></button>
          </div>
        </div>
        <div className="reviews-grid">
          {visible.map((review, position) => (
            <article className={`review-card ${position === 1 ? 'review-featured' : ''}`} key={`${review.name}-${index}-${position}`}>
              <span className="quote-mark">“</span>
              <p>{review.quote}</p>
              <div className="review-author"><span className="author-avatar">{review.name === 'Sachin Debu' ? 'SD' : 'C'}</span><div><strong>{review.name}</strong><small>{review.source}</small></div></div>
            </article>
          ))}
        </div>
        <div className="carousel-dots" aria-label={`Review group ${index + 1} of ${reviews.length}`}>
          {reviews.map((review, dotIndex) => <button key={`${review.name}-${dotIndex}`} type="button" aria-label={`Show review group ${dotIndex + 1}`} className={index === dotIndex ? 'selected' : ''} onClick={() => setIndex(dotIndex)} />)}
        </div>
      </div>
    </section>
  )
}

function Contact({ onChooseService }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="site-container">
        <div className="contact-banner">
          <div><span className="eyebrow">READY WHEN YOU ARE</span><h2>Let’s make your next move feel easier.</h2><p>Tell us where you’re going. We’ll help you plan what comes next.</p></div>
          <button className="button button-orange" type="button" onClick={() => onChooseService('Home Shifting')}>Get your free quote <ArrowRight size={16} /></button>
        </div>
        <div className="contact-layout">
          <div className="contact-details">
            <SectionHeading eyebrow="SAY HELLO" title="We’re here to help you plan." description="Talk with us about your move, the route, or the services you need." />
            <div className="contact-list">
              <a href={`tel:${phone}`}><span><Phone size={19} /></span><div><small>Jio</small><strong>{phone}</strong></div><ArrowRight size={15} /></a>
              <a href={`tel:${secondaryPhone}`}><span><Phone size={19} /></span><div><small>Airtel</small><strong>{secondaryPhone}</strong></div><ArrowRight size={15} /></a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer"><span><MessageCircle size={19} /></span><div><small>WhatsApp</small><strong>Chat with our team</strong></div><ArrowRight size={15} /></a>
              <a href={`mailto:${emailAddress}`}><span><Mail size={19} /></span><div><small>Email</small><strong>{emailAddress}</strong></div><ArrowRight size={15} /></a>
            </div>
          </div>
          <div className="contact-info-card">
            <div className="info-block"><span><MapPin size={18} /></span><div><h3>Office address</h3><p>IFEM, Plot No. 2, 2nd Floor,<br />Kapil Vihar,<br />Delhi - 110034, India.</p><small>Address as supplied by the business</small></div></div>
            <div className="info-block"><span><Clock3 size={18} /></span><div><h3>Office hours</h3><p>Monday to Saturday<br />10:00 AM – 8:00 PM<br /><span className="closed-day">Sunday: Closed</span></p></div></div>
            <p className="location-note">Serving relocation enquiries in Bangalore and across India. A map is not shown because the supplied office address is in Delhi.</p>
          </div>
          <ContactMessageForm />
        </div>
      </div>
    </section>
  )
}

function ContactMessageForm() {
  const [values, setValues] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [draftOpened, setDraftOpened] = useState(false)
  const submitLock = useRef(false)

  function update(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setStatus('')
    setDraftOpened(false)
    submitLock.current = false
  }

  function submit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Enter your name.'
    if (!isValidIndianMobile(values.phone)) nextErrors.phone = 'Enter a valid 10-digit Indian mobile number.'
    if (!values.message.trim()) nextErrors.message = 'Tell us how we can help.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    if (isSubmitting || submitLock.current) return

    submitLock.current = true
    setIsSubmitting(true)
    const text = `Hello FatShe Packers and Movers, my name is ${values.name.trim()} (${values.phone.trim()}).\n\n${values.message.trim()}`
    const contactWindow = window.open(`${whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank')
    setIsSubmitting(false)
    if (!contactWindow) {
      submitLock.current = false
      setStatus('WhatsApp could not be opened. Please allow pop-ups, or contact us using the details above.')
      return
    }
    contactWindow.opener = null
    setDraftOpened(true)
    setStatus('WhatsApp opened with your message. Please press Send to contact us; this website does not store messages.')
  }

  return (
    <form className="contact-message-form" onSubmit={submit} noValidate>
      <h3>Send us a message</h3>
      <p>We’ll prepare a WhatsApp message for you to review and send.</p>
      <div className="contact-form-fields">
        <label className="field">
          <span>Your name <b aria-hidden="true">*</b></span>
          <input name="name" value={values.name} onChange={update} placeholder="Full name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />
          {errors.name && <small className="field-error" id="contact-name-error">{errors.name}</small>}
        </label>
        <label className="field">
          <span>Mobile number <b aria-hidden="true">*</b></span>
          <input name="phone" type="tel" value={values.phone} onChange={update} placeholder="10-digit Indian number" autoComplete="tel-national" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'contact-phone-error' : undefined} />
          {errors.phone && <small className="field-error" id="contact-phone-error">{errors.phone}</small>}
        </label>
        <label className="field full-field">
          <span>How can we help? <b aria-hidden="true">*</b></span>
          <textarea name="message" rows="3" value={values.message} onChange={update} placeholder="Tell us what you need" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />
          {errors.message && <small className="field-error" id="contact-message-error">{errors.message}</small>}
        </label>
        <button className="button button-orange full-field" type="submit" disabled={isSubmitting || draftOpened}>{isSubmitting ? 'Opening WhatsApp…' : draftOpened ? 'WhatsApp draft opened' : 'Continue with WhatsApp'} <ArrowRight size={16} /></button>
      </div>
      {status && <div className="form-status" role="status">{status}</div>}
    </form>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#home" onClick={(event) => { event.preventDefault(); scrollToSection('home') }}>
              <span className="brand-mark"><Truck size={24} /></span><span className="brand-copy"><strong>FatShe</strong><small>PACKERS &amp; MOVERS</small></span>
            </a>
            <p>Thoughtful packing and relocation support for homes, offices and vehicles moving from Bangalore.</p>
          </div>
          <FooterLinks title="Explore" links={navItems.slice(0, 4)} />
          <FooterLinks title="Services" links={services.slice(0, 5).map((service) => [service.title, 'services'])} />
          <div className="footer-contact"><h3>Get in touch</h3><a href={`tel:${phone}`}><Phone size={14} /> {phone}</a><a href={`mailto:${emailAddress}`}><Mail size={14} /> {emailAddress}</a><p>Mon–Sat, 10 AM–8 PM<br />Sunday: Closed</p></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} FatShe Packers and Movers. All rights reserved.</span><a href="#home" onClick={(event) => { event.preventDefault(); scrollToSection('home') }}>Back to top <ArrowUp size={14} /></a></div>
      </div>
    </footer>
  )
}

function FooterLinks({ title, links }) {
  return (
    <div className="footer-links">
      <h3>{title}</h3>
      {links.map(([label, id]) => <a key={`${title}-${label}`} href={`#${id}`} onClick={(event) => { event.preventDefault(); scrollToSection(id) }}>{label}</a>)}
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedService, setSelectedService] = useState('')
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (current) setActiveSection(current.target.id)
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.1, 0.4] })
    sections.forEach((section) => observer.observe(section))
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  function chooseService(service) {
    setSelectedService(service)
    scrollToSection('quote')
  }

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero selectedService={selectedService} onServiceChange={setSelectedService} />
        <div className="trust-strip">
          <div className="site-container trust-strip-inner">
            <span><ShieldCheck size={18} /> Careful handling</span><span><PackageCheck size={18} /> Packing support</span><span><Truck size={18} /> Local &amp; domestic moves</span><span><MessageCircle size={18} /> Enquire on WhatsApp</span>
          </div>
        </div>
        <About />
        <Services onChooseService={chooseService} />
        <Pricing onChooseService={chooseService} />
        <WhyUs />
        <BookingSteps />
        <Reviews />
        <Contact onChooseService={chooseService} />
      </main>
      <Footer />
      <div className="floating-actions">
        <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact us on WhatsApp"><MessageCircle size={22} /></a>
        <a className="floating-call" href={`tel:${phone}`} aria-label="Call FatShe Packers and Movers"><Phone size={20} /></a>
      </div>
      {showTop && <button className="back-to-top" type="button" aria-label="Back to top" onClick={() => scrollToSection('home')}><ArrowUp size={19} /></button>}
    </>
  )
}

export default App

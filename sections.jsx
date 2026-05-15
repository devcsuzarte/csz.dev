// sections.jsx — Section components for the portfolio

function SectionHead({ num, title, sub, id }) {
  return (
    <div className="section-head" id={id}>
      <span className="section-num">{num}</span>
      <h2 className="section-title">{title}</h2>
      {sub && <div className="section-sub">{sub}</div>}
    </div>
  );
}

function Nav({ lang, setLang, t }) {
  return (
    <nav className="nav">
      <div className="page nav-inner">
        <a href="#top" className="nav-brand">
          <span className="nav-avatar" style={{ backgroundImage: 'url(assets/claudio.png)' }}></span>
          <span>csz<span style={{ color: 'var(--accent)' }}>.</span>dev</span>
        </a>
        <div className="nav-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#apps">{t.nav.apps}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#work">{t.nav.work}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>
        <div className="nav-right">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button className={lang === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>PT</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────────
// Hero with iPhone carousel
// ─────────────────────────────────────────────────────────────
function PhoneCarousel({ apps }) {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(i => (i + 1) % apps.length), 4500);
    return () => clearInterval(t);
  }, [paused, apps.length]);

  const Screens = [
    window.CarrinhoFacilScreen,
    window.AutoTechScreen,
    window.GymBuddyScreen,
    window.ClinFlowScreen,
  ];
  const Current = Screens[idx];
  const current = apps[idx];

  const go = (delta) => {
    setPaused(true);
    setIdx(i => (i + delta + apps.length) % apps.length);
  };

  return (
    <div className="phone-stage" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="phone-label">
        <div className="phone-label-icon" style={{ background: current.color, color: '#001018' }}>
          {current.name[0]}
        </div>
        <span>{current.name}</span>
        {current.status === 'wip' && <span style={{ color: '#ff9f1c', fontSize: 10 }}>· WIP</span>}
      </div>
      <div className="phone-frame-scale">
        <window.IOSDevice dark={true} width={402} height={874}>
          <Current />
        </window.IOSDevice>
      </div>
      <div className="phone-controls">
        <button className="phone-arrow" onClick={() => go(-1)} aria-label="Previous app">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div className="phone-dots">
          {apps.map((_, i) => (
            <button key={i} className={'phone-dot' + (i === idx ? ' active' : '')} onClick={() => { setPaused(true); setIdx(i); }} aria-label={'App ' + (i + 1)} />
          ))}
        </div>
        <button className="phone-arrow" onClick={() => go(1)} aria-label="Next app">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </div>
  );
}

function Hero({ t, apps }) {
  return (
    <section className="page hero" id="top">
      <div>
        <div className="hero-eyebrow">
          <span className="status-dot"></span>
          {t.hero.status}
        </div>
        <h1>
          <em>{t.hero.h1Pre}</em>
          <span className="accent">{t.hero.h1Accent}</span>
          <em>{t.hero.h1Post}</em>
        </h1>
        <p className="hero-sub">{t.hero.sub}</p>
        <div className="hero-cta">
          <a className="btn btn-accent" href="#contact">
            {t.hero.ctaPrimary}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a className="btn" href="#apps">{t.hero.ctaSecondary}</a>
        </div>
        <div className="hero-meta">
          {t.hero.meta.map((m, i) => (
            <div key={i} className="meta-item">
              <div className="meta-label">{m.l}</div>
              <div className="meta-value">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
      <PhoneCarousel apps={apps} />
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// About
// ─────────────────────────────────────────────────────────────
function About({ t }) {
  return (
    <section className="page section" id="about">
      <SectionHead num={t.sections.about.num} title={t.sections.about.title} sub={t.sections.about.sub} />
      <div className="about-grid">
        <div className="about-photo-card">
          <img src="assets/claudio.png" alt="Claudio Suzarte" />
          <div className="about-photo-tag">{t.about.tag}</div>
        </div>
        <div>
          <div className="about-bio">
            {t.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="about-stats">
            {t.about.stats.map((s, i) => (
              <div key={i} className="about-stat">
                <div className="v">{s.v}<span className="accent">.</span></div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Apps list
// ─────────────────────────────────────────────────────────────
function AppsList({ t }) {
  return (
    <section className="page section" id="apps">
      <SectionHead num={t.sections.apps.num} title={t.sections.apps.title} sub={t.sections.apps.sub} />
      <div className="apps-list">
        {t.apps.map((a, i) => (
          <div className="app-row" key={i}>
            <div className="app-icon" style={{ background: a.color }}>{a.name[0]}</div>
            <div className="app-info">
              <h3>
                {a.name}
                <span className={'app-badge' + (a.status === 'live' ? ' live' : '')}>
                  {a.status === 'live' ? (t === window.COPY.pt ? 'No ar' : 'Live') : 'WIP'}
                </span>
              </h3>
              <p>{a.desc}</p>
              <div className="app-tags">
                {a.tags.map(tg => <span className="app-tag" key={tg}>{tg}</span>)}
              </div>
            </div>
            <a className="ext-link" href="#" aria-label="Open">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Skills
// ─────────────────────────────────────────────────────────────
function Skills({ t }) {
  return (
    <section className="page section" id="skills">
      <SectionHead num={t.sections.skills.num} title={t.sections.skills.title} sub={t.sections.skills.sub} />
      <div className="skills-grid">
        {t.skills.map((s, i) => (
          <div className="skill-cell" key={i}>
            <div className="cat">{s.cat}</div>
            <div className="items">
              {s.items.map(it => <span key={it}>{it}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Experience timeline
// ─────────────────────────────────────────────────────────────
function Experience({ t }) {
  return (
    <section className="page section" id="work">
      <SectionHead num={t.sections.work.num} title={t.sections.work.title} sub={t.sections.work.sub} />
      <div className="timeline">
        {t.work.map((w, i) => (
          <div className="timeline-row" key={i}>
            <div className="when">{w.when}</div>
            <div>
              <h4>{w.role}</h4>
              <div className="where">{w.where}</div>
              <p>{w.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Services
// ─────────────────────────────────────────────────────────────
function Services({ t }) {
  return (
    <section className="page section" id="services">
      <SectionHead num={t.sections.services.num} title={t.sections.services.title} sub={t.sections.services.sub} />
      <div className="services-grid">
        {t.services.map((s, i) => (
          <div className={'service-card' + (s.featured ? ' featured' : '')} key={i}>
            {s.featured && <div className="featured-tag">{t === window.COPY.pt ? 'Mais popular' : 'Most popular'}</div>}
            <h3>{s.name}</h3>
            <div className="price">{s.price}<small> {s.unit}</small></div>
            <p>{s.desc}</p>
            <ul>
              {s.features.map(f => (
                <li key={f}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {f}
                </li>
              ))}
            </ul>
            <a className={'btn ' + (s.featured ? 'btn-accent' : 'btn-primary')} href="#contact">{s.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Testimonials
// ─────────────────────────────────────────────────────────────
function Testimonials({ t }) {
  return (
    <section className="page section" id="testimonials">
      <SectionHead num={t.sections.testimonials.num} title={t.sections.testimonials.title} sub={t.sections.testimonials.sub} />
      <div className="testi-grid">
        {t.testimonials.map((tt, i) => (
          <div className="testi-card" key={i}>
            <div className="stars">
              {[0,1,2,3,4].map(j => (
                <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
            </div>
            <p>"{tt.text}"</p>
            <div className="testi-author">
              <div className="testi-avatar" style={{ background: tt.color }}>{tt.initials}</div>
              <div>
                <div className="name">{tt.name}</div>
                <div className="role">{tt.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Contact
// ─────────────────────────────────────────────────────────────
function Contact({ t }) {
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4500); };
  return (
    <section className="page section" id="contact">
      <SectionHead num={t.sections.contact.num} title={t.sections.contact.title} sub={t.sections.contact.sub} />
      <div className="contact-grid">
        <div className="contact-side">
          <h3>{t.contact.kicker}</h3>
          <p>{t.contact.lede}</p>
          <a className="quick-mail" href={'mailto:' + t.contact.email}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            {t.contact.email}
          </a>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <div className="row2">
            <div className="field">
              <label>{t.contact.form.name}</label>
              <input type="text" required />
            </div>
            <div className="field">
              <label>{t.contact.form.email}</label>
              <input type="email" required />
            </div>
          </div>
          <div className="row2">
            <div className="field">
              <label>{t.contact.form.company}</label>
              <input type="text" />
            </div>
            <div className="field">
              <label>{t.contact.form.budget}</label>
              <select>
                {t.contact.form.budgets.map(b => <option key={b}>{b}</option>)}
              </select>
            </div>
          </div>
          <div className="field">
            <label>{t.contact.form.message}</label>
            <textarea rows="5" placeholder={t.contact.form.messagePh} required />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button type="submit" className="btn btn-accent">
              {t.contact.form.submit}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
            {sent && (
              <div className="field-msg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {t.contact.form.sent}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Footer
// ─────────────────────────────────────────────────────────────
function Footer({ t }) {
  const socials = [
    { name: 'GitHub', url: '#', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.9.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.2.9 2.3v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/></svg> },
    { name: 'LinkedIn', url: '#', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.3c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7c1 0 1.7.8 1.7 1.7s-.7 1.7-1.7 1.7zm13.5 12.3h-3v-5.6c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7h-3v-11h2.9v1.5c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.7v6.5z"/></svg> },
    { name: 'Email', url: 'mailto:' + t.contact.email, icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  ];
  return (
    <footer className="footer">
      <div className="page">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="word">csz.dev</div>
            <div className="sig">{t.footer.tagline}</div>
          </div>
          <div className="footer-socials">
            {socials.map(s => (
              <a key={s.name} className="social-pill" href={s.url}>
                {s.icon}
                {s.name}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <div>{t.footer.sig}</div>
          <div>{t.footer.colophon}</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, About, AppsList, Skills, Experience, Services, Testimonials, Contact, Footer });

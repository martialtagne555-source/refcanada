function Landing() {
  return (
    <div style={{minHeight: '100vh', fontFamily: 'Inter, sans-serif'}}>

      {/* NAVIGATION */}
      <nav style={{background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', width: '100%', top: 0, zIndex: 50}}>
        <div style={{fontSize: 24, fontWeight: 700}}>
          <span style={{color: '#1B4FD8'}}>Ref</span><span style={{color: '#E63946'}}>Canada</span>
        </div>
        <div style={{display: 'flex', gap: 12}}>
          <button style={{padding: '10px 20px', border: '2px solid #1B4FD8', color: '#1B4FD8', borderRadius: 8, background: 'white', cursor: 'pointer', fontWeight: 600}}>
            Connexion
          </button>
          <button style={{padding: '10px 20px', background: '#1B4FD8', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600}}>
            Commencer gratuitement
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{background: 'linear-gradient(135deg, #1B4FD8, #0f2d8a)', color: 'white', padding: '140px 40px 80px', textAlign: 'center'}}>
        <div style={{display: 'inline-block', background: 'rgba(255,255,255,0.15)', padding: '8px 20px', borderRadius: 999, fontSize: 14, marginBottom: 24}}>
          La plateforme N1 pour le TCF et TEF Canada
        </div>
        <h1 style={{fontSize: 48, fontWeight: 700, marginBottom: 20, lineHeight: 1.2, maxWidth: 700, margin: '0 auto 20px'}}>
          Reussissez votre TCF ou TEF Canada du premier coup
        </h1>
        <p style={{fontSize: 20, color: 'rgba(255,255,255,0.8)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6}}>
          Preparation complete avec correction par intelligence artificielle, parcours adaptatif et tests blancs. Pense pour les francophones africains.
        </p>
        <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
          <button style={{padding: '16px 36px', background: '#FBBF24', color: '#1e3a8a', border: 'none', borderRadius: 12, fontSize: 18, fontWeight: 700, cursor: 'pointer'}}>
            Demarrer gratuitement
          </button>
          <button style={{padding: '16px 36px', background: 'rgba(255,255,255,0.1)', color: 'white', border: '2px solid rgba(255,255,255,0.3)', borderRadius: 12, fontSize: 18, fontWeight: 600, cursor: 'pointer'}}>
            Voir la demo
          </button>
        </div>

        {/* COMPTEURS */}
        <div style={{display: 'flex', justifyContent: 'center', gap: 60, marginTop: 60, flexWrap: 'wrap'}}>
          <div>
            <div style={{fontSize: 40, fontWeight: 700, color: '#FBBF24'}}>92%</div>
            <div style={{color: 'rgba(255,255,255,0.7)', marginTop: 4}}>Taux de reussite</div>
          </div>
          <div>
            <div style={{fontSize: 40, fontWeight: 700, color: '#FBBF24'}}>5 000+</div>
            <div style={{color: 'rgba(255,255,255,0.7)', marginTop: 4}}>Candidats formes</div>
          </div>
          <div>
            <div style={{fontSize: 40, fontWeight: 700, color: '#FBBF24'}}>TCF et TEF</div>
            <div style={{color: 'rgba(255,255,255,0.7)', marginTop: 4}}>Les deux examens</div>
          </div>
        </div>
      </section>

      {/* FONCTIONNALITES */}
      <section style={{padding: '80px 40px', background: '#F8FAFF'}}>
        <h2 style={{textAlign: 'center', fontSize: 32, fontWeight: 700, color: '#1E293B', marginBottom: 12}}>
          Pourquoi choisir RefCanada ?
        </h2>
        <p style={{textAlign: 'center', color: '#64748B', marginBottom: 48}}>Tout ce que les autres plateformes n ont pas</p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, maxWidth: 1100, margin: '0 auto'}}>
          {[
            {icon: '🤖', titre: 'Correction par IA', desc: 'Recevez un feedback detaille sur votre expression ecrite et orale en moins de 10 secondes, disponible 24h/24.'},
            {icon: '🎯', titre: 'Parcours adaptatif', desc: 'La plateforme analyse votre niveau et cree un programme personnalise selon votre objectif NCLC.'},
            {icon: '📱', titre: 'Mobile optimise', desc: 'Preparez-vous depuis votre telephone, meme avec une connexion limitee.'},
            {icon: '🇨🇦', titre: 'TCF ET TEF Canada', desc: 'Seule plateforme couvrant les deux examens en une interface unique.'},
            {icon: '👥', titre: 'Communaute africaine', desc: 'Rejoignez des milliers de candidats du Cameroun, Senegal, Cote d Ivoire, Algerie et Maroc.'},
            {icon: '🏆', titre: 'Garantie resultat', desc: 'Si vous n atteignez pas votre niveau cible, nous prolongeons votre acces gratuitement.'},
          ].map(function(item, i) {
            return (
              <div key={i} style={{background: 'white', padding: 28, borderRadius: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', border: '1px solid #E2E8F0'}}>
                <div style={{fontSize: 40, marginBottom: 16}}>{item.icon}</div>
                <h3 style={{fontSize: 18, fontWeight: 700, color: '#1E293B', marginBottom: 8}}>{item.titre}</h3>
                <p style={{color: '#64748B', lineHeight: 1.6}}>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* TARIFS */}
      <section style={{padding: '80px 40px', background: 'white'}}>
        <h2 style={{textAlign: 'center', fontSize: 32, fontWeight: 700, color: '#1E293B', marginBottom: 12}}>Nos tarifs</h2>
        <p style={{textAlign: 'center', color: '#64748B', marginBottom: 48}}>Choisissez la formule adaptee a votre objectif</p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, maxWidth: 1000, margin: '0 auto'}}>
          {[
            {nom: 'Starter', prix: '9 900', duree: '30 jours', items: ['Tests blancs illimites', 'Exercices CO et CE', '5 corrections IA / mois', 'Tableau de bord'], popular: false},
            {nom: 'Premium', prix: '19 900', duree: '60 jours', items: ['Tout Starter inclus', 'Corrections IA illimitees', 'Parcours adaptatif', 'Statistiques avancees', 'Acces communaute'], popular: true},
            {nom: 'Prestige', prix: '39 900', duree: '90 jours', items: ['Tout Premium inclus', '3 sessions coaching humain', 'Correction manuelle expert', 'Garantie resultat', 'Support prioritaire'], popular: false},
          ].map(function(plan, i) {
            return (
              <div key={i} style={{border: plan.popular ? '2px solid #1B4FD8' : '1px solid #E2E8F0', borderRadius: 16, padding: 32, position: 'relative', boxShadow: plan.popular ? '0 8px 24px rgba(27,79,216,0.15)' : 'none'}}>
                {plan.popular && (
                  <div style={{position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#1B4FD8', color: 'white', padding: '4px 16px', borderRadius: 999, fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap'}}>
                    Le plus populaire
                  </div>
                )}
                <h3 style={{fontSize: 20, fontWeight: 700, color: '#1E293B', marginBottom: 8}}>{plan.nom}</h3>
                <div style={{fontSize: 32, fontWeight: 700, color: '#1B4FD8', marginBottom: 4}}>{plan.prix} <span style={{fontSize: 14, color: '#64748B'}}>XAF</span></div>
                <div style={{color: '#94A3B8', fontSize: 14, marginBottom: 24}}>Acces {plan.duree}</div>
                <ul style={{listStyle: 'none', padding: 0, marginBottom: 28}}>
                  {plan.items.map(function(item, j) {
                    return <li key={j} style={{padding: '6px 0', color: '#475569', display: 'flex', alignItems: 'center', gap: 8}}><span style={{color: '#2DC653', fontWeight: 700}}>✓</span> {item}</li>
                  })}
                </ul>
                <button style={{width: '100%', padding: '14px 0', borderRadius: 10, fontWeight: 600, fontSize: 15, cursor: 'pointer', background: plan.popular ? '#1B4FD8' : 'white', color: plan.popular ? 'white' : '#1B4FD8', border: plan.popular ? 'none' : '2px solid #1B4FD8'}}>
                  {plan.popular ? 'Choisir Premium' : plan.nom === 'Starter' ? 'Commencer' : 'Choisir Prestige'}
                </button>
              </div>
            )
          })}
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section style={{padding: '80px 40px', background: '#F8FAFF'}}>
        <h2 style={{textAlign: 'center', fontSize: 32, fontWeight: 700, color: '#1E293B', marginBottom: 48}}>Ils ont reussi avec RefCanada</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, maxWidth: 1000, margin: '0 auto'}}>
          {[
            {nom: 'Aminata D.', pays: 'Senegal', score: 'NCLC 9', texte: 'Grace a la correction IA, j ai compris exactement mes erreurs. J ai eu mon score en une seule tentative !'},
            {nom: 'Jean-Paul M.', pays: 'Cameroun', score: 'NCLC 10', texte: 'Le parcours adaptatif m a vraiment aide. La plateforme savait exactement sur quoi me faire travailler.'},
            {nom: 'Fatima Z.', pays: 'Maroc', score: 'NCLC 8', texte: 'J ai utilise 3 autres plateformes avant RefCanada. Aucune ne donnait un feedback aussi precis.'},
          ].map(function(t, i) {
            return (
              <div key={i} style={{background: 'white', padding: 28, borderRadius: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.08)'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16}}>
                  <div style={{width: 48, height: 48, background: '#EEF2FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1B4FD8', fontWeight: 700, fontSize: 18}}>
                    {t.nom[0]}
                  </div>
                  <div>
                    <div style={{fontWeight: 700, color: '#1E293B'}}>{t.nom}</div>
                    <div style={{fontSize: 13, color: '#64748B'}}>{t.pays}</div>
                  </div>
                  <div style={{marginLeft: 'auto', background: '#DCFCE7', color: '#166534', padding: '4px 12px', borderRadius: 999, fontSize: 13, fontWeight: 600}}>
                    {t.score}
                  </div>
                </div>
                <p style={{color: '#475569', lineHeight: 1.6}}>"{t.texte}"</p>
                <div style={{color: '#FBBF24', marginTop: 12}}>★★★★★</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{padding: '80px 40px', background: '#1B4FD8', textAlign: 'center'}}>
        <h2 style={{fontSize: 32, fontWeight: 700, color: 'white', marginBottom: 16}}>Pret a obtenir votre score NCLC ?</h2>
        <p style={{color: 'rgba(255,255,255,0.8)', marginBottom: 32, fontSize: 18}}>Rejoignez 5 000 candidats qui ont reussi avec RefCanada</p>
        <button style={{padding: '16px 40px', background: '#FBBF24', color: '#1e3a8a', border: 'none', borderRadius: 12, fontSize: 18, fontWeight: 700, cursor: 'pointer'}}>
          Commencer gratuitement
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{background: '#0F172A', color: '#94A3B8', padding: '48px 40px 24px'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32, marginBottom: 40}}>
          <div>
            <div style={{fontSize: 22, fontWeight: 700, marginBottom: 12}}>
              <span style={{color: '#1B4FD8'}}>Ref</span><span style={{color: '#E63946'}}>Canada</span>
            </div>
            <p style={{fontSize: 14, lineHeight: 1.6, maxWidth: 220}}>Votre passeport linguistique vers le Canada.</p>
          </div>
          <div>
            <h4 style={{color: 'white', fontWeight: 600, marginBottom: 16}}>Examens</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14}}>
              <a href="#" style={{color: '#94A3B8', textDecoration: 'none'}}>TCF Canada</a>
              <a href="#" style={{color: '#94A3B8', textDecoration: 'none'}}>TEF Canada</a>
              <a href="#" style={{color: '#94A3B8', textDecoration: 'none'}}>Niveaux NCLC</a>
            </div>
          </div>
          <div>
            <h4 style={{color: 'white', fontWeight: 600, marginBottom: 16}}>Contact</h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14}}>
              <span>contact@refcanada.com</span>
              <span>WhatsApp disponible</span>
              <span>Lun-Ven 8h-18h</span>
            </div>
          </div>
        </div>
        <div style={{borderTop: '1px solid #1E293B', paddingTop: 24, textAlign: 'center', fontSize: 13}}>
          2026 RefCanada. Tous droits reserves.
        </div>
      </footer>

    </div>
  )
}

export default Landing
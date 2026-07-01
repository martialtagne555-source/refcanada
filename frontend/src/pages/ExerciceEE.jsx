import { useState } from 'react'

const sujets = [
  {
    id: 1,
    tache: "Tache 1",
    consigne: "Vous avez recu un email de votre proprietaire qui vous demande de quitter votre appartement dans 30 jours. Ecrivez-lui une reponse pour negocier un delai supplementaire. (60 a 80 mots)",
    mots_min: 60,
    mots_max: 80
  },
  {
    id: 2,
    tache: "Tache 2",
    consigne: "Decrivez votre experience la plus marquante depuis votre arrivee au Canada. Parlez des difficultes rencontrees et de ce que vous avez appris. (120 a 150 mots)",
    mots_min: 120,
    mots_max: 150
  },
  {
    id: 3,
    tache: "Tache 3",
    consigne: "Pensez-vous que la maitrise du francais soit suffisante pour reussir son integration au Canada ? Donnez votre opinion et justifiez-la avec des arguments precis. (250 mots minimum)",
    mots_min: 250,
    mots_max: 400
  }
]

function ExerciceEE() {
  var [sujetIndex, setSujetIndex] = useState(0)
  var [texte, setTexte] = useState('')
  var [loading, setLoading] = useState(false)
  var [feedback, setFeedback] = useState(null)
  var [erreur, setErreur] = useState('')

  var sujet = sujets[sujetIndex]
  var mots = texte.trim() === '' ? 0 : texte.trim().split(/\s+/).length

  async function corrigerAvecIA() {
    if (mots < sujet.mots_min) {
      setErreur('Votre texte est trop court. Minimum ' + sujet.mots_min + ' mots requis.')
      return
    }
    setErreur('')
    setLoading(true)
    setFeedback(null)

    try {
      var response = await fetch('/api/corriger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ texte: texte, sujet: sujet.consigne })
      })
      var result = await response.json()
      setFeedback(result)
    } catch (err) {
      setErreur('Erreur lors de la correction. Veuillez reessayer.')
    }
    setLoading(false)
  }

  function nouveau() {
    setTexte('')
    setFeedback(null)
    setErreur('')
  }

  var scoreTotal = feedback ? Math.round((feedback.adequation.score + feedback.coherence.score + feedback.lexique.score + feedback.grammaire.score) / 4) : 0

  return (
    <div style={{minHeight: '100vh', background: '#F8FAFF'}}>

      <nav style={{background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{fontSize: 22, fontWeight: 700}}>
          <span style={{color: '#1B4FD8'}}>Ref</span><span style={{color: '#E63946'}}>Canada</span>
          <span style={{fontSize: 14, color: '#64748B', fontWeight: 400, marginLeft: 12}}>Expression Ecrite</span>
        </div>
        <button onClick={function() { window.location.href = '/dashboard' }}
          style={{padding: '8px 16px', background: '#F1F5F9', color: '#64748B', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 14}}>
          Retour au tableau de bord
        </button>
      </nav>

      <div style={{maxWidth: 800, margin: '0 auto', padding: '32px 24px'}}>

        <div style={{display: 'flex', gap: 10, marginBottom: 24}}>
          {sujets.map(function(s, i) {
            return (
              <button key={i} onClick={function() { setSujetIndex(i); setTexte(''); setFeedback(null); setErreur('') }}
                style={{padding: '10px 20px', border: '2px solid ' + (sujetIndex === i ? '#1B4FD8' : '#E2E8F0'), borderRadius: 10, background: sujetIndex === i ? '#EEF2FF' : 'white', color: sujetIndex === i ? '#1B4FD8' : '#64748B', fontWeight: sujetIndex === i ? 700 : 400, cursor: 'pointer', fontSize: 14}}>
                {s.tache}
              </button>
            )
          })}
        </div>

        <div style={{background: '#EEF2FF', borderRadius: 12, padding: 24, marginBottom: 24, borderLeft: '4px solid #1B4FD8'}}>
          <div style={{fontSize: 12, color: '#1B4FD8', fontWeight: 600, marginBottom: 8}}>SUJET</div>
          <p style={{color: '#1E293B', lineHeight: 1.8, fontSize: 15}}>{sujet.consigne}</p>
        </div>

        {!feedback && (
          <div style={{background: 'white', borderRadius: 12, padding: 28, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', marginBottom: 16}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 12}}>
              <label style={{fontSize: 14, fontWeight: 600, color: '#374151'}}>Votre production</label>
              <span style={{fontSize: 13, color: mots >= sujet.mots_min ? '#2DC653' : '#64748B', fontWeight: 600}}>
                {mots} mots {mots >= sujet.mots_min ? '✓' : '(min ' + sujet.mots_min + ')'}
              </span>
            </div>
            <textarea
              value={texte}
              onChange={function(e) { setTexte(e.target.value) }}
              placeholder="Ecrivez votre reponse ici..."
              style={{width: '100%', minHeight: 200, padding: 16, border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, lineHeight: 1.7, resize: 'vertical', boxSizing: 'border-box', fontFamily: 'Inter, sans-serif', outline: 'none'}}
            />

            {erreur && (
              <div style={{background: '#FEE2E2', color: '#991B1B', padding: 12, borderRadius: 8, fontSize: 14, marginTop: 12}}>
                {erreur}
              </div>
            )}

            <button onClick={corrigerAvecIA} disabled={loading || mots < 10}
              style={{width: '100%', marginTop: 16, padding: '14px 0', background: loading ? '#94A3B8' : '#1B4FD8', color: 'white', border: 'none', borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: loading ? 'default' : 'pointer'}}>
              {loading ? 'Correction en cours par IA...' : 'Corriger avec l IA'}
            </button>
          </div>
        )}

        {feedback && (
          <div>
            <div style={{background: 'linear-gradient(135deg, #1B4FD8, #0f2d8a)', borderRadius: 16, padding: 28, color: 'white', marginBottom: 24, textAlign: 'center'}}>
              <div style={{fontSize: 14, color: 'rgba(255,255,255,0.8)', marginBottom: 8}}>Score global</div>
              <div style={{fontSize: 64, fontWeight: 700, marginBottom: 8}}>{scoreTotal}/20</div>
              <div style={{display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '4px 16px', borderRadius: 999, fontSize: 14}}>
                Niveau estime : {feedback.niveau}
              </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24}}>
              {[
                {label: 'Adequation au sujet', data: feedback.adequation, color: '#3B82F6'},
                {label: 'Coherence et cohesion', data: feedback.coherence, color: '#8B5CF6'},
                {label: 'Etendue lexicale', data: feedback.lexique, color: '#10B981'},
                {label: 'Correction grammaticale', data: feedback.grammaire, color: '#F59E0B'},
              ].map(function(critere, i) {
                return (
                  <div key={i} style={{background: 'white', borderRadius: 12, padding: 20, boxShadow: '0 1px 4px rgba(0,0,0,0.06)'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
                      <span style={{fontSize: 13, fontWeight: 600, color: '#374151'}}>{critere.label}</span>
                      <span style={{fontSize: 18, fontWeight: 700, color: critere.color}}>{critere.data.score}/20</span>
                    </div>
                    <div style={{height: 4, background: '#F1F5F9', borderRadius: 999, marginBottom: 10}}>
                      <div style={{height: 4, background: critere.color, borderRadius: 999, width: (critere.data.score / 20 * 100) + '%'}}></div>
                    </div>
                    <p style={{fontSize: 13, color: '#64748B', lineHeight: 1.5}}>{critere.data.commentaire}</p>
                  </div>
                )
              })}
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24}}>
              <div style={{background: '#DCFCE7', borderRadius: 12, padding: 20}}>
                <h3 style={{fontSize: 15, fontWeight: 700, color: '#166534', marginBottom: 12}}>Points forts</h3>
                {feedback.points_forts && feedback.points_forts.map(function(p, i) {
                  return <div key={i} style={{fontSize: 13, color: '#166534', marginBottom: 6}}>✓ {p}</div>
                })}
              </div>
              <div style={{background: '#FEF3C7', borderRadius: 12, padding: 20}}>
                <h3 style={{fontSize: 15, fontWeight: 700, color: '#92400E', marginBottom: 12}}>A ameliorer</h3>
                {feedback.points_ameliorer && feedback.points_ameliorer.map(function(p, i) {
                  return <div key={i} style={{fontSize: 13, color: '#92400E', marginBottom: 6}}>→ {p}</div>
                })}
              </div>
            </div>

            <div style={{display: 'flex', gap: 12}}>
              <button onClick={nouveau}
                style={{flex: 1, padding: '14px 0', background: '#1B4FD8', color: 'white', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: 'pointer'}}>
                Nouvel exercice
              </button>
              <button onClick={function() { window.location.href = '/dashboard' }}
                style={{flex: 1, padding: '14px 0', background: 'white', color: '#1B4FD8', border: '2px solid #1B4FD8', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: 'pointer'}}>
                Tableau de bord
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExerciceEE
import { useState, useRef } from 'react'

const exercices = [
  {
    id: 1,
    titre: "Dialogue au bureau d immigration",
    transcription: "Bonjour, je voudrais des informations sur le programme Entree express. Bien sur, ce programme est destine aux travailleurs qualifies qui souhaitent immigrer au Canada de facon permanente. Vous devez d abord creer un profil en ligne et obtenir un score suffisant. Le score minimum requis varie selon les periodes. En ce moment, il faut obtenir au moins 470 points pour recevoir une invitation.",
    question: "Quel est le score minimum requis en ce moment pour recevoir une invitation ?",
    options: ["450 points", "460 points", "470 points", "480 points"],
    reponse: 2,
    explication: "L agent dit clairement qu il faut obtenir au moins 470 points pour recevoir une invitation."
  },
  {
    id: 2,
    titre: "Annonce a l aeroport de Montreal",
    transcription: "Mesdames et messieurs, nous vous informons que le vol Air Canada 302 a destination de Toronto accusera un retard de 45 minutes en raison de conditions meteorologiques defavorables. Les passagers sont pries de rester dans la salle d attente. Des bons de consommation seront distribues au comptoir principal. Nous nous excusons pour ce desagrement.",
    question: "Pourquoi le vol est-il retarde ?",
    options: ["Probleme technique", "Conditions meteorologiques", "Greve du personnel", "Surreservation"],
    reponse: 1,
    explication: "L annonce dit que le retard est du a des conditions meteorologiques defavorables."
  },
  {
    id: 3,
    titre: "Conversation entre amis",
    transcription: "Tu sais, depuis que j ai obtenu mon niveau NCLC 9 au TCF Canada, j ai enfin pu deposer ma demande de residence permanente. Ca fait tellement longtemps que j attendais ce moment. Le plus difficile c etait l expression orale, mais avec beaucoup d entrainement j ai reussi a obtenir un bon score. Je te conseille de commencer ta preparation au moins 3 mois avant ton examen.",
    question: "Combien de temps avant l examen faut-il commencer la preparation selon cette personne ?",
    options: ["1 mois", "2 mois", "3 mois", "6 mois"],
    reponse: 2,
    explication: "La personne dit de commencer la preparation au moins 3 mois avant l examen."
  },
  {
    id: 4,
    titre: "Emission de radio quebecoise",
    transcription: "Bonjour a tous, vous ecoutez Radio-Canada. Aujourd hui nous allons parler de l immigration francophone au Quebec. Selon les dernieres statistiques, plus de 60 000 immigrants francophones ont choisi de s etablir au Quebec l annee derniere. La majorite provient de l Afrique subsaharienne, notamment du Cameroun, du Senegal et de la Cote d Ivoire. Le gouvernement provincial a annonce vouloir augmenter ce nombre de 20 pour cent dans les prochaines annees.",
    question: "De quelle region provient la majorite des immigrants francophones au Quebec ?",
    options: ["Du Maghreb", "De l Europe", "De l Afrique subsaharienne", "Des Caraibes"],
    reponse: 2,
    explication: "L animateur precise que la majorite provient de l Afrique subsaharienne."
  },
  {
    id: 5,
    titre: "Message vocal d un employeur",
    transcription: "Bonjour Monsieur Mbarga, je vous appelle de la part de la societe TechMontreal. Suite a votre candidature, nous souhaitons vous inviter a un entretien d embauche le mardi 15 mars a 14 heures dans nos bureaux situes au 350 rue Sherbrooke Ouest. Merci de confirmer votre presence avant vendredi. Si vous avez des questions, n hesitez pas a me rappeler au 514-555-0123.",
    question: "A quelle heure est prevu l entretien ?",
    options: ["10 heures", "12 heures", "14 heures", "16 heures"],
    reponse: 2,
    explication: "L employeur precise que l entretien est a 14 heures le mardi 15 mars."
  }
]

function ExerciceCO() {
  var [current, setCurrent] = useState(0)
  var [selected, setSelected] = useState(null)
  var [showResult, setShowResult] = useState(false)
  var [score, setScore] = useState(0)
  var [finished, setFinished] = useState(false)
  var [showTranscription, setShowTranscription] = useState(false)
  var [audioPlayed, setAudioPlayed] = useState(false)

  var ex = exercices[current]

  function jouerAudio() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      var utterance = new SpeechSynthesisUtterance(ex.transcription)
      utterance.lang = 'fr-FR'
      utterance.rate = 0.9
      utterance.onend = function() { setAudioPlayed(true) }
      window.speechSynthesis.speak(utterance)
      setAudioPlayed(true)
    }
  }

  function choisir(index) {
    if (showResult) return
    setSelected(index)
  }

  function valider() {
    if (selected === null) return
    if (selected === ex.reponse) setScore(score + 1)
    setShowResult(true)
  }

  function suivant() {
    if (current + 1 >= exercices.length) {
      setFinished(true)
    } else {
      setCurrent(current + 1)
      setSelected(null)
      setShowResult(false)
      setShowTranscription(false)
      setAudioPlayed(false)
      window.speechSynthesis.cancel()
    }
  }

  function recommencer() {
    setCurrent(0)
    setSelected(null)
    setShowResult(false)
    setScore(0)
    setFinished(false)
    setShowTranscription(false)
    setAudioPlayed(false)
  }

  if (finished) {
    var pct = Math.round((score / exercices.length) * 100)
    return (
      <div style={{minHeight: '100vh', background: '#F8FAFF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24}}>
        <div style={{background: 'white', borderRadius: 16, padding: 40, maxWidth: 500, width: '100%', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)'}}>
          <div style={{fontSize: 60, marginBottom: 16}}>{pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚'}</div>
          <h2 style={{fontSize: 24, fontWeight: 700, color: '#1E293B', marginBottom: 8}}>Exercice termine !</h2>
          <div style={{fontSize: 48, fontWeight: 700, color: pct >= 80 ? '#2DC653' : pct >= 60 ? '#F59E0B' : '#E63946', marginBottom: 8}}>
            {score}/{exercices.length}
          </div>
          <div style={{fontSize: 18, color: '#64748B', marginBottom: 24}}>{pct}% de bonnes reponses</div>
          <div style={{display: 'flex', gap: 12, justifyContent: 'center'}}>
            <button onClick={recommencer}
              style={{padding: '12px 24px', background: '#1B4FD8', color: 'white', border: 'none', borderRadius: 10, fontWeight: 700, cursor: 'pointer'}}>
              Recommencer
            </button>
            <button onClick={function() { window.location.href = '/dashboard' }}
              style={{padding: '12px 24px', background: 'white', color: '#1B4FD8', border: '2px solid #1B4FD8', borderRadius: 10, fontWeight: 700, cursor: 'pointer'}}>
              Tableau de bord
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{minHeight: '100vh', background: '#F8FAFF'}}>

      <nav style={{background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{fontSize: 22, fontWeight: 700}}>
          <span style={{color: '#1B4FD8'}}>Ref</span><span style={{color: '#E63946'}}>Canada</span>
          <span style={{fontSize: 14, color: '#64748B', fontWeight: 400, marginLeft: 12}}>Comprehension Orale</span>
        </div>
        <div style={{fontSize: 14, color: '#64748B'}}>Question {current + 1} / {exercices.length}</div>
      </nav>

      <div style={{maxWidth: 800, margin: '0 auto', padding: '32px 24px'}}>

        <div style={{height: 6, background: '#E2E8F0', borderRadius: 999, marginBottom: 32}}>
          <div style={{height: 6, background: '#1B4FD8', borderRadius: 999, width: ((current + 1) / exercices.length * 100) + '%'}}></div>
        </div>

        {/* LECTEUR AUDIO */}
        <div style={{background: 'linear-gradient(135deg, #1B4FD8, #0f2d8a)', borderRadius: 16, padding: 28, marginBottom: 24, color: 'white', textAlign: 'center'}}>
          <div style={{fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 8}}>Document audio</div>
          <h3 style={{fontSize: 18, fontWeight: 700, marginBottom: 20}}>{ex.titre}</h3>

          <button onClick={jouerAudio}
            style={{padding: '14px 32px', background: 'white', color: '#1B4FD8', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8}}>
            ▶ Ecouter le document
          </button>

          {audioPlayed && !showResult && (
            <div style={{marginTop: 12, fontSize: 13, color: 'rgba(255,255,255,0.7)'}}>
              Document ecoute — vous pouvez repondre
            </div>
          )}

          {showResult && (
            <button onClick={function() { setShowTranscription(!showTranscription) }}
              style={{marginTop: 12, padding: '8px 16px', background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid rgba(255,255,255,0.4)', borderRadius: 8, cursor: 'pointer', fontSize: 13}}>
              {showTranscription ? 'Masquer' : 'Voir'} la transcription
            </button>
          )}
        </div>

        {showTranscription && (
          <div style={{background: '#EEF2FF', borderRadius: 12, padding: 20, marginBottom: 20, borderLeft: '4px solid #1B4FD8'}}>
            <div style={{fontSize: 12, color: '#1B4FD8', fontWeight: 600, marginBottom: 8}}>TRANSCRIPTION</div>
            <p style={{color: '#1E293B', lineHeight: 1.8, fontSize: 14}}>{ex.transcription}</p>
          </div>
        )}

        {/* QUESTION */}
        <div style={{background: 'white', borderRadius: 12, padding: 28, boxShadow: '0 1px 4px rgba(0,0,0,0.06)'}}>
          <h3 style={{fontSize: 17, fontWeight: 700, color: '#1E293B', marginBottom: 20}}>{ex.question}</h3>

          <div style={{display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24}}>
            {ex.options.map(function(opt, i) {
              var bg = 'white'
              var borderColor = '#E2E8F0'
              var textColor = '#374151'
              if (selected === i && !showResult) { bg = '#EEF2FF'; borderColor = '#1B4FD8'; textColor = '#1B4FD8' }
              if (showResult && i === ex.reponse) { bg = '#DCFCE7'; borderColor = '#2DC653'; textColor = '#166534' }
              if (showResult && selected === i && i !== ex.reponse) { bg = '#FEE2E2'; borderColor = '#E63946'; textColor = '#991B1B' }
              return (
                <div key={i} onClick={function() { choisir(i) }}
                  style={{padding: '14px 18px', border: '2px solid ' + borderColor, borderRadius: 10, cursor: 'pointer', background: bg, color: textColor, display: 'flex', alignItems: 'center', gap: 12}}>
                  <span style={{width: 28, height: 28, borderRadius: '50%', border: '2px solid ' + borderColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0, background: 'white', color: textColor}}>
                    {showResult && i === ex.reponse ? '✓' : showResult && selected === i ? '✗' : String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </div>
              )
            })}
          </div>

          {showResult && (
            <div style={{background: '#F0F9FF', borderRadius: 10, padding: 16, marginBottom: 20, borderLeft: '3px solid #1B4FD8'}}>
              <div style={{fontSize: 13, fontWeight: 600, color: '#1B4FD8', marginBottom: 4}}>Explication</div>
              <p style={{fontSize: 14, color: '#475569'}}>{ex.explication}</p>
            </div>
          )}

          {!showResult ? (
            <button onClick={valider}
              style={{width: '100%', padding: '14px 0', background: selected === null ? '#E2E8F0' : '#1B4FD8', color: selected === null ? '#94A3B8' : 'white', border: 'none', borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: 'pointer'}}>
              Valider ma reponse
            </button>
          ) : (
            <button onClick={suivant}
              style={{width: '100%', padding: '14px 0', background: '#1B4FD8', color: 'white', border: 'none', borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: 'pointer'}}>
              {current + 1 >= exercices.length ? 'Voir mes resultats' : 'Question suivante'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExerciceCO
import { useState } from 'react'

const exercices = [
  {
    id: 1,
    texte: "Le Canada est un pays d immigration par excellence. Chaque annee, des centaines de milliers de personnes viennent s y installer en quete d une meilleure qualite de vie. Le gouvernement canadien a mis en place plusieurs programmes d immigration, notamment le systeme Entree express, qui evalue les candidats selon leurs competences linguistiques, leur experience professionnelle et leur niveau d etudes. La maitrise du francais ou de l anglais est un critere essentiel pour obtenir la residence permanente.",
    question: "Selon ce texte, quel est le critere principal pour obtenir la residence permanente au Canada ?",
    options: ["Avoir de l experience professionnelle", "Maitriser le francais ou l anglais", "Avoir un niveau d etudes eleve", "Posseder beaucoup d argent"],
    reponse: 1,
    explication: "Le texte dit que La maitrise du francais ou de l anglais est un critere essentiel pour obtenir la residence permanente."
  },
  {
    id: 2,
    texte: "Le Quebec est la seule province canadienne ou le francais est la langue officielle. Cette province accueille chaque annee de nombreux immigrants francophones, notamment en provenance d Afrique subsaharienne et du Maghreb. Pour immigrer au Quebec, les candidats doivent souvent passer le Test d evaluation du francais (TEF) ou le Test de connaissance du francais (TCF). Un bon score a ces tests augmente considerablement les chances d obtenir un certificat de selection du Quebec (CSQ).",
    question: "Quel est le statut du francais au Quebec ?",
    options: ["C est une langue secondaire", "C est la langue officielle", "C est une langue optionnelle", "C est une langue etrangere"],
    reponse: 1,
    explication: "Le texte precise que Le Quebec est la seule province canadienne ou le francais est la langue officielle."
  },
  {
    id: 3,
    texte: "L expression orale est souvent consideree comme la competence la plus difficile a maitriser dans une langue etrangere. Elle requiert non seulement une bonne connaissance du vocabulaire et de la grammaire, mais aussi une capacite a s exprimer de maniere fluide et naturelle. Pour ameliorer son expression orale, les experts recommandent de pratiquer quotidiennement, d ecouter des emissions en francais et de ne pas avoir peur de faire des erreurs.",
    question: "Que recommandent les experts pour ameliorer l expression orale ?",
    options: ["Apprendre beaucoup de vocabulaire", "Lire des livres en francais", "Pratiquer quotidiennement et ecouter des emissions", "Faire des exercices de grammaire"],
    reponse: 2,
    explication: "Le texte dit les experts recommandent de pratiquer quotidiennement et d ecouter des emissions en francais."
  },
  {
    id: 4,
    texte: "Le systeme de points du Canada, appele Entree express, attribue des points aux candidats selon plusieurs criteres. L age joue un role important : les candidats entre 20 et 29 ans recoivent le maximum de points. Les diplomes universitaires sont egalement valorises, tout comme les offres d emploi d employeurs canadiens. Les candidats ayant de la famille au Canada peuvent aussi obtenir des points supplementaires.",
    question: "Quelle tranche d age recoit le maximum de points dans le systeme Entree express ?",
    options: ["15 a 19 ans", "20 a 29 ans", "30 a 39 ans", "40 a 49 ans"],
    reponse: 1,
    explication: "Le texte precise que les candidats entre 20 et 29 ans recoivent le maximum de points."
  },
  {
    id: 5,
    texte: "La ville de Montreal est souvent designee comme la metropole francophone des Ameriques. Avec plus de 2 millions d habitants, elle est la deuxieme plus grande ville du Canada. Montreal est reputee pour sa diversite culturelle, son dynamisme economique et sa scene artistique. De nombreux immigrants choisissent de s y installer car elle offre de nombreuses opportunites d emploi tout en permettant de vivre en francais.",
    question: "Pourquoi de nombreux immigrants choisissent-ils Montreal ?",
    options: ["Parce que c est la capitale du Canada", "Parce qu elle est la plus grande ville du Canada", "Pour les opportunites d emploi et la vie en francais", "Parce qu il y fait toujours beau"],
    reponse: 2,
    explication: "Le texte dit qu elle offre de nombreuses opportunites d emploi tout en permettant de vivre en francais."
  }
]

function ExerciceCE() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  var ex = exercices[current]

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
    }
  }

  function recommencer() {
    setCurrent(0)
    setSelected(null)
    setShowResult(false)
    setScore(0)
    setFinished(false)
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
          <span style={{fontSize: 14, color: '#64748B', fontWeight: 400, marginLeft: 12}}>Comprehension Ecrite</span>
        </div>
        <div style={{fontSize: 14, color: '#64748B'}}>Question {current + 1} / {exercices.length}</div>
      </nav>

      <div style={{maxWidth: 800, margin: '0 auto', padding: '32px 24px'}}>

        <div style={{height: 6, background: '#E2E8F0', borderRadius: 999, marginBottom: 32}}>
          <div style={{height: 6, background: '#1B4FD8', borderRadius: 999, width: ((current + 1) / exercices.length * 100) + '%'}}></div>
        </div>

        <div style={{background: '#EEF2FF', borderRadius: 12, padding: 24, marginBottom: 24, borderLeft: '4px solid #1B4FD8'}}>
          <div style={{fontSize: 12, color: '#1B4FD8', fontWeight: 600, marginBottom: 8}}>LISEZ CE TEXTE</div>
          <p style={{color: '#1E293B', lineHeight: 1.8, fontSize: 15}}>{ex.texte}</p>
        </div>

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

export default ExerciceCE

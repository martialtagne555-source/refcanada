import { useState } from 'react'
import { supabase } from '../supabase'

function Register() {
  const [form, setForm] = useState({nom: '', email: '', motdepasse: '', pays: '', examen: ''})
  const [etape, setEtape] = useState(1)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function creerCompte() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.motdepasse,
      options: {
        data: {
          full_name: form.nom,
          country: form.pays,
          target_exam: form.examen
        }
      }
    })
    setLoading(false)
    if (error) {
      alert('Erreur: ' + error.message)
    } else {
      alert('Compte cree avec succes ! Verifiez votre email pour confirmer.')
    }
  }

  return (
    <div style={{minHeight: '100vh', background: '#F8FAFF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24}}>
      <div style={{width: '100%', maxWidth: 480}}>

        <div style={{textAlign: 'center', marginBottom: 32}}>
          <a href="/" style={{textDecoration: 'none', fontSize: 28, fontWeight: 700}}>
            <span style={{color: '#1B4FD8'}}>Ref</span><span style={{color: '#E63946'}}>Canada</span>
          </a>
          <p style={{color: '#64748B', marginTop: 8}}>Creez votre compte gratuitement</p>
        </div>

        <div style={{background: 'white', borderRadius: 16, padding: 36, boxShadow: '0 4px 20px rgba(0,0,0,0.08)'}}>

          <div style={{marginBottom: 28}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
              <span style={{fontSize: 13, color: etape >= 1 ? '#1B4FD8' : '#94A3B8', fontWeight: 600}}>Etape 1</span>
              <span style={{fontSize: 13, color: etape >= 2 ? '#1B4FD8' : '#94A3B8', fontWeight: 600}}>Etape 2</span>
            </div>
            <div style={{height: 4, background: '#E2E8F0', borderRadius: 999}}>
              <div style={{height: 4, background: '#1B4FD8', borderRadius: 999, width: etape === 1 ? '50%' : '100%'}}></div>
            </div>
          </div>

          {etape === 1 && (
            <div>
              <h2 style={{fontSize: 22, fontWeight: 700, color: '#1E293B', marginBottom: 24}}>Vos informations</h2>

              <div style={{marginBottom: 16}}>
                <label style={{display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 6}}>Nom complet</label>
                <input name="nom" value={form.nom} onChange={handleChange} placeholder="Ex: Jean-Paul Mbarga"
                  style={{width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, boxSizing: 'border-box'}} />
              </div>

              <div style={{marginBottom: 16}}>
                <label style={{display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 6}}>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Ex: jean@gmail.com"
                  style={{width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, boxSizing: 'border-box'}} />
              </div>

              <div style={{marginBottom: 16}}>
                <label style={{display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 6}}>Mot de passe</label>
                <input name="motdepasse" type="password" value={form.motdepasse} onChange={handleChange} placeholder="Minimum 8 caracteres"
                  style={{width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, boxSizing: 'border-box'}} />
              </div>

              <div style={{marginBottom: 28}}>
                <label style={{display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 6}}>Pays</label>
                <select name="pays" value={form.pays} onChange={handleChange}
                  style={{width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, background: 'white', boxSizing: 'border-box'}}>
                  <option value="">Selectionnez votre pays</option>
                  <option value="CM">Cameroun</option>
                  <option value="SN">Senegal</option>
                  <option value="CI">Cote d Ivoire</option>
                  <option value="MA">Maroc</option>
                  <option value="DZ">Algerie</option>
                  <option value="TN">Tunisie</option>
                  <option value="CD">RD Congo</option>
                  <option value="GA">Gabon</option>
                  <option value="autre">Autre pays</option>
                </select>
              </div>

              <button onClick={() => setEtape(2)}
                style={{width: '100%', padding: '14px 0', background: '#1B4FD8', color: 'white', border: 'none', borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: 'pointer'}}>
                Continuer
              </button>
            </div>
          )}

          {etape === 2 && (
            <div>
              <h2 style={{fontSize: 22, fontWeight: 700, color: '#1E293B', marginBottom: 8}}>Votre objectif</h2>
              <p style={{color: '#64748B', marginBottom: 24, fontSize: 14}}>Pour creer votre parcours personnalise</p>

              <div style={{marginBottom: 20}}>
                <label style={{display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 10}}>Quel examen preparez-vous ?</label>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10}}>
                  {['TCF Canada', 'TEF Canada', 'Les deux'].map(function(ex) {
                    return (
                      <div key={ex} onClick={() => setForm({...form, examen: ex})}
                        style={{padding: '14px 8px', border: form.examen === ex ? '2px solid #1B4FD8' : '1.5px solid #E2E8F0',
                          borderRadius: 10, textAlign: 'center', cursor: 'pointer',
                          background: form.examen === ex ? '#EEF2FF' : 'white',
                          color: form.examen === ex ? '#1B4FD8' : '#374151',
                          fontWeight: form.examen === ex ? 700 : 400, fontSize: 13}}>
                        {ex}
                      </div>
                    )
                  })}
                </div>
              </div>

              <div style={{marginBottom: 20}}>
                <label style={{display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 10}}>Niveau NCLC vise</label>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8}}>
                  {['NCLC 7', 'NCLC 8', 'NCLC 9', 'NCLC 10'].map(function(nclc) {
                    return (
                      <div key={nclc}
                        style={{padding: '12px 0', border: '1.5px solid #E2E8F0', borderRadius: 8, textAlign: 'center', cursor: 'pointer', fontSize: 13, color: '#374151'}}>
                        {nclc}
                      </div>
                    )
                  })}
                </div>
              </div>

              <div style={{marginBottom: 28}}>
                <label style={{display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 6}}>Date d examen prevue (optionnel)</label>
                <input type="date"
                  style={{width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, boxSizing: 'border-box'}} />
              </div>

              <button onClick={creerCompte}
                style={{width: '100%', padding: '14px 0', background: loading ? '#94A3B8' : '#1B4FD8', color: 'white', border: 'none', borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: 'pointer', marginBottom: 12}}>
                {loading ? 'Creation en cours...' : 'Creer mon compte gratuitement'}
              </button>

              <button onClick={() => setEtape(1)}
                style={{width: '100%', padding: '12px 0', background: 'white', color: '#64748B', border: '1px solid #E2E8F0', borderRadius: 10, fontSize: 15, cursor: 'pointer'}}>
                Retour
              </button>
            </div>
          )}

        </div>

        <p style={{textAlign: 'center', marginTop: 20, color: '#64748B', fontSize: 14}}>
          Deja un compte ? <a href="/connexion" style={{color: '#1B4FD8', fontWeight: 600, textDecoration: 'none'}}>Se connecter</a>
        </p>

      </div>
    </div>
  )
}

export default Register
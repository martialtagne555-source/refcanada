import { useState } from 'react'
import { supabase } from '../supabase'

function Login() {
  const [form, setForm] = useState({email: '', motdepasse: ''})
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function seConnecter() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.motdepasse
    })
    setLoading(false)
    if (error) {
      alert('Erreur: ' + error.message)
    } else {
      window.location.href = '/dashboard'
    }
  }

  return (
    <div style={{minHeight: '100vh', background: '#F8FAFF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24}}>
      <div style={{width: '100%', maxWidth: 440}}>

        <div style={{textAlign: 'center', marginBottom: 32}}>
          <a href="/" style={{textDecoration: 'none', fontSize: 28, fontWeight: 700}}>
            <span style={{color: '#1B4FD8'}}>Ref</span><span style={{color: '#E63946'}}>Canada</span>
          </a>
          <p style={{color: '#64748B', marginTop: 8}}>Connectez-vous a votre compte</p>
        </div>

        <div style={{background: 'white', borderRadius: 16, padding: 36, boxShadow: '0 4px 20px rgba(0,0,0,0.08)'}}>

          <h2 style={{fontSize: 22, fontWeight: 700, color: '#1E293B', marginBottom: 24}}>Connexion</h2>

          <div style={{marginBottom: 16}}>
            <label style={{display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 6}}>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Ex: jean@gmail.com"
              style={{width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, boxSizing: 'border-box'}} />
          </div>

          <div style={{marginBottom: 28}}>
            <label style={{display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 6}}>Mot de passe</label>
            <input name="motdepasse" type="password" value={form.motdepasse} onChange={handleChange} placeholder="Votre mot de passe"
              style={{width: '100%', padding: '12px 16px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 15, boxSizing: 'border-box'}} />
          </div>

          <button onClick={seConnecter}
            style={{width: '100%', padding: '14px 0', background: loading ? '#94A3B8' : '#1B4FD8', color: 'white', border: 'none', borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: 'pointer'}}>
            {loading ? 'Connexion en cours...' : 'Se connecter'}
          </button>

          <p style={{textAlign: 'center', marginTop: 16, color: '#64748B', fontSize: 14}}>
            Mot de passe oublie ? <a href="#" style={{color: '#1B4FD8', fontWeight: 600, textDecoration: 'none'}}>Reinitialiser</a>
          </p>

        </div>

        <p style={{textAlign: 'center', marginTop: 20, color: '#64748B', fontSize: 14}}>
          Pas encore de compte ? <a href="/inscription" style={{color: '#1B4FD8', fontWeight: 600, textDecoration: 'none'}}>S inscrire gratuitement</a>
        </p>

      </div>
    </div>
  )
}

export default Login
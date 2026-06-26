import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

function Dashboard() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })
  }, [])

  async function seDeconnecter() {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <div style={{minHeight: '100vh', background: '#F8FAFF'}}>

      {/* HEADER */}
      <nav style={{background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{fontSize: 24, fontWeight: 700}}>
          <span style={{color: '#1B4FD8'}}>Ref</span><span style={{color: '#E63946'}}>Canada</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
          <span style={{color: '#64748B', fontSize: 14}}>
            Bonjour, {user?.user_metadata?.full_name || user?.email}
          </span>
          <button onClick={seDeconnecter}
            style={{padding: '8px 16px', background: '#FEE2E2', color: '#E63946', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: 14}}>
            Se deconnecter
          </button>
        </div>
      </nav>

      {/* CONTENU */}
      <div style={{maxWidth: 1100, margin: '0 auto', padding: '40px 24px'}}>

        {/* BIENVENUE */}
        <div style={{background: 'linear-gradient(135deg, #1B4FD8, #0f2d8a)', borderRadius: 16, padding: '32px 40px', color: 'white', marginBottom: 32}}>
          <h1 style={{fontSize: 26, fontWeight: 700, marginBottom: 8}}>
            Bienvenue sur votre espace de preparation !
          </h1>
          <p style={{color: 'rgba(255,255,255,0.8)', fontSize: 15}}>
            Choisissez une competence pour commencer votre entrainement aujourd hui.
          </p>
        </div>

        {/* PROGRESSION */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32}}>
          {[
            {label: 'Comprehension Orale', short: 'CO', color: '#3B82F6', score: 0},
            {label: 'Comprehension Ecrite', short: 'CE', color: '#8B5CF6', score: 0},
            {label: 'Expression Ecrite', short: 'EE', color: '#10B981', score: 0},
            {label: 'Expression Orale', short: 'EO', color: '#F59E0B', score: 0},
          ].map(function(comp) {
            return (
              <div key={comp.short} style={{background: 'white', borderRadius: 12, padding: 20, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12}}>
                  <span style={{fontSize: 13, color: '#64748B', fontWeight: 500}}>{comp.label}</span>
                  <span style={{background: comp.color, color: 'white', padding: '2px 8px', borderRadius: 999, fontSize: 12, fontWeight: 700}}>{comp.short}</span>
                </div>
                <div style={{fontSize: 28, fontWeight: 700, color: '#1E293B', marginBottom: 8}}>{comp.score}%</div>
                <div style={{height: 6, background: '#F1F5F9', borderRadius: 999}}>
                  <div style={{height: 6, background: comp.color, borderRadius: 999, width: comp.score + '%'}}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* EXERCICES */}
        <h2 style={{fontSize: 20, fontWeight: 700, color: '#1E293B', marginBottom: 16}}>Commencer un exercice</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32}}>
          {[
            {titre: 'Comprehension Orale', desc: 'Ecoutez et repondez aux questions', icon: '🎧', color: '#EFF6FF', border: '#BFDBFE', lien: '/exercice/co'},
            {titre: 'Comprehension Ecrite', desc: 'Lisez et repondez aux questions', icon: '📖', color: '#F5F3FF', border: '#DDD6FE', lien: '/exercice/ce'},
            {titre: 'Expression Ecrite', desc: 'Ecrivez et recevez une correction IA', icon: '✍️', color: '#ECFDF5', border: '#A7F3D0', lien: '/exercice/ee'},
            {titre: 'Expression Orale', desc: 'Parlez et recevez une correction IA', icon: '🎤', color: '#FFFBEB', border: '#FDE68A', lien: '/exercice/eo'},
          ].map(function(ex) {
            return (
              <div key={ex.titre} onClick={function() { window.location.href = ex.lien }}
                style={{background: ex.color, border: '1px solid ' + ex.border, borderRadius: 12, padding: 24, cursor: 'pointer'}}>
                <div style={{fontSize: 36, marginBottom: 12}}>{ex.icon}</div>
                <h3 style={{fontSize: 16, fontWeight: 700, color: '#1E293B', marginBottom: 6}}>{ex.titre}</h3>
                <p style={{fontSize: 13, color: '#64748B'}}>{ex.desc}</p>
              </div>
            )
          })}
        </div>

        {/* TEST BLANC */}
        <div style={{background: 'white', borderRadius: 12, padding: 24, border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
            <h3 style={{fontSize: 18, fontWeight: 700, color: '#1E293B', marginBottom: 4}}>Test blanc complet</h3>
            <p style={{color: '#64748B', fontSize: 14}}>Simulez votre examen en conditions reelles — TCF ou TEF Canada</p>
          </div>
          <button style={{padding: '12px 24px', background: '#1B4FD8', color: 'white', border: 'none', borderRadius: 10, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap'}}>
            Commencer →
          </button>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
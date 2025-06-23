import React from 'react'

const Backimage = () => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: "url('./images/background.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        width: "100%",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.1) 100%)',
        zIndex: 1,
      }} />
      {/* Text and Button */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        color: '#fff',
        padding: '48px 0 0 48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxWidth: '400px',
      }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 700, margin: 0, lineHeight: 1.1 }}>What's New</h1>
        <button style={{
          marginTop: '24px',
          background: '#00bcd4',
          color: '#fff',
          border: 'none',
          borderRadius: '24px',
          padding: '12px 28px',
          fontWeight: 700,
          fontSize: '1.1rem',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
        }}>Explore Now &gt;</button>
      </div>
    </div>
  )
}

export default Backimage

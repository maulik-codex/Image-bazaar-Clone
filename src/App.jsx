import React from 'react'
import Nav from './Components/Nav'
import Backimage from './Components/Backimage'
import PopularCollections from './Components/PopularCollections'
import styles from './App.module.css'

const SearchBar = () => (
  <div style={{
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    background: 'none',
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      border: '1px solid #e0e0e0',
      width: '700px',
      maxWidth: '95vw',
      padding: '0 16px',
      gap: '12px',
    }}>
      <span style={{ fontSize: '1.5rem', color: '#888' }}>🔍</span>
      <input
        type="text"
        placeholder="Search the largest collection of Indian images"
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          fontSize: '1.1rem',
          padding: '16px 8px',
          background: 'transparent',
        }}
      />
      <select style={{
        border: 'none',
        background: 'transparent',
        fontSize: '1.1rem',
        color: '#222',
        fontWeight: 600,
        cursor: 'pointer',
      }}>
        <option>Images</option>
        <option>Videos</option>
      </select>
      <button style={{
        background: 'none',
        border: 'none',
        color: '#222',
        fontWeight: 600,
        fontSize: '1rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
      }}>
        <span style={{ fontSize: '1.2rem' }}>📷</span> Search by Image
      </button>
    </div>
  </div>
)

const App = () => (
  <div style={{ background: "#f6f7fa", minHeight: "100vh" }}>
    <Nav/>
    <SearchBar/>
    <Backimage/>
    <PopularCollections/>
  </div>
)

export default App
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"

const Nav = () => {
  return (
    <nav
      style={{
        width: "100%",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        height: "64px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxSizing: "border-box", 
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "black" }}>
        <GiHamburgerMenu size={24} color="black" />
        <span style={{ color: "black", fontWeight: 500, fontSize: "16px" }}>Browse Categories</span>
      </div>

      <div style={{ color: "black", fontWeight: 700, fontSize: "24px", letterSpacing: "1px" }}>
        imagesbazaar
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button
          style={{
            background: "#222",
            color: "#fff",
            border: "none",
            borderRadius: "20px",
            padding: "8px 20px",
            fontWeight: 600,
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Pricing
        </button>
        <button
          style={{
            background: "#222",
            color: "#fff",
            border: "none",
            borderRadius: "20px",
            padding: "8px 20px",
            fontWeight: 600,
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </div>
    </nav>
  )
}

export default Nav

import React from 'react'

const Images = ({image}) => {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        border: "1px solid #eee",
        padding: "8px",
        marginBottom: "8px"
      }}
    >
      <img
        src={image}
        alt="Gallery"
        style={{
          width: "100%",
          display: "block",
          borderRadius: "8px"
        }}
      />
    </div>
  )
}

export default Images


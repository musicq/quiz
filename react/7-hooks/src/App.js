import React from 'react'

export default function App() {
  return (
    <div class="container">
      <h1 class="header">This is header</h1>

      {/* TODO: font size is 24px and color is green */}
      <p style={style.paragraph}>
        This is a
        {/* TODO: i should have a underline and color is red */}
        <i>paragraph</i>
      </p>
    </div>
  )
}

import { useState, useEffect, useRef } from 'react'
import { parser } from 'mathjs'

function App() {
  const [content, setContent] = useState(() => localStorage.getItem('content') || '')
  const [results, setResults] = useState([])
  const textareaRef = useRef(null)

  // Calculate whenever content changes
  useEffect(() => {
    const calc = parser()
    const splitLines = content.split(/\r?\n/)
    const newResults = splitLines.map(line => {
      try {
        const trimmed = line.trim()
        if (!trimmed) return '\u00A0' // non-breaking space for empty lines
        return calc.evaluate(trimmed)
      } catch (err) {
        return err.message
      }
    })
    setResults(newResults)

    // Save to localStorage
    localStorage.setItem('content', content)

    // Adjust height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }, [content])

  const handleInput = (e) => {
    setContent(e.target.value)
  }

  return (
    <>
      <div className="help">
        <a target="_blank" href="https://mathjs.org/docs/expressions/syntax.html">?</a>
      </div>
      <div className="container">
        <div className="left">
          <form spellCheck="false" onSubmit={(e) => e.preventDefault()}>
            <textarea
              id="input"
              ref={textareaRef}
              rows={1}
              cols={80}
              autoFocus
              value={content}
              onChange={handleInput}
              wrap="off"
              placeholder="Solve for x"
            />
          </form>
        </div>
        <div className="right">
          <div id="response">
            {results.map((result, index) => (
              <p key={index}>{result === undefined || result === null ? '\u00A0' : String(result)}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import React, {useEffect, useState} from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <button aria-label="Toggle theme" className="theme-toggle" onClick={()=> setTheme(t=> t==='light'? 'dark':'light')}>
      {theme === 'light' ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 3v2" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 19v2" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.2 4.2l1.4 1.4" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.4 18.4l1.4 1.4" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="4" stroke="#111" strokeWidth="1.5"/>
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="#fff"/>
        </svg>
      )}
    </button>
  )
}

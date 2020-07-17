import React from 'react'

const themes= {
  light: {
    background: 'bg-gray-200',
    textColor: 'text-gray-500',
    cardBackground: 'bg-white',
    selectedCardBackground: 'text-gray-400'
  }, 
  dark: {
    background: 'bg-gray-400',
    textColor: 'text-gray-800',
    cardBackground: 'bg-gray-400',
    selectedCardBackground: 'text-gray-800'
  },
  green: {
    background: 'bg-green-400',
    textColor: 'text-green-500',
    cardBackground: 'bg-green-100',
    selectedCardBackground: 'text-green-700'
  }
}

const ThemeContext = React.createContext(themes.light)

export {
  ThemeContext,
  themes
}

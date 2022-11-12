import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
    const { t, i18n } = useTranslation()

    const changeLang = (language) => {
        i18n.changeLanguage(language)
    }

    return (
        <div className='App'>
            <h1> {t('hello')} </h1>
            <button
                onClick={() => {
                    changeLang('ru')
                }}>
                ru
            </button>
            <button
                onClick={() => {
                    changeLang('en')
                }}>
                en
            </button>
        </div>
    )
}

export default App

import calculate from "./calculate.js"
import copyClipboard from "./copyClipboard.js"
import { handleCharKey, handleClearKeys, handleKeyDown } from "./keyHandler.js"
import theme from "./theme.js"

const charKeys = document.querySelectorAll('.charKey')
const switchTheme = document.getElementById('themeSwitcher')


charKeys.forEach((charKeyBtn)=>{
    charKeyBtn.addEventListener('click', handleCharKey)
})

document.getElementById('input').addEventListener('keydown', handleKeyDown)
document.getElementById('clear').addEventListener('click',handleClearKeys)
document.getElementById('equal').addEventListener('click', calculate)
switchTheme.addEventListener('click', theme)
document.getElementById('copyToClipboard').addEventListener('click', copyClipboard)
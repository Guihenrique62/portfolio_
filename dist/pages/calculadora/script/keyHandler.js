import calculate from "./calculate.js"

const input = document.getElementById('input')


export function handleClearKeys(){
  input.value = ''
  input.focus()
}

export function handleCharKey(ev){
 
  const value =  ev.currentTarget.dataset.value
  input.value += value
}

export function handleKeyDown(ev){
const allowkeys = ["(", ")", "/", "*", "-", '+', '.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '%', ' ']

  ev.preventDefault()
  if(allowkeys.includes(ev.key)){
      input.value += ev.key 
      return}
  if(ev.key === 'Backspace'){input.value = input.value.slice(0, -1)}
  if(ev.key === 'Enter'){calculate()}
}
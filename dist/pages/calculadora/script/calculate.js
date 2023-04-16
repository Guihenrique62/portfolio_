export default function calculate(){
const result = document.getElementById('result')

  result.value = 'ERRO'
  result.classList.add('error')

  result.value = eval(document.getElementById('input').value)

  result.classList.remove('error')
}
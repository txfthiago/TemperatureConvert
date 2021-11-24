const envioDeDados = document.querySelector('#envioDeDados')
let seila = envioDeDados.addEventListener('click', function (e) {
  e.preventDefault()

  let insertTemp = document.querySelector('#insertTemp')
  let insert = insertTemp.value

  let cDeCelsius = insert.toUpperCase().includes('C')
  let fDeFahrenheit = insert.toUpperCase().includes('F')

  if (!cDeCelsius && !fDeFahrenheit) {
    throw alert('Digite C para celsius ou F para Farenheit')
  }

  //CELSIUS PARA FAHRENHEIT
  let updateDegree = Number(insert.toUpperCase().replace('F', ''))
  let formula = fahrenheit => (fahrenheit - 32) * (5 / 9)
  let sinal = 'C°'

  if (cDeCelsius) {
    updateDegree = Number(insert.toUpperCase().replace('C', ''))
    formula = celsius => celsius * (9 / 5) + 32
    sinal = 'F°'
  }

  return alert(formula(updateDegree).toFixed(1) + sinal)
})

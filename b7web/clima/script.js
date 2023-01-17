document.querySelector('.pesquisa').addEventListener('submit', async(event) =>{
  event.preventDefault()

  let input = document.querySelector('#busca').value
  let encodeInput = encodeURI(input)
  if(input !== '') {
    clearInfo()
    aviso('Carregando...')
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeInput}&appid=c5fbe632591c0496929e1ae3404d7c96&units=metric&lang=pt_br`
    let results = await fetch(url)
    let json = await results.json()
    //console.log(json)
    if(json.cod === 200){
      mostraResultado({
        name: json.name,
        city: json.city,
        country: json.sys.country,
        temperature: json.main.temp,
        tempIcon: json.weather[0].icon,
        tempDescription: json.weather[0].description,
        windSpeed: json.wind.speed,
        windDirection: json.wind.deg,
      })
    }else{
      clearInfo()
      aviso("Localização não encontrada...")
    }
  }else{
    clearInfo()
  }
})

function aviso(aviso) {
  document.querySelector('.aviso').innerHTML = aviso
}

function mostraResultado(json) { 
  aviso('')
  document.querySelector('.mostra').style.display = 'block'
  document.querySelector('.mostra h2').innerHTML = `${json.name}, ${json.country}`
  document.querySelector('.tempInfo').innerHTML = `${json.temperature} <sup>˚C</sup>`
  document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`
  document.querySelector('.temperatura img').setAttribute('src', `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
  document.querySelector('.temperatura span').innerHTML = json.tempDescription
  document.querySelector('.ventoPonto').style.transform = `rotate(${json.windDirection - 90}deg)`
  document.querySelector('.direcaoVento').innerHTML = `${json.windDirection}<sup>˚</sup>`

}

function clearInfo(){
  aviso('')
  document.querySelector('.mostra').style.display = 'none'
}
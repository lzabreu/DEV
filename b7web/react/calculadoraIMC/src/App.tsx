import { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/powered.png'
import { levels, calculateImc, Level } from './helpers/imc'
import { GridItem } from './components/GridItem'
import leftArrowImage from './assets/leftarrow.png'

const App = () => {

  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)

  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalculate =() => {
    if(weightField && heightField){
      setToShow(calculateImc(heightField, weightField))
    }else{
      alert('Digite o peso e altura')
    }
  }
  const handleBackButton = () => {
    setToShow(null)
    setHeightField(0)
    setWeightField(0)
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt=""/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          <input
            type="number" 
            placeholder='Digite a sua altura ex: 1.5 (em metros)' 
            value={heightField > 0 ? heightField : ''} 
            onChange={e => setHeightField(parseFloat(e.target.value))} 
          />
          <input
            type="number" 
            placeholder='Digite o seu peso ex: 70.5 (em kilos)' 
            value={weightField > 0 ? weightField : ''} 
            onChange={e => setWeightField(parseFloat(e.target.value))} 
          />
          <button onClick={handleCalculate}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key ={key} item={item} />
              ))}
            </div>
          } 
          {toShow && 
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBackButton}>
              <img src={leftArrowImage} alt="Voltar" width={25}/>
            </div>
            <GridItem item = {toShow}/>
          </div>
          }
        </div>
      </div>
    </div>
  )

}

export default App
import Arrows from './img/icon-arrows.png'
import './Converter.css'
import ConverterStory from './ConverterStory'
import { useState, useEffect } from 'react';
import React from 'react';


function Converter () {
   // данные по курсу валют из сайта
   const [rates, setRates] = useState([]);
   console.log(rates)
   useEffect(() => {
      fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`)
        .then(response => response.json())
        .then(data => {
          setRates(data);
        })
        .catch(error => {
          console.error('Ошибка при получении пользователей:', error);
        });
    }, []);


    // курс валют левого селекта и вычисления
    const [leftCurrencyRate, setLeftCurrencyRate]=useState(0.37845)
    const [currencyLeft, setCurrencyLeft]=useState('RUB')

    function FindRateLeft (e) {
      const element=rates.find((el)=>el.cc===e.target.value) 
      console.log(element.rate)
      
      const result=(+element.rate/rightCurrencyRate)*valueLeft
      setLeftCurrencyRate(+element.rate)
      setValueRight(result) 
      setCurrencyLeft(element.cc)
    }
    console.log(leftCurrencyRate)
    console.log(typeof leftCurrencyRate)

    //курс валют правого селекта и вычисления
    const [rightCurrencyRate, setRightCurrencyRate]=useState(0.37845)
    const [currencyRight, setCurrencyRight]=useState('RUB')
    
    function FindRateRight (e) {
      const element=rates.find((el)=>el.cc===e.target.value)
      console.log(+element.rate)
     
      const result=(+element.rate/leftCurrencyRate)*valueRight
       setRightCurrencyRate (element.rate)
      setValueLeft(result) 
      setCurrencyRight(element.cc)
    }
      console.log(rightCurrencyRate)
      console.log(typeof rightCurrencyRate)
    
    //значение поля левого инпута и вычисления
    const [valueLeft, setValueLeft]=useState(100)
    function ValueInputLeft (e) {

      const valueLeft=+e.target.value
      const result=(leftCurrencyRate/rightCurrencyRate)*valueLeft
      setValueRight(result) 
      setValueLeft(+e.target.value)

    }
    console.log(valueLeft)
    console.log(typeof valueLeft)

    //значение поля правого инпута и вычисления
    const [valueRight, setValueRight]=useState(100)

    function ValueInputRight (e) {
      const valueRight=+e.target.value
      const result=(rightCurrencyRate/leftCurrencyRate)*valueRight
      setValueLeft(result) 
      setValueRight(+e.target.value)
    }
    console.log(valueRight)
    console.log(typeof valueRight)

   //  получение текущей даты из инпута дата
   let inputDate= React.createRef()
   const [dateSave,setDateSave]=useState('2023-08-10')
   
   function SaveResultDate () {
      const dateSave=inputDate.current.value
      setDateSave(dateSave)
   }

   // получение данных из инпутов в массив объектов для вывода истории сохранений
      const [saveStoryArr, setSaveStoryArr]=useState([])
      console.log(saveStoryArr)

      function createArrResults () {
      
      const StoryData={
            'data': dateSave,
            'valueLeft': valueLeft.toFixed(4),
            'currencyLeft': currencyLeft,
            'valueRight': valueRight.toFixed(4),
            'currencyRight':currencyRight,
         }
      setSaveStoryArr([...saveStoryArr,StoryData])
      }
   
   
  
  return (
   <>
      <div className="Converter">
         <div className="Converter-block">
            <div className="Converter-text">Конвертер валют</div>
            <div className='Block-input'>
               <div className="Converter-block-left">
                  
                  <div className="Converter-left-text">В мене є:</div>
                  <div className="input">
                     <input type="number" name="text-input"  onChange={ValueInputLeft} value={valueLeft}/>
                     <select  name="currency"onChange={FindRateLeft}>
                        <option value='RUB'>RUB</option>
                        <option value='USD'>USD</option>
                        <option value='EUR'>EUR</option>
                        <option value='GBP'>GBP</option>
                        <option value='CNY'>CNY</option>
                     </select>
                  </div>
                  <div className="DataForm">
                     <input type="date" onChange={SaveResultDate} ref={inputDate} value ={dateSave} name="date"/>
                  </div>
               </div>
               <div className="Converter-block-center">
                  <img src={Arrows}/>
               </div>
               <div className="Converter-block-right">
                  <div className='Converter-right-text'>Хочу придбати:</div>
                  <div className='input'>
                     <input type='number' name='text-input' onChange={ValueInputRight} value={valueRight}/>
                     <select name="currency" onChange={FindRateRight}>
                        <option value='RUB'>RUB</option>
                        <option value='USD'>USD</option>
                        <option value='EUR'>EUR</option>
                        <option value='GBP'>GBP</option>
                        <option value='CNY'>CNY</option>
                     </select>
                  </div>
                  <div className='Button-result'><button onClick={createArrResults} className='Button-save-result'>Зберегти результат</button></div>
               </div>
            </div>
         </div>
         
      </div>
      <ConverterStory dataStory={saveStoryArr}/>
   </>
   )
}
export default Converter
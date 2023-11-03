import Arrows from './img/icon-arrows.png'
import './Converter.css'
import ConverterStory from './ConverterStory'
import { useState, useEffect } from 'react';
import React from 'react';


function Converter () {
   // данные по курсу валют из сайта
   const [rates, setRates] = useState([]);//массив объектов с сервера
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
    const [leftCurrencyRate, setLeftCurrencyRate]=useState(0.37845)//значение курса выбранной валюты слева
    const [currencyLeft, setCurrencyLeft]=useState('RUB')//выбранная валюта слева

    function FindRateLeft (e) {//запускается при изменении левого селекта
      const element=rates.find((el)=>el.cc===e.target.value) //нахождение выбранного объекта с валютой
      console.log(element.rate)//значение курса из выбранного объекта валюты
      
      const result=(+element.rate/rightCurrencyRate)*valueLeft
      setLeftCurrencyRate(+element.rate)// запись в переменную
      setValueRight(result) //запись результата в правый инпут
      setCurrencyLeft(element.cc)
    }
    console.log(leftCurrencyRate)
    console.log(typeof leftCurrencyRate)

    //курс валют правого селекта и вычисления
    const [rightCurrencyRate, setRightCurrencyRate]=useState(0.37845)//значение курса выбранной валюты справа
    const [currencyRight, setCurrencyRight]=useState('RUB')//выбранная валюта справа
    
    function FindRateRight (e) {//запускается при изменении правого селекта
      const element=rates.find((el)=>el.cc===e.target.value)//нахождение выбранного объекта с валютой
      console.log(+element.rate)//значение курса из выбранного объекта валюты
     
      const result=(+element.rate/leftCurrencyRate)*valueRight
       setRightCurrencyRate (element.rate)
      setValueLeft(result) //запись результата в левый инпут
      setCurrencyRight(element.cc)
    }
      console.log(rightCurrencyRate)
      console.log(typeof rightCurrencyRate)
    
    //значение поля левого инпута и вычисления
    const [valueLeft, setValueLeft]=useState(100)//значение левого поля инпута
    function ValueInputLeft (e) {//запуск при измен левого поля инпута

      const valueLeft=+e.target.value//получаем значение левого инпута
      const result=(leftCurrencyRate/rightCurrencyRate)*valueLeft
      setValueRight(result) //запись результата в правый инпут
      setValueLeft(+e.target.value)//обновление значения поля левого инпута

    }
    console.log(valueLeft)
    console.log(typeof valueLeft)

    //значение поля правого инпута и вычисления
    const [valueRight, setValueRight]=useState(100)//значение правого поля инпута

    function ValueInputRight (e) {//запуск при измен правого поля инпута
      const valueRight=+e.target.value//получаем значение правого инпута
      const result=(rightCurrencyRate/leftCurrencyRate)*valueRight
      setValueLeft(result) //запись результата в левый инпут
      setValueRight(+e.target.value)//обновление значения поля правого инпута
      
    }
    console.log(valueRight)
    console.log(typeof valueRight)

   //  получение текущей даты из инпута дата
   let inputDate= React.createRef()//подключаем реф
   const [dateSave,setDateSave]=useState('2023-08-10') //значение даты в перменной
   
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
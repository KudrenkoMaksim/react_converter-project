import './ConverterStart.css'
import CoverterImg from './img/card.png'
import { Link } from 'react-router-dom'

function ConverterStart () {
   return (
  
      <div className="ConverterStart">
         <div className="ConverterStart-block">
            
            <div className='Converter-left'>
               <p className='Converter-left-text1'>Конвертер валют</p>
               <p className='Converter-left-text2'>
                  Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.
               </p>
               <div>
                  <Link to='/converter'><button className='ConvertStart'>Конвертувати валюту</button></Link>
               </div>
            </div>
            <div className='card'>
               <img className="mastercard" src={CoverterImg}/>
            </div>
         </div>
      </div>
      
 
   )
}
export default ConverterStart
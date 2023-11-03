import { Link } from 'react-router-dom'
import './Content.css'
import CardImg from './img/mastercard.png'

function Content () {
   return (
      <div className="Content">
         <div className="Content-block">
            
            <div className='Content-left'>
               <p className='Content-left-text1'>Чіп Чендж</p>
               <p className='Content-left-text2'>Обмінник валют - навчальний</p>
               <div>
                  <Link to='/converter'><button className='Convert'>Конвертер валют</button></Link>
               </div>
            </div>
            <div className='card'>
               <img className="mastercard" src={CardImg}/>
            </div>
         </div>
      </div>
   )
}
export default Content
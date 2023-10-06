import img from './../../Images/mskhan.jpg'
import './../../css/Main/Introduction.css'
function Introduction(){
  return(
    <section className="introduction">
      <div className="image">
        <img src={img} className="cover" alt="Ms Khan" />
      </div>
      <div className="information">
        <h1 className="text__lg">Mudassir Sarfraz Khan</h1>
        <p className="text__sm text__green">mudassir.pk.mp@gmail.com</p>
        <p  className="text__sm text__green">+92-3088974826</p>
      </div>
    </section>
  )
}

export default Introduction

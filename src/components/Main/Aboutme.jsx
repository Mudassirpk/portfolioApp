import './../../css/Main/Aboutme.css'
function Aboutme(){
  return(
      <section className="aboutme" id="aboutme">
        <h1 className="text__lg">About Me</h1>
        <p className="text__sm">I'm <span className="text__teal">Mudassir Sarfraz Khan</span>.I'm <span className="text__teal">Full Stack web developer</span> based in <span className="text__teal">Pakistan</span>.I build fully responsive and interactive websites with latest and appropriate technologies.</p>
        <a className='download__cv'
         href='./../../../public/MudassirKhan.pdf'
         download={'CV-MudassirKhan'}
        >Download CV</a>
      </section>
  )
}

export default Aboutme

import {Link} from 'react-router-dom'

function Work({img,title,description,postid}) {
  return (
    <div className="work">
      <div className="work__img">
        <img src={img} alt=" " />
      </div>
      <div className="work__information">
        <Link to={`/blogpost/${postid}`}>
        <p  className="text__md text__teal">{title}</p>
        <p  className="work__description text__sm text__yellow">{description}.</p>
        </Link>
      </div>
    </div>

  )
}

export default Work

import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className="parent">
      <div className="card">
       <div>
         <div className="top">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png" alt="" />
          <button>Save <Bookmark size={12}/></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>5 days ago</span></h3>
          <h2>{props.post}</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>

        </div>
       </div>
        <div className="bottom">
          <div>
          
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>

          </div>
        <button>Apply Now</button>

        </div>
      </div>
    </div>
  )
}

export default Card
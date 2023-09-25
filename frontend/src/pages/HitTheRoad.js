import legacy from '../img/legacy-logo.png'
import hittheroad_splash from '../img/hittheroad_main.png'
import lineart1 from '../img/lineart1.png'
import steamIcon from '../img/steamIcon.png'
import youtubeIcon from '../img/youtubeIcon.png'
import discordIcon from '../img/discordIcon.png'
import lineart2 from '../img/lineart2.png'
import bg_dark_2 from '../img/bg_dark_2.png'
import Socials from '../components/Socials.js'

import htr_1 from '../img/roads_image.png'
import htr_2 from '../img/interior_htr_v2.png'



function HitTheRoad() {

  // Who are we?
  // Links
  //  steam
  //  email (How to contact)
  //  Discord (How to contact)
  //  youtube
  //  twitter
  return (
    <span className="home-content">
      <div className='splash-img'>
        <img className='hidden-bg' src={hittheroad_splash} 
          alt="splash-legacy" loading="lazy"/>

        <div className='splash-title'>
          <h1>HIT</h1>
          <h1>THE</h1>
          <h1>ROAD</h1>
        </div>
      </div>

      <div className='body3'>
        <div className='line-main'>
          <div className= 'hor-line'>
            <img className= 'main-line-img' src={lineart1} 
              alt="lineart1" loading="lazy"/>
          </div>
        </div>

        <div className= 'welcome-body'>
          <h3> Welcome to Hit The Road </h3>

          <div className= 'welcome-desc'>
            <p1> Race through the forests, mountains and valleys of Hit The Road.
            Our newest project is a low poly racing and drifting game where users
            complete contracts to earn new gear for their character and equipment
            for their stagecoach. The path is not an easy one, with bandits,
            drifting around cliffs, and terrifying jumps, there will never be a dull
            moment on the road!
            </p1>
          </div>

          <div className= 'center-style'>
            <p1> Concept Art for interior and tracks </p1>
          </div>

          <div className= 'pic-parent-3'>
            <img className= 'ss-img img-shadow' src={htr_1} 
              alt="Hit the Road: Ramps" loading="lazy"/>
            <img className= 'ss-img img-shadow' src={htr_2} 
              alt="Hit the Road: Wagon" loading="lazy"/>
          </div>

          <div className= 'center-style'>
            <p1> More information coming soon! </p1>
          </div>


        </div>

        <Socials />

      </div>
    </span>
  );
}

export default HitTheRoad;

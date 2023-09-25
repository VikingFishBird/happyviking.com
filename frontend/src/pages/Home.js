import legacy from '../img/legacy-logo.png'
import legacySplash from '../img/legacy-splash.png'
import lineart1 from '../img/lineart1.png'
import steamIcon from '../img/steamIcon.png'
import youtubeIcon from '../img/youtubeIcon.png'
import discordIcon from '../img/discordIcon.png'
import lineart2 from '../img/lineart2.png'
import bg_dark_2 from '../img/bg_dark_2.png'
import llyod from '../img/llyod.png'
import voronoi2 from '../img/voronoi2.png'
import bg_dark_3 from '../img/bg_dark_3.png'
import bg_dark_4 from '../img/bg_dark_4.png'
import Socials from '../components/Socials.js'

import ss3 from '../img/ss3.PNG'
import ss5 from '../img/ss5.PNG'

import ss4 from '../img/ss4.PNG'
import combat2 from '../img/NewSS2.jpg'


function Home() {
  return (
    <span className="home-content">
      <div className='splash-img'>
        <img className='hidden-bg' src={legacySplash} alt="splash-legacy" />

        <div className='splash-title'>
          <h2>A MODEST</h2>
          <h1>LEGACY</h1>
        </div>
      </div>

      <div className='body1'>
        <div className='line-main'>
          <div className= 'hor-line'>
            <img className= 'main-line-img' src={lineart1} alt="lineart1"/>
          </div>
        </div>

        <div className= 'welcome-body'>
          <h3> Welcome to A Modest Legacy </h3>

          <span className='welcome-span'>
            <div className= 'welcome-desc'>
              <p1> 
                Explore the world of A Modest Legacy, where you must fight
                to create your kingdom while taking down your enemies.
                A Modest Legacy is a real time strategy, roguelite,
                single-player game where you must work to grow your cities,
                outposts, and armies, all while keeping your population fed and
                ready for war. 
              </p1>
              <iframe
                src="https://store.steampowered.com/widget/1858090/"
                height="190"
                loading="lazy">
              </iframe>
            </div>

            

            <iframe
              width="600"  className='img-shadow'
              src="https://www.youtube.com/embed/xTy1GrrcGRQ"
              loading="lazy">
            </iframe>
          </span>
          

        </div>

        <Socials />


      </div>

      <div className='splash-img'>
        <img className='hidden-bg' src={bg_dark_2} 
          alt="splash-legacy" loading="lazy">

        </img>
        <div className='dark-img' />

        <div className= 'feature-body-1'>
          <div className= 'feature-1-title'>
            <h3> A little more about A Modest Legacy </h3>
          </div>

          <h4> Procedural map generation using Voronoi Diagrams and Llyod Relaxation </h4>

          <div className= 'feature-desc-1'>
            <p1> We procedurally generated our maps using Voronoi diagrams,
            Lloyd relaxation and Poisson Disc sampling.
            This allows for every new world to feel completely different and
            fresh. The map variation leads to unique scenarios like enemy
            kingdoms controlling rivers, dominating islands, and much more!
            </p1>
          </div>

          <div className= 'pic-parent'>
            <img className= 'voronoi-img img-shadow' src={voronoi2} 
              alt="voronoi2"  loading="lazy"/>
            <img className= 'llyod-img img-shadow' src={llyod} 
              alt="llyod"  loading="lazy"/>
          </div>

        </div>
      </div>

      <div className='body2'>
      </div>

      <div className='line-main'>
        <div className= 'hor-line'>
          <img className= 'main-line-img' src={lineart1} 
            alt="lineart1" loading="lazy"/>
        </div>
      </div>

      <div className='body2'>
      </div>

      <div className='splash-img'>
        <img className='hidden-bg' src={bg_dark_3} 
          alt="splash-legacy" loading="lazy">

        </img>
        <div className='dark-img' />

        <div className= 'feature-body-1'>

          <h4> Advanced Combat System </h4>

          <div className= 'feature-desc-1'>
            <p1> Using Unity's pathfinding, we created a combat system for the player
            to have control over their armies. Users can choose to control their entire
            army at once, or to micromanage specific troops if the instance demands it.
            The combat system makes both large and small scale battles feel intricate
            and immersive. When designing this system, we also wanted to make sure that
            late game wars remain original. We achieved this through the destructive
            capability of artillery. Which presents players with new challenges to overcome.
            Lastly, we prioritized the ease and feel of the combat system and its corresponding
            UI/UX.

            </p1>
          </div>

          <div className= 'pic-parent-2'>
            <img className= 'ss-img img-shadow' src={ss4} 
              alt="Large Battle" loading="lazy"/>
            <img className= 'ss-img img-shadow' src={combat2} 
              alt="Combat Menu" loading="lazy"/>
          </div>

        </div>
      </div>

      <div className='body2'>
      </div>

      <div className='line-main'>
        <div className= 'hor-line'>
          <img className= 'main-line-img' src={lineart1} 
          alt="lineart1" loading="lazy"/>
        </div>
      </div>

      <div className='body2'>
      </div>

      <div className='splash-img'>
        <img className='hidden-bg' src={bg_dark_4} 
          alt="splash-legacy" loading="lazy">

        </img>
        <div className='dark-img' />

        <div className= 'feature-body-1'>

          <h4> Complex A.I. Kingdoms </h4>

          <div className= 'feature-desc-1'>
            <p1> We created a unique heuristic algorithm for computer kingdoms to
            always feel different from one another. Each enemy kingdom will try to
            construct their city in an original way. This leads to entertaining
            gameplay where players will adjust to new situations and experience new
            mechanics throughout the game. Enemy kingdoms will build just as fast
            as the player, so they should always feel like a worthy opponent.
            We achieve this through the emulation of realistic human actions
            during A.I. decision-making. They explore, defend, and plan wars just
            as users would while maintaining their own distinctive kingdom identities.
            </p1>
          </div>

          <div className= 'pic-parent-3'>
            <img className= 'ss-img img-shadow' src={ss3} 
              alt="Red City" loading="lazy"/>
            <img className= 'ss-img img-shadow' src={ss5} 
              alt="Purple City" loading="lazy"/>
          </div>

        </div>
      </div>

      <Socials />
    </span>
  );
}

export default Home;

/*

<div className="info-blurb">
  <section className="blurb">
    <p>Legacy is now out in early access on steam! You can join our
    discord to stay up to date on the latest
    updates!</p>
  </section>
  <iframe
    src="https://store.steampowered.com/widget/1858090/"
    width="600" height="190">
  </iframe>
</div>
<iframe
  width="1024" height="576"
  src="https://www.youtube.com/embed/xTy1GrrcGRQ">
</iframe>

<br /><br />
Welcome to Legacy, a medieval, real time
strategy game. Here you will use city
building and combat tactics to conquer your
enemies in hopes to be the last kingdom
standing. Good luck!</p>

<img src={legacy} alt="banner" />

<div className='line-2'>

          <div className= 'hor-line-left'>
            <img className= 'second-line-img-flip' src={lineart2} alt="lineart2"/>
          </div>



          <img className= 'steam-img' src={steamIcon} alt="steamIcon"/>
          <img className= 'youtube-img' src={youtubeIcon} alt="youtubeIcon"/>
          <img className= 'discord-img' src={discordIcon} alt="discordIcon"/>

          <div className= 'hor-line-right'>
            <img className= 'second-line-img' src={lineart2} alt="lineart2"/>
          </div>


      </div>
*/

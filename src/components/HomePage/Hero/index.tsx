const Hero: React.FC = () => {
  return (
    <div className="hero ">
      <div className="color" />
      <div className="items">
        <div className="items-left">
          <h1>Easily create or join a local nanny share with Hapu</h1>
          <p>
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new
            flexible, affordable solutions in childcare.
          </p>
          <div className="play">
            <button>
              <img src="/icons/play.svg" alt="Play Icon" />
            </button>
            <a href="#">See hapu in action (27 seconds)</a>
          </div>
        </div>
        <img className="imgh" src="/img/img-hero.svg" alt="Hero Image"></img>
      </div>
    </div>
  )
}

export { Hero }

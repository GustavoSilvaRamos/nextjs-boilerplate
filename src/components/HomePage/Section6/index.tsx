const Section6: React.FC = () => {
  return (
    <div className="section6">
      <div className="items">
        <h1>Become a nanny share host</h1>
        <h2>Takes less than 5 minutes to get started</h2>
        <button>
          <img src="/icons/calendar.svg" alt="Icon" />
          <div>
            <h3>Create Your Nanny Share</h3>
            <p>Takes less than 5 minutes</p>
          </div>
        </button>
        <a href="#">Or browse local nanny-shares</a>
      </div>
      <div className="footer">
        <div className="logo">
          <img src="/img/logofull.svg" alt="Logo" />
        </div>
        <div className="links">
          <a href="#">Share Your Nanny</a>
          <a href="#">Our Story</a>
          <a href="#">Blog</a>
          <a href="#">Terms & Privacy</a>
        </div>
        <div className="social">
          <a href="#">
            <button>
              <img src="/icons/facebook.svg" alt="Facebook Icon" />
            </button>
          </a>
          <a href="#">
            <button>
              <img src="/icons/twitter.svg" alt="Twitter Icon" />
            </button>
          </a>
          <a href="#">
            <button>
              <img src="/icons/instagram.svg" alt="Instagram Icon" />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export { Section6 }

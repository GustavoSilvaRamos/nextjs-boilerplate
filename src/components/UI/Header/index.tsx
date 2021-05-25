export const Header: React.FC = () => {
  return (
    <div className="header">
      <img src="/img/logo.svg" alt="Logo" />
      <div className="items">
        <div className="items-header-left">
          <a href="#">Create Your Nanny Share</a>
          <a href="#">Browse Shares</a>
          <a href="#">Our Story</a>
        </div>
        <div className="items-header-right">
          <button>Become a Nanny Share Host</button>
          <a href="#">Sign In </a>
        </div>
      </div>
    </div>
  )
}

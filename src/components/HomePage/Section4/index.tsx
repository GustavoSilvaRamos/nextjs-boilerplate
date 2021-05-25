import { History } from './History'

const Section4: React.FC = () => {
  return (
    <div className="section4">
      <div className="items">
        <h1>A framework built for the long term</h1>
        <p className="desc">
          Childcare is for the long term. And you need a framework you can count on that gives your
          share long term viability and success. That’s why we’ve defined Hapu around our three
          tribal principles; clearly defined process, transparency over money and equality of
          participation.
        </p>
        <a href="#">Read how Hapu’s tribal background defines our app </a>
        <div className="profile-informations">
          <img src="/img/profile.svg" alt="Profile" />
          <div>
            <h2>Your Billing History</h2>
            <h3>You have a 1 recent payment</h3>
          </div>
        </div>
        <div className="history-component">
          <History name="Jane's" />
        </div>
      </div>
    </div>
  )
}

export { Section4 }

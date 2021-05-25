const Section1: React.FC = () => {
  return (
    <div className="section1">
      <div className="relative items">
        <div className="items-left">
          <h1>
            Share your home,
            <br /> nanny and costs
          </h1>
          <p>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be,
            well, fantastic?! If only it was easy to connect with other parents to share your costs?
            Well now it is, with Hapu. Hapu means tribe and it’s our foundational 3 tribal
            principles that empowers you to create and manage your own tribe. A tribe that together
            has the power to create new affordable solutions in childcare that work for you and your
            community.
          </p>
          <a className="underline" href="#">
            Ready to get started?
          </a>
        </div>
        <img src="/img/imgsection1.svg" alt="Image" />
      </div>
    </div>
  )
}

export { Section1 }

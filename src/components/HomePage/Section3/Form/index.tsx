const Form: React.FC = () => {
  return (
    <form>
      <div className="radioinput">
        <input type="radio" id="simple" name="select" checked />
        <label htmlFor="simple"> Choose to enter a simple flat amount</label>
      </div>
      <div className="inputdesc">
        <input className="input1" type="text" value="$00.00" />
        <span>hr</span>
        <p>e.g. $100/day for a 10hr day</p>
      </div>
      <div className="radioinput2">
        <input type="radio" id="shared" name="select" />
        <label htmlFor="shared">Chose shared rates</label>
      </div>
      <div className="inputs">
        <div className="inputdesc2">
          <div>
            <input className="input2" type="text" value="$25.00*" />
            <span className="hr">hr</span>
          </div>
          <div className="desc">
            <p>Shared 2 children</p>
            <p>$12.50/hr * 2 </p>
          </div>
        </div>
        <div className="inputdesc2">
          <div>
            <input className="input2" type="text" value="$30.00*" />
            <span className="hr">hr</span>
          </div>
          <div className="desc">
            <p>Shared 2 children</p>
            <p>$10.00/hr * 3 </p>
          </div>
        </div>
        <div className="inputdesc2">
          <div>
            <input className="input2" type="text" value="$35.00*" />
            <span className="hr">hr</span>
          </div>
          <div className="desc">
            <p>Shared 2 children</p>
            <p>$8.75/hr * 4 </p>
          </div>
        </div>
      </div>
    </form>
  )
}

export { Form }

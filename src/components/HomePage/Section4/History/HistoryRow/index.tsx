interface HistoryRowProps {
  name: string
  childs: string
  rate: string
  valuehour: string
  totalvalue: string
  date: string
}

const HistoryRow: React.FC<HistoryRowProps> = ({
  name,
  childs,
  rate,
  valuehour,
  totalvalue,
  date,
}) => {
  return (
    <div className="table-row">
      <div className="profile-img">
        <img src="/img/profile.svg" alt="Profile" />
      </div>
      <div className="client">
        <h3>{name}</h3>
        <p>{childs}</p>
      </div>
      <div className="rate">
        <input type="text" value={rate} />
      </div>
      <div className="valuehour">
        <input type="text" value={valuehour} />
        <span>hr</span>
      </div>
      <div className="input1">
        <input type="text" value="$9" />
      </div>
      <div className="input2">
        <input type="text" value="$9" />
      </div>
      <div className="totalvalue">
        <input type="text" value={totalvalue} />
        <span>paid you</span>
      </div>
      <div className="date">
        <p>{date}</p>
      </div>
      <div className="action">
        <button>Process Late Fee</button>
      </div>
    </div>
  )
}

export { HistoryRow }

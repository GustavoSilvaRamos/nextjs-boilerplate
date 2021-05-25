import { HistoryRow } from './HistoryRow'

interface HistoryProps {
  name: string
}
const History: React.FC<HistoryProps> = ({ name }) => {
  return (
    <div className="history">
      <div className="header-table">
        <p className="name">{name} Nanny Share</p>
        <p className="days">Mo * Tu * We * 8:30 - 5:30</p>
        <p className="paid">Amount Paid</p>
        <p className="date">Date</p>
        <p className="actions">Actions</p>
      </div>
      <HistoryRow
        name="Alessa"
        childs="1 child"
        rate="Shared Rate"
        valuehour="$15.00"
        totalvalue="$530.00"
        date="11/11/2011"
      />
      <HistoryRow
        name="Kate"
        childs="2 childs"
        rate="Shared Rate"
        valuehour="$15.00"
        totalvalue="$530.00"
        date="11/11/2011"
      />
      <HistoryRow
        name="Jhon"
        childs="1 child"
        rate="Shared Rate"
        valuehour="$15.00"
        totalvalue="$530.00"
        date="11/11/2011"
      />
    </div>
  )
}

export { History }

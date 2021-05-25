import { Form } from './Form'

const Section3: React.FC = () => {
  return (
    <div className="section3">
      <div className="relative items">
        <div className="items-left">
          <Form />
        </div>
        <div className="items-right">
          <h1>Shared payments made simple</h1>
          <p>
            Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week
            in, week out and you might encounter more than a few snares. But not with Hapu. Simply
            set your rates and our automated payment system takes care of the rest. You need never
            talk money or who owes what.
          </p>
          <a href="#">Read how Bridget’s share (without Hapu) ended over $15</a>
        </div>
      </div>
    </div>
  )
}

export { Section3 }

import { useState } from 'react'

const Section2: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')

  function onSubmit(e) {
    e.preventDefault()
    const payload = {
      email: email,
      name: name,
    }
    console.log(payload)
    fetch('https://api.jungledevs.com/api/v1/challenge-newsletter/', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return (
    <div className="section2">
      <div className="relative items">
        <h2>Are you a parent without a nanny and looking to share?</h2>
        <p>
          Leave us your name and email and we’ll update you as soon as a share becomes available in
          your area!
        </p>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Your name"
          />
          <input
            type="email"
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Your email"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export { Section2 }

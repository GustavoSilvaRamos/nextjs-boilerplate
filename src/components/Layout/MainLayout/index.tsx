// Modules Import
import { BeatLoader } from 'react-spinners'

// Application Import
import { useExample } from '@context/index'

// Components Import
import { Header } from '@components/UI'

export const MainLayout: React.FC = ({ children }) => {
  const { state } = useExample()

  if (state.isLoading) {
    return (
      <div className="loading" data-testid="loading-container">
        <BeatLoader color="#5E20A4" />
      </div>
    )
  }

  return (
    <div data-testid="loaded-container">
      <Header />
      <div className=" layout inner-height">{children}</div>
    </div>
  )
}

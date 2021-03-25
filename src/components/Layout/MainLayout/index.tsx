// Modules Import
import { BeatLoader } from 'react-spinners'

// Application Import
import { useExample } from '@context/index'

// Components Import
import { Header, Sidebar } from '@components/UI'

export const MainLayout: React.FC = ({ children }) => {
  const { state } = useExample()

  if (state.isLoading) {
    return (
      <div className="loading-container" data-testid="loading-container">
        <BeatLoader color="#0D66C4" />
      </div>
    )
  }

  return (
    <div className="main-container" data-testid="loaded-container">
      <Header />
      <Sidebar />
      <div className="inner-container">{children}</div>
    </div>
  )
}

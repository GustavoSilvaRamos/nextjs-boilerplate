// Components Import
import { MainLayout } from '@components/Layout'
import { Title, Logo, Caption } from '@components/UI'

export const HomeScreen: React.FC = () => {
  return (
    <MainLayout>
      <div className="home-container">
        <Logo />
        <Title value="Welcome to your new App" />
        <Caption value="I'm sure you are going to build something incredible!" />
      </div>
    </MainLayout>
  )
}

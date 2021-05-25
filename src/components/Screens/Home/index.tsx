// Components Import
import {
  Hero,
  SubHero,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Footer,
} from '@components/HomePage'
import { MainLayout } from '@components/Layout'

export const HomeScreen: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <SubHero />
      <div className="container">
        <Section1 />
        <div className="divider" />
        <Section2 />
        <div className="divider" />
        <Section3 />
        <div className="divider" />
        <Section4 />
        <div className="divider" />
        <Section5 />
      </div>
      <Section6 />
      <Footer />
    </MainLayout>
  )
}

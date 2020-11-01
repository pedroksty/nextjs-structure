import { Container } from '../styles/pages/Home'
import SEO from '@/components/SEO'

export default function Home() {
  return (
    <Container>

      <SEO
        title="ReactJS Structure"
        shouldExludeTitleSuffix
        image="logo.png"
      />

      <h1>ReactJS Structure</h1>
      <p>A reactJS + Next.JS structure made by Pedro Henrique.</p>

    </Container>
  )
}

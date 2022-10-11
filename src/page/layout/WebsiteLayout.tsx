import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <>
      <Header />
        <main>
          <Outlet />
        </main>
      <Footer />
    </>
  )
}

export default WebsiteLayout
// React outlet import for pgaes
import { Outlet } from 'react-router-dom';

// Import 2 css files
import './css/main.css'
import './css/header.css'
import './css/responsive.css'

// Import header and footer components
import Header from './components/header';
import Footer from './components/footer';


function App() {

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

export default App



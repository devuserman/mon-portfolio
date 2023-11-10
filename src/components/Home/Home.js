import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Slideshow from '../Slideshow/Slideshow'

import './Home.css';


function Home() {

    return (
      <>
      <Header />
      <>
      <div className="home">
      <Slideshow />
        <main className="text-section">
  <h1>Bonjour !<br/> Je suis Anna</h1>
 <p>Je crée des sites web créatifs et modernes.</p>
  <p>Bienvenue dans mon univers de code et d'innovation.</p>
  
</main>
</div>
</>
<Footer />
</>
   );
  }

export default Home;
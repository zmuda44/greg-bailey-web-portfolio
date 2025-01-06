import Navigation from './navigation'


function Header() {
  return (
    <header>
    <div className='container'>
     <div className="brand">
      <a href="/"><img src="/images/header 300 x 100.png" /></a>
     </div>
        <Navigation />
    </div>
    </header>
  );
}

export default Header;





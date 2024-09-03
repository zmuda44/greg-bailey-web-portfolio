import ProjectSlider from '../components/projectSlider'

function Portfolio() {
  return (
    <section id='portfolio'>
      <div className="container">
        <h1 className="section-title">Welcome to my portfolio</h1>  
        <div className="section-body">
          <ProjectSlider />
        </div> 
      </div> 
    </section>
  );
}

export default Portfolio;
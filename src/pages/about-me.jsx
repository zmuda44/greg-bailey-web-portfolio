function AboutMe() {




  return (
    <section id='about-me'>
      <div className="container">
        <h1 id="aboutme-title" className="section-title">Welcome to my web design portolio</h1>
        <button className="portfolio-link-btn">View Portfolio</button>

        <div className='top-content'>
          <div className = 'top-container'>
              <div className="top-header">  
                <h2 id="larger-title">Full Stack Web Developer</h2>
                <div id="scroll-skills">  
                  <span>HTML</span><span>CSS</span><span>Javascript</span>
                  <span>React</span><span>MySQL</span><span>MondoDB</span>
                  <span>Express</span><span>Photoshop</span><span>Illustrator</span>
                  <span>XD</span>  
                </div>
                <h2>Web Design | Graphic Design | Video Design</h2>
                <p>Graphic Design portfolio available upon request</p>                     
              </div>       
              <img src="./images/monitor and cell.png"  />  
          </div> 
        </div> 

        <div className="bio">
            <h3>Greg Bailey - Web Developer</h3>
            <p>I am a full stack web developer with over 10 years experience in graphic and web design. 
            Feel free to explore my portfolio to see a selection of projects I've successfully completed.
            </p>
            <p>The path that has brought me to web development started as a Marketing Manager, where I was responsible for managing and creating content for websites to align with marketing goals. 
            I have worked with online platforms in this capacity for several years; in Wordpress, Umbraco and other systems.
            A marketing professional will familiarize themselves with html and css structure. The website administration will often provide access to a portion of the CMS or page to allow the production of blog content, and sections of the pages for content. 
            </p>
            <p>In these managerial roles, I was tasked with producing the content and design of materials, and this especially included images and graphics for the web. In addition to graphic design tasks,
            I have experience using Wordpress and popular page builders, such as WPBakery and Elementor. Page builders also offer a better understanding of page layout.
            There is very little coding that needs to be done in these page builders, but concepts such as nesting, padding, margin, border and even flexbox are the same. Custom css styling as overrides can be done to achieve a custom look.
            </p>
            <p>As I became more interested in websites, I wanted to learn it all. I wanted to know the code behind it, 
            and mainly I wanted to start creating look and functionlaity that is either unavailable in page builders, 
            or come at the expense of load time and performance. I have recently completed the Rutgers Web development
            Bootcamp and I am 1000 times more confident in my ability than when I first began. I not only can build a website
            from scratch that looks and operates better, but I also have an understanding of how web servers operate to perform full CRUD operations. 
            </p>
            <img src="./images/headshot.png" alt="image of me" />  
        </div> 
      </div> 
    </section>
    
  );

}

export default AboutMe;
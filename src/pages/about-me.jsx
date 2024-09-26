
function AboutMe() {
  return (
    <section id='about-me'>
      <div className="container">
        <h1 id="aboutme-title" className="section-title">About Me</h1>
          <div className='top'>
            <div className = 'top-container'>
              <div className="left">  
              <img src="./images/monitor and cell.png"  />              
              </div>
              <div className="right">
                <h2>Full Stack</h2>
                <h2>Reponsive Design</h2>
                <h2>Graphic Design</h2>
              </div> 
            </div> 
          </div>
          <div className="bio">
            <h3>Greg Bailey - Web Developer</h3>
            <p>The path that has brought me to web development started in Marketing. 
            In a Marketing role, the manager is often tasked with monitoring the website's content and developing new content to meet marketing goals. 
            I have worked with online platforms in this capacity for several years; in Wordpress, Umbraco and other systems.
            A marketing professional will eventually familiarize themselves with html structure and css. The website manager will often provide access to a portion of the CMS or a webpage to allow them to produce blog content, so my experience in websites began in this manner.
            </p>
            <p>In my Marketing roles, I was always tasked with producing the content and design of the Marketing materials, and this especially included images and graphics for the web. In addition to graphic design tasks,
            I began creating websites from scratch using Wordpress and the popular page builders of the time, such as WPBakery and Elementor. I gained a greater understanding of the page layout from building these sites.
            There is very little coding that needs to be done in these page builders, but concepts such as nesting, padding, margin, border and even flexbox are the same. I often applied custom css styling as overrides to achieve a custom look.
            </p>
            <p>As I became more interested in websites, I wanted to learn it all. I wanted to know the code behind it, 
            and mainly I wanted to start creating look and functionlaity that is either unavailable in page builders, 
            or come at the expense of load time and performance. I am currently completing the Rutgers Web development
            Bootcamp and I am 1000 times more confident in my ability than when I first began. I not only can build a website
            from scratch that looks and operates better, but I also have an understanding of how web servers operate and to perform full CRUD operations. 
            </p>
            <img src="./images/headshot.png" alt="image of me" />  
          </div>  
      </div>
    </section>
  );
}

export default AboutMe;
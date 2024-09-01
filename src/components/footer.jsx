
function Footer() {
  console.log('Footer rendered');
  return (
    <footer id='footer'>
      <div className='container'>
        <div className="left">
          <p>Contact information</p>
          <p>email: gregbailey617@gmail.com</p>
        </div>
        <div className="right">
          <p><a href="https://github.com/zmuda44">github</a></p>
          <p><a href="https://www.linkedin.com/in/greg-bailey-a2a13887/">linkedin</a></p>
          <p><a href="https://stackexchange.com/users/30242602/greg">stack overflow</a></p>
        </div> 
      </div>       
    </footer>
  );
}

export default Footer;
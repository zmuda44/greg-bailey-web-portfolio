
function Project({ title, description, img, url, repo }) {
  return (
    <div className="project">

    <div className="project-container">    

      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="links">
        <a href={url} target="_blank" rel="noopener noreferrer">View Project</a>
        <a href={repo} target="_blank" rel="noopener noreferrer">View Repo</a>
      </div>


    </div>

  </div>
  );
}

export default Project;


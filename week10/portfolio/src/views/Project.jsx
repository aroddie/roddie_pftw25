import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export function Project({ data }) {
    const { slug } = useParams();
    console.log("params", slug);
    const selectedProject = data.find((project) => project.slug === slug);
    console.log(selectedProject);
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <div className="project">
                <h1>{selectedProject.name}</h1>
                <h2>{selectedProject.description}</h2>
                <div className="project-images"><img src={selectedProject.thumbnail} alt={selectedProject.name} /></div>
                
                <p>{selectedProject.summary}</p>
                {selectedProject.video  &&
                    <div className="project-images">
                        {selectedProject.slug === "enso-theatre-ensemble" && 
                        <h3 className="project-images">Fall Fundraiser Video 2017</h3>}
                        <iframe width="650" height="366" src={selectedProject.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                }
                <div className="project-images">
                    {selectedProject.images.map((pic) => {
                        const {image, imgCaption, imgAlt} = pic;
                        return(
                            <div className="img-block" key={image}>
                            <h3>{imgCaption}</h3>
                            <img src={image} alt={imgAlt} />
                            
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
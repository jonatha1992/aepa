import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import Curso from "./Curso";

const cursos = [
    {
        id: 1,
        title: "Fazt Web",
        image: image1,
        url: "https://faztweb.com",
    },
    {
        id: 2,
        title: "Fazt Blog",
        image: image2,
        url: "https://blog.faztweb.com",
    },
    {
        id: 3,
        title: "Fazt Youtube",
        image: image3,
        url: "https://youtube.com/fazttech",
    },
];
function Cursos() {
    return (
        <div className="mt-5 container d-flex justify-content-center align-items-center h-100">
            <div className=" row">
                {cursos.map(({ title, image, url, id }) => (
                    <div className="col-md-4" key={id}>
                        <Curso imageSource={image} title={title} url={url} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cursos;

import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa"; // Importng all icons for simplicity
import { FiMail } from "react-icons/fi"; // Importing all icons for simplicity

export const Redes = () => {
    return (
        <>
            <div className=" text-white">
                <h3 className="h2">¿Necesitas Ayuda? </h3>
                <ul className="list-unstyled mt-3">
                    <li className=" texto-con-borde align-items-center mb-3">
                        <FaWhatsapp size={25} className="me-2 text-success " />
                        <a
                            href="https://wa.me/5491140232792"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" fw-bold"
                        >
                            (+54) 9 11 4023-2792
                        </a>
                    </li>
                    <li className=" text-primary texto-con-borde align-items-center mb-3 ">
                        <FiMail size={25} className="me-2 " />
                        <a className="  fw-bold" href="mailto:secretaria@aepa.com.ar">
                            secretaria@aepa.com.ar
                        </a>
                    </li>
                </ul>
            </div>
            <div className=" text-white ">
                <h3 className="h2 mb-3">Seguinos en las Redes</h3>
                <ul className="list-unstyled">
                    <li className="  texto-con-borde align-items-center mb-3">
                        <FaFacebook size={25} className="me-2  text-primary " />
                        <a
                            href="https://www.facebook.com/profile.php?id=61551020911888"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" fw-bold fw-bold "
                        >
                            Facebook
                        </a>
                    </li>
                    <li className=" texto-con-borde align-items-center mb-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="bi bi-tiktok me-2 text-black"
                            viewBox="0 0 16 16"
                        >
                            <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                        </svg>{" "}
                        <a className=" fw-bold" href="https://www.tiktok.com/@aepa2023">
                            Ticktok
                        </a>
                    </li>
                    <li className=" texto-con-borde align-items-center mb-3">
                        <FaInstagram size={25} className="me-2 " style={{ color: "red" }} />
                        <a className=" fw-bold" href="https://www.instagram.com/aepa318/">
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default Redes;

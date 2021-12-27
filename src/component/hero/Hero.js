import Image from "next/image"
import HeroPic from "../../assets/foto-bela.jpg"

export default function Hero() {
    return (
        <div>
            <div className="container pt-4 pb-3">
                <div className="row media-row">
                    <div className="col-md-6 img-container">
                        <Image src={HeroPic} alt="avatar-picture" />
                    </div>
                    <div className="col-md-6 d-flex flex-column pt-4 hero-text">
                        <h1 >Isabela Munevar - Escalante</h1>
                        <p className="text-justify pt-4">I am a Ph.D. candidate in the economic and education program at Teachers College, Columbia University. I also hold both an MS and a BA in economics from Los Andes University in Bogotá, Colombia.
                            <br /> <br /> I conduct quantitative research on education, labor and development economics, with special interest in developing countries.
                            <br /> <br /> Fields: Education, labor and development economics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Link from "next/link";

export default function Accordion({
    id,
    title,
    text,
    src
}) {
    return (
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={'#' + id} aria-expanded="true" aria-controls={id}>
                            {title}
                        </button>
                    </h2>
                    <div id={id} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>{text}</p>
                            <Link href={src}><a target="_blank">{src}</a></Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}
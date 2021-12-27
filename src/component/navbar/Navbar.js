import Link from "next/link"

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link href='/'>
                        <a class="navbar-brand logo">Isabela Munevar Escalante</a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ms-auto nav-items">
                            <Link href='/reaserch'>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page">Contact</a>
                                </li>
                            </Link>
                            <Link href='/reaserch'>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page">Personal</a>
                                </li>
                            </Link>
                            <Link href='/reaserch'>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page">Policy</a>
                                </li>
                            </Link>
                            <Link href='/reaserch'>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page">Research</a>
                                </li>
                            </Link>
                            <Link href='/reaserch'>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page">Teaching</a>
                                </li>
                            </Link>
                            <li>
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

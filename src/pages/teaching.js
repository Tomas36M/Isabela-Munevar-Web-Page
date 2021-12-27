import Head from 'next/head'
import Navbar from '../component/navbar/Navbar'
import Accordion from '../component/acordion/Accordion';
import Footer from '../component/footer/footer';

const data = [
    {
        
    }
]

export default function Home() {
    return (
        <div>
            <Head>
                <title>Pagina Bela</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Baskervville&display=swap" rel="stylesheet"></link>
            </Head>
            <Navbar />
            <div className='acordion-section'>
                {data.map(outerElement => (
                    <div>
                        <h3 className='publication'>{outerElement.publication}</h3>
                        {outerElement.papers.map((innerElement) => (
                            <Accordion
                                id={innerElement.id}
                                title={innerElement.title}
                                text={innerElement.text}
                                src={innerElement.src}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <Footer />
        </div>

    )
}

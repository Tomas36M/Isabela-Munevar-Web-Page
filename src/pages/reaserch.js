import Head from 'next/head'
import Navbar from '../component/navbar/Navbar'
import Accordion from '../component/acordion/Accordion';
import Footer from '../component/footer/footer';

const data = [
    {
        id: 1,
        publication: 'Publications: Papers',
        papers: [
            {
                id: 'papers1',
                title: 'Elacqua, G., Munevar, I., Sanchez, F., & Santos, H. (2021). The impact of decentralized decision-making on student outcomes and teacher quality: Evidence from Colombia. World Development, 141, 105378.',
                text: 'This paper evaluates the effects of the administrative decentralization of education on teacher quality and student outcomes in Colombia. In 2001, the government established an arbitrary rule that granted municipalities with a 2002 population >100,000 almost complete autonomy to provide education services (certification). This analysis takes advantage of this rule to evaluate, using difference-in-differences and regression discontinuity methodologies, the effect of municipal autonomy on teacher quality and student outcomes, including achievement and enrollment. The control group is made up of municipalities for which the provision of education was centralized and managed by the departmental authorities. The results indicate that administrative decentralization (being certified) improves both school enrollment and student achievement as well as the quality of teachers, as measured by teachers’ education level and scores on teachers’ entry competency exams. Using a mediation analysis, the paper finds that higher-quality teachers hired by the certified municipalities partially explained the improvement in student achievement. This analysis also shows that “certified” municipalities invest more local resources in education which also contributes to explain to a much lesser extent their superior educational outcomes. Finally, the results suggest that achieving better student outcomes is less related to the amount of resources that decentralized municipalities managed and more associated with the fact that those resources seem to have been better allocated, generating significant efficiency gains. These gains may be the consequence of lower transaction costs of matching local preferences with local educational interventions.',
                src: 'https://www.sciencedirect.com/science/article/abs/pii/S0305750X20305064?via%3Dihub'
            }
        ]
    },
    {
        id: 2,
        publication: 'Publications: Policy Brief',
        papers: [
            {
                id: 'policy1',
                title: 'Álvarez, H., Elacqua, G., Mendez, C., Munevar, I., Vásquez, D. Hablemos de política educativa en América Latina y el Caribe #8: Colegios privados en tiempos de COVID-19. (2021). Itermaerican Development Bank.',
                text: 'La pandemia ocasionada por el COVID-19 ha afectado considerablemente a las escuelas privadas de América Latina y el Caribe, poniendo en riesgo la continuidad del servicio educativos de millones de estudiantes, ya que muchas escuelas han cerrado o podrían cerrar. Si esto pasa el sistema educativo debe garantizar la absorción de los estudiantes que podrían quedarse sin escuela. En este contexto, proponemos y discutimos alternativas a los gobiernos que van desde fortalecer el sistema público educativo hasta subsidiar la oferta o demanda de colegios privados. La estrategia más adecuada para cada país dependerá de su contexto, y de la ponderación de sus costos y beneficios, pero, sí enfatizamos que es importante que los países actúen de una manera u otra, con el fin de garantizar que los millones de estudiantes de escuelas privadas puedan continuar sus estudios en instituciones de calidad.',
                src: 'https://publications.iadb.org/es/hablemos-de-politica-educativa-en-america-latina-y-el-caribe-8-colegios-privados-en-tiempos-de'
            },
            {
                id: 'policy2',
                title: 'Bertoni, E., Elacqua, G., Mendez, C., Montalva, V., Munevar, I., Olses, A., Roman, A. (2020). Seleccionar y asignar docentes en América Latina y el Caribe: Un camino para la calidad y equidad en educación. Interamerican Development Bank.',
                text: 'Considerando los desafíos que la región enfrenta en seleccionar y asignar los mejores docentes a las escuelas que más los necesitan, en este documento tratamos de responder a dos preguntas fundamentales: ¿cómo identificamos y seleccionamos a los mejores docentes? y ¿cómo los asignamos a las escuelas de una manera eficiente y equitativa? Para responder a estas preguntas recopilamos información sobre la forma en que 12 sistemas de América Latina y el Caribe (ALC) seleccionan y asignan a sus docentes: Barbados, Chile, Colombia, Costa Rica, Ecuador, Honduras, Jamaica, Panamá, Perú, la Ciudad Autónoma de Buenos Aires (CABA - Argentina), la municipalidad de Río de Janeiro (Brasil) y el estado de Pernambuco (Brasil), y destacamos las ventajas de los sistemas que implementan estos procesos de forma centralizada.',
                src: 'https://publications.iadb.org/es/seleccionar-y-asignar-docentes-en-america-latina-y-el-caribe-un-camino-para-la-calidad-y-equidad-en'
            }
        ]
    },
    {
        id: 3,
        publication: 'Work in progress',
        papers: [
            {
                id: 'progress1',
                title: 'Elite universities and top position in the public sector: Evidence from Chile (with Julio Rodriguez)',
                text: '',
                src: ''
            },
            {
                id: 'progress2',
                title: 'Are Catholic Schools the real deal? What about gender differentials?',
                text: '',
                src: ''
            },
            {
                id: 'progress3',
                title: 'Child Care and Academic Performance in the Long Term: Evidence for Colombia. (With Raquel Bernal and Fabio Sanchez)',
                text: '',
                src: ''
            },
            {
                id: 'progress4',
                title: 'The effect of lengthening the school day in the mother´s labor supply. (With Valentina Chegwin & Fabio Sanchez)',
                text: '',
                src: ''
            },
        ]
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
//INFO: list -> pages
//SEE: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
import { mk_params } from '@/lib/fetch-data';
import Contacto from '../contacto/page.jsx';

const URL='https://docs.google.com/spreadsheets/d/e/2PACX-1vQI2LQ18c9dtIJvrzjLdVztkREkycbkT1LF0DSsOyfXox57sUo2SfLtar2uWJ-vLQ/pub?output=csv'
const getParams=  () => [
	{slug: 'cashflows', titulo: 'Finazas, ganar no perder'},
	{slug: 'prueba', titulo: 'funciona!'},
]

/* mk_params(URL, {
	delimiter: ',',
	columns: true,
	skip_empty_lines: true,
	slugCols: 'TÍTULO',
}); */

let d= (await getParams()).filter(r => (r.slug!=''));
export const generateStaticParams= () => d;
export async function generateMetadata({ params }) {
	let este= d.find( r => (r.slug == params.slug) );
	return {
		title: (este ? este['titulo'] : 'Sin Titulo')
	}
}

export default async function Seminario({params}) {
	let este= d.find( r => (r.slug == params.slug) );

	return (
		<div id="wrapper" STYLE="display: flex; min-height: 100vh; flex-direction: column;">

			<section class="hero bg-textura is-fullheight-with-navbar is-black" STYLE="--imagen: url('./static/images/monedas1.jpg');">

				<div class="hero-body">
					<div class="container has-text-centered">
						<div class="column is-6 is-offset-3">
							<h1 class="title"> { este.titulo } </h1>
							<h2 class="subtitle has-text-acento1">
								2hs, encuentro virtual 
							</h2>
							<div class="block">
								¿Estás arriesgando demasiado poco o restringiendo demasiado tus posibilidades? ¿Cómo elegís y planificas tus inversiones para asegurarte que no perdés y maximizas tus chances de ganar? ¿Cómo distribuís tu tiempo y recursos para vivir la vida que querés?	
							</div>
							<a class="button is-acento1 is-outlined" href="#contacto">
								<span class="icon"> <i class="fa fa-book"></i></span>
								<span>Escribinos</span>
							</a>
						</div>
					</div>
				</div>

			</section>



			<main role="main" class="main-content" STYLE="flex: 1;">

				<section class="section content">
				<h1 class="title has-text-centered">¿Cómo es el seminario?</h1>
					<div class="container is-max-desktop has-text-justified">
						<p class="mb-2">
							La persona que enseña te escucha y responde, te va a mostrar
							<ul>
								<li>Para que te sirve, qué podés ganar, qué negocios se pueden hacer.</li>
								<li>Cómo trabaja profesionalmente (herramientas, pasos, etc.)</li>
							<li>Referencias para que sigas investigando y avanzando.</li>
							<li>Cómo hacerlo en tu propio navegador/dispositivo.</li>
							</ul>
						</p>
						<p class="mb-2">
							En vez de pagar cursos muy caros y que por meses no te dan ningún resultado, ganás un panorama para tomar decisiones, herramientas y apoyo para seguir que probablemente sean suficientes para que empieces a construir lo que querés con una inversión muy pequeña de tiempo y dinero.
						</p>
						<p class="mb-2">
							Desarrollamos este formato y contenidos destilando décadas de experiencia en consultoría para directivos, organizando equipos, y experienncia con miles de personas que participan de PodemosAprender. Nos enfocamos en que salgas del seminario pudiendo hacer lo que aprendiste por tu cuenta. Además te damos material de referencia, ejemplos prácticos, código, y seguimos en contacto para ayudarte. A un precio accesible y en sólo dos horas.
						</p>
					</div>
				</section>


				<section class="section">
				<h1 class="title has-text-centered">¿Qué vamos a ver?</h1>
					<div class="container content has-text-justified is-max-desktop">
						<p>En el seminario vas a ver Discounted Cashflows, el método que se usa en finanzas y empresas para comparar y decidir inversiones y balancear portfolios. Te llevás los conceptos y formas de decidir más potentes pero en una planilla facilísima de usar qué no requiere más que saber sumar, restar, multiplicar y dividir para que puedas planificar, comparar rápido tus alternativas y tomar decisiones pensadas y revisadas con los números e hipótesis a la vista.</p>
						<p>Lo mismo te ayudamos a consolidar una visión única de tus finanzas, donde explicites todas tus necesidades, compromisos, prioridades, intereses y decisiones para mantenerlos coordinados y balancear los riesgos y oportunidades.</p>
						<p>También vamos a trabajar sobre datos y eventos importantes de distintas clases de activos como propiedades inmobiliarias, monedas, títulos y plazos fijos ajustados por inflación (UVA, CER), y varios más.</p>
						<p>No se sugiere ninguna inversión, teoría, ni acción en particular. Justamente se propone una forma de hacerte más preguntas y pasar en límpio qué estás decidiendo, con que supuestos, y cuáles podrían ser las consecuencias de modo que definedas tus intereses y no te afecten los de otras personas que casi siempre te son contrarios.</p>
					</div>
				</section>

				<section class="section has-text-centered">
					<h1 class="title">¿Qué dicen las personas que participaron?</h1>
					<div class="container is-max-desktop">
						<figure class="image is-16by9">
							<img src="../../static/images/seminarios_nps.png" alt="Gráfico de barras ¿Qué chances hay de que se lo recomiendes a otras personas? 75% el máximo 'se lo regalaría a personas que quiero', 25% el anterior" />
						</figure>
					</div>
				</section>
				<a name="contacto"/>
				<section class="section">
					<div class="container">
						<div class="columns">
						<div class="column is-half is-offset-one-quarter">
								<Contacto />
							</div>
						</div>
					</div>
				</section>

			</main>
			<footer class="footer has-background-gray">
				<div class="content has-text-centered">
					<p>
						<span>All rights reserved. &copy;
							<a href="https://www.podemosaprender.org">PodemosAprender</a> |
							<a href="https://podemosaprender.org/tos/">Terms of Service</a> |
							<a href="https://podemosaprender.org/privacy/">Privacy Policy</a> |
							<a href="https://podemosaprender.org/contacto/">Contact Us</a>
						</span>
					</p>
				</div>
			</footer>
		</div>
	)
}

'use client'

import { useState, useEffect } from "react";


export default function Contacto() { 
	//XXX:adapted from api1 js to make it work with react {
	const [DBG, setDBG] = useState(false);
	const [MYURL, setMYURL] = useState('');
	const [formSts, setFormSts]= useState('');
	const feedback= (el, sts) => setFormSts(sts);

	useEffect(() => {
		const isLocalHost= window.location.host.startsWith("127.") || window.location.host.startsWith("localhost")
		setDBG(window.DBG_FORM || window.location.hash.includes('o-o-form-debug')); //U: add #o-o-form-debig to the url set DBG_FORM=true before loading this script to enable debugging
		setMYURL(isLocalHost ? window.location.protocol+'//'+window.location.host+'/asform/' : 'https://api1.o-o.fyi/v1/form/asform/');
		DBG && console.log("FORM", {MYURL});
	}, []);

	async function onSubmitImpl(e, feedback) {
		DBG && console.log('FORM onSubmit', e);
		const form_el= e.target;

		feedback(form_el, 'loading')
		const data= new FormData(form_el)
		data.append('o-o-form-dont-redirect', true)

		let res= ''
		try {
			res= await fetch(MYURL, { method: 'POST', body: data} ).then( xres => xres.text() )
			DBG && console.log('FORM SENT', res);
		} catch (ex) {
			DBG && console.log('FORM ERROR', ex);
		}
		feedback(form_el, res=='ok' ? 'ok' : 'error')
		return false;
	}

	function onSubmit(e, feedback) { e.preventDefault(); onSubmitImpl(e, feedback); return false; }
	//XXX:}

	return (
		<div id="wrapper" STYLE="display: flex; min-height: 100vh; flex-direction: column;">
			<div STYLE="height: 5em;"></div>

			<main role="main" className="main-content" STYLE="flex: 1;">

				<div className="is-max-desktop">
					<h1 className="title has-text-centered section-title">
						Escribinos
					</h1>
					<div className="is-multiline">
						<form action="https://api1.o-o.fyi/v1/form/asform" method="POST" className="o-o-form" 
							onSubmit={(e) => onSubmit(e, feedback)}
							>
						<input type="hidden" name="o-o-form-entity" value="contact" />
						<input type="hidden" name="name" value="a_user" />
							<div className="field">
								<label for="id_titulo"  for="id_titulo"  className="label  ">Asunto</label>
								<div className="control ">
									<input type="text" name="subject" maxlength="200" className=" input" required id="id_titulo" />
								</div>
							</div>

							<div className="field">
							<label for="id_texto" className="label  ">Mensaje</label>
								<div className="control ">
									<textarea name="message" cols="40" rows="10" className=" textarea" required id="id_texto">
									</textarea>
								</div>
							</div>

							<div className="columns">
								<div className="column is-6">

									<div className="field">
									<label for="id_de_mail"  for="id_de_mail"  className="label  ">E-mail</label>
										<div className="control ">
											<input type="email" name="email" maxlength="254" className=" input" required id="id_de_mail" />

										</div>
									</div>

								</div>
								<div className="column is-6">

									<div className="field">
									<label for="id_de_cel"  for="id_de_cel"  className="label  ">Teléfono</label>
										<div className="control ">
											<input type="tel" name="de_cel" maxlength="128" className=" input" id="id_de_cel" />

										</div>
									</div>

								</div>
							</div>

							<div className="has-text-centered my-1">
								This site is protected by reCAPTCHA and the Google
								<a href="https://policies.google.com/privacy">Privacy Policy</a> and
								<a href="https://policies.google.com/terms">Terms of Service</a> apply.
							</div>
							<div className="field">
								<div className="control ">
									<button className="button is-fullwidth button-dark">
										Enviar&nbsp;&nbsp;
										<i className="fas fa-paper-plane"></i>
									</button>
									{ 
										formSts=='loading' ? <div className="loading">Loading</div> :
										formSts=='error' ? <div className="error-message">An error ocurred, please retry.</div> :
										formSts=='ok' ? <div className="sent-message">Your message has been sent. Thank you!</div> :
										''
									}
								</div>
							</div>

						</form>
					</div>
				</div>

			</main>
		</div>
) }

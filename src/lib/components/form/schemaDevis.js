import * as yup from 'yup';
const phoneRegExp = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/
const gpsregExpr = /^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/
// --------------------------------------------
export default yup.object().shape({
	prenom: yup.
		string().
		required('Merci de saisir votre prénom.'),

	nom: yup.
		string().
		required('Merci de saisir votre nom.'),

	type: yup.
		string().
		required('Choisissez une option svp.'),

	superficie: yup.
		string().
		required('Choisissez une superficie svp.'),

	nbrTaupes: yup.
		string().
		required('Choisissez un nombre de taupinières.'),

	typeTerrain: yup.
		string().
		required('Choisissez un type de terrain.'),

	telephone: yup.
		string().
		required('Merci d’indiquer votre téléphone.')
		.matches(phoneRegExp, 'Numéro invalide.'),

	_replyto: yup.
		string().
		required('Merci de saisir votre email.').
		email('Veuillez saisir un email valide.'),

	_subject: yup.
		string().
		required('Merci de saisir l\'objet de votre message.'),

	adresse1: yup.
		string().
		required('Merci de saisir votre adresse.'),

	ville: yup.
		string().
		required('Merci de saisir votre commune.'),

	gps: yup.
		string().
		matches(gpsregExpr, 'GPS invalide.'),

	codePostal: yup.
		string().
		required('Indiquez le code postal svp.').
		min(5, "Le code postal doit comporter 5 caractères.").
		max(5, "Le code postal doit comporter 5 caractères.")
});


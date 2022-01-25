import * as yup from 'yup';
const phoneRegExp = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/


// --------------------------------------------
export default yup.object().shape({
	prenom: yup.
		string().
		required('Merci de saisir votre prénom.'),

	nom: yup.
		string().
		required('Merci de saisir votre nom.'),

	_replyto: yup.
		string().
		email('Veuillez saisir un email valide.').
		required('Merci de saisir votre email.'),

	_subject: yup.
		string().
		required('Merci de saisir l\'objet de votre message.'),

	message: yup.
		string().
		required('Merci d’indiquer votre message.'),

	telephone: yup.
		string().
		required('Merci d’indiquer votre téléphone.')
		.matches(phoneRegExp, 'Numéro invalide.'),
});
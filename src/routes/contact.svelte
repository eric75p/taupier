<!-- ---------------- script --------------- -->
<script context="module">
	import ContactForm from "$lib/components/form/ContactForm.svelte";
</script>

<!-- ---------------- markup --------------- -->
<svelte:head>
	<title>Taupier du Sud • Contact</title>
</svelte:head>

<article class="p-2">
	<h1>Taupier du Sud • Contact</h1>
	<br />

	<p>Contactez Taupier du Sud !</p>

	<p>
		Taupier du Sud expert anti-taupes est à votre service en Région
		<b>Occitanie</b>, Tarn 81, Haute-Garonne 31, Tarn-et-Garonne 82, Lot-et-Garonne
		47, Gers 32, Hérault 34, Hautes-Pyrénées 65, Pyrénées Orientales 66,
		Aude 11, Landes 40, Pyrénées atlantiques 64, Aveyron 12, Ariège 09.
	</p>
	Albi, Carmaux, Castres, Toulouse, Montauban, Auch, Agen, Montpellier, Tarbes,
	Perpignan, Carcassonne, Mont-de-Marsan, Pau, Biarritz, Rodez, Foix…
	<p />

	<img
	src="/img/carte.png"
	alt="Carte d'Occitanie"
	class="img-fluid max-width: 50% height:auto p-3"
/>

	<p>
		Les taupes et leurs taupinières dévastent votre jardin, pelouse et espaces
		verts. Ne les laisser pas proliférer et détruire sans réagir. Redonner
		vie à vos espaces et cultures.
	</p>

	Remplissez le formulaire ci-dessous et nous vous contacterons le plus
	rapidement possible.

	<ContactForm />
</article>

<!-- ---------------- style --------------- -->
<style>
	p {
		margin-top: 0px;
		margin-bottom: 10px;
	}

	article {
		grid-area: trois;
		display: flex;
		flex-direction: column;
		align-items: left;
		flex: 1;
		margin-top: 15px;
	}
</style>

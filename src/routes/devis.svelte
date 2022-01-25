<!-- ---------------- script --------------- -->
<script>
	import DevisForm from "$lib/components/form/DevisForm.svelte";
</script>

<!-- ---------------- markup --------------- -->
<svelte:head>
	<title>Taupier du Sud • Demande de devis</title>
</svelte:head>

<article class="p-2">
	<h1>Demande de devis</h1>
	<br />
	<p>
		Interventions ponctuelles ou forfaitaires, rapide pour un résultat
		assuré.
	</p>

	<p>Tarif évolutif suivant :</p>
	<ul>
		<li>Le forfait choisi ;</li>
		<li>La distance pour se rendre sur la zone ;</li>
		<li>La superficie à piéger, son environnement et sa configuration ;</li>
		<li>Prestation ponctuelle ou contrat annuel.</li>
	</ul>

	<p>La taupe est active en toutes saisons et se piège toute l’année.</p>

	<p>
		La demande de devis est gratuite et sans obligation. Pour obtenir votre
		devis, remplissez le formulaire ci-dessous et je vous contacterai le
		plus rapidement possible afin d’éradiquer et de vous débarrasser des
		taupes et taupinières qui envahissent votre terrain.
	</p>
	<DevisForm />
</article>

<!-- ---------------- style --------------- -->
<style>
	article {
		grid-area: trois;
		display: flex;
		flex-direction: column;
		align-items: left;
		flex: 1;
		margin-top: 15px;
	}
</style>

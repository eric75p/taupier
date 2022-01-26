<!-- ---------------- script --------------- -->
<script context="module">
	export const prerender = true;
	import { Button } from "sveltestrap";
	import { goto } from "$app/navigation";
</script>

<!-- <script>
const { goto }=require("$app/navigation");

</script> -->

<!-- ---------------- markup --------------- -->
<svelte:head>
	<title>Artisan taupier écologique</title>
</svelte:head>

<article class="p-2">
	<h1>Artisan taupier écologique</h1>
	<br />
	<img
		src="/img/taupe.png"
		alt="Fabrique de pièges à taupes"
		class="img-fluid max-width: 50% height:auto"
	/><br /><br />
	<p>
		Taupier professionnel indépendant de toute marque ou franchise, piégeur
		de taupes et rats taupiers (campagnols).
	</p>
	<p>
		Artisan taupier écologique spécialiste du piégeage traditionnel,
		j’utilise uniquement des pièges mécaniques putange (pinces en métal
		rouillé) fabriqués en France, ceux dits à « l’ancienne ». Ces pièges
		sont les plus efficaces, plus respectueux de l’environnement et
		permettent de rendre compte du travail effectué.
	</p>
	<p>
		<img
			src="/img/putanges.png"
			alt="Fabrique de pièges à taupes"
			class="img-fluid max-width: 50% height:auto"
		/>
	</p>
	<p>
		Seul un taupier et piégeur professionnel qui connaît bien l’animal et
		ses habitudes, par son repérage du terrain, son analyse, son expérience
		et sa dextérité vous garantira un résultat efficace et durable.
	</p>
	<p class="bio">
		Service de détaupisation (détaupinage) <span
			style="font-weight: bold; color:green">100% écologique</span
		>, c’est la seule pratique reconnue dans l’agriculture bio, respectueux
		de l’environnement, elle ne détruit pas la vie du sol, et est sans
		danger pour votre potager, les enfants et les animaux domestiques ou
		non.
	</p>
	<p>
		Aucune utilisation de produit chimique, ni gaz type PH3, de procédés
		pyrotechniques, de produits toxiques (poison) ou autres procédés
		dangereux, c’est la seule solution réellement performante car elle
		permet de constater son efficacité en visualisant les prises.
	</p>
	<p class="text-center">
		INTERVIENT SUR DEMANDE POUR LES MAIRIES <br />COLLECTIVITES -
		ENTREPRISES - PARTICULIERS
	</p>
	<p>
		Intervention de piégeage sur toutes superficies : gazon, pelouse,
		espaces verts, terres agricoles, parc de château, gîtes, terrain de
		sport, camping, green golf, hippodrome, haras, centre équestre, prairie,
		semis de printemps ou d’hiver…
	</p>
	<p>
		Interventions ponctuelles ou forfaitaires, rapide pour un résultat
		assuré. La solution pour une pelouse impeccable !
	</p>

	<p>Tarif évolutif suivant :</p>
	<ul>
		<li>Le forfait choisi ;</li>
		<li>La distance pour se rendre sur la zone ;</li>
		<li>La superficie à piéger, son environnement et sa configuration ;</li>
		<li>Prestation ponctuelle ou contrat annuel.</li>
	</ul>

	<p>
		La taupe est un animal sauvage se nourrissant toutes les quatre heures à
		raison de six fois par jour, elle ne dispose pas de réserves graisseuses
		et elle est par ailleurs incapable d'hiberner, elle est donc active en
		toutes saisons.
	</p>

	<p>
		La régulation peut être faite toute l’année, à l’exception des périodes
		de grands froids durant lesquelles la terre est gelée. Il est essentiel
		d'intervenir rapidement afin d'éviter qu'elle ne crée davantage de
		taupinières et ne saccage votre terrain.
		<img
			src="/img/taupinieres.jpg"
			alt="Taupinières"
			class="img-fluid max-width: 50% height:auto p-1"
		/>
	</p>

	<p>La détaupisation écologique se déroule en deux interventions :</p>

	<ol>
		<li>
			PIÉGEAGE. Repérage et analyse de votre terrain. Placement des pièges
			mécaniques putange sur les galeries principales et secondaires.
			Balisage des emplacements piégés. Nettoyage du terrain;
		</li>

		<li>
			DÉPIÉGEAGE. Relevage des pièges et des prises quelques jours plus
			tard (il faut compter entre deux jours et une semaine suivant
			l’environnement du lieu).
		</li>
	</ol>
	<hr />
	<div class="ps-3">
		N’hésitez pas à remplir le formulaire de
		<Button
			color="warning"
			class="m-2"
			size="sm"
			on:click={() => {
				goto("/devis");
			}}
		>
			DEVIS GRATUIT
		</Button>
	</div>
</article>

<!-- ---------------- style --------------- -->
<style>
	p {
		margin-bottom: 10px;
	}

	article {
		margin-top: 15px;
		grid-area: trois;
	}

	.bio {
		border: solid green;
		padding: 5px;
	}
</style>

<!-- ---------------- script --------------- -->
<script>
	import NavBar from "$lib/components/NavBar.svelte";
	import Left from "$lib/components/Left.svelte";
	import Right from "$lib/components/Right.svelte";
	import Footer from "$lib/components/Footer.svelte";
	//
	import "../app.css";
</script>

<!-- ---------------- markup --------------- -->
<svelte:head>

	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	/>
</svelte:head>

<div id="conteneur">
	<NavBar />
	<Left />
	<slot />
	<Right />
	<Footer />
</div>


<!-- ---------------- style --------------- -->
<style>
	#conteneur {
		display: grid;
		grid-template-areas:
			"un"
			"trois"
			"deux"
			"quatre"
			"cinq";
		gap: 5px;
		width: 100%;
		padding: 5px;
	}

	/* Tablet */
	@media only screen and (min-width: 768px) {
		#conteneur {
			max-width: 1050px;
			display: grid;
			grid-template-columns: 200px 1fr;
			grid-template-rows: 80px 1fr 250px 70px;
			gap: 5px;
			grid-template-areas:
				"un un"
				"deux trois"
				"quatre quatre"
				"cinq cinq";
			width: 100%;
		}
	}

	/* Large Screen */
	@media only screen and (min-width: 1024px) {
		#conteneur {
			display: grid;
			grid-template-columns: 200px 0.8fr 150px;
			grid-template-rows: 80px 1fr 1fr;
			grid-template-areas:
				"un un un"
				"deux trois quatre"
				"cinq cinq cinq";
			min-width: 80%;
			gap: 5px;
			margin: auto;
		}
	}
</style>

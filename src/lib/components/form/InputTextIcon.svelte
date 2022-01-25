<!-- ---------- script ------------- -->
<script>
	import Errors from "./Errors.svelte";
	//
	export let label;
	export let value;
	export let name;
	export let validate;
	//
	export let placeholder="";
	export let errors = undefined;
	export let icon = ""
</script>

<!-- ---------- markup ------------- -->
<svelte:head>
	<link
		href="https://fonts.googleapis.com/icon?family=Material+Icons"
		rel="stylesheet"
	/>
</svelte:head>
<!-- -->
<div class="form-group m-2">
	<label for={name} class="form-label text-dark">{label}</label>
	<div class="input-group">
		<input
			class="form-control"
			type="tel"
			pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"
			{name}
			{placeholder}
			class:invalid={errors[`${name}`]}
			bind:value
			on:blur={() => validate(`${name}`)}
		/><span class="input-group-text">{icon}</span>
	</div>
	<Errors {errors} path={name} />
</div>

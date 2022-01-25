<!-- ---------- script ------------- -->
<script>
	import Errors from "./Errors.svelte";
	//
	export let label;
	export let value;
	export let name;
	export let validate;
	export let rows=5;
	export let cols=40;
	//
	export let placeholder = "";
	export let errors = undefined;
</script>

<!-- ---------- markup ------------- -->
<div class="form-group m-2">
	<label for={name} class="form-label text-dark">{label}</label>
	<textarea
		type="text"
		class="form-control"
		{rows} {cols}
		{name}
		{placeholder}
		class:invalid={errors[`${name}`]}
		bind:value
		on:blur={() => validate(`${name}`)}
	/>
	<Errors {errors} path={name} />
</div>

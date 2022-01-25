<!-- ---------- script ------------- -->
<script>
	import Errors from "./Errors.svelte";
	//
	export let label;
	export let value;
	export let name;
	export let validate;
	//
	export let placeholder = "";
	export let errors = undefined;
</script>

<!-- ---------- markup ------------- -->
<div class="form-group m-2">
	<label for={name} class="form-label text-dark">{label}</label>
	<input
		type="text"
		class="form-control"
		{name}
		{placeholder}
		class:invalid={errors[`${name}`]}
		bind:value
		on:blur={() => validate(`${name}`)}
	/>
	<Errors {errors} path={name} />
</div>

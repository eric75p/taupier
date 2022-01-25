<!-- ---------- script ------------- -->
<script>
	import Errors from "./Errors.svelte";
	//
	export let label;
	export let value;
	export let name = "email";
	export let validate;
	//
	export let placeholder = "nom@compagnie.com";
	export let errors = undefined;
</script>

<!-- ---------- markup ------------- -->
<div class="form-group m-2">
	<label for={name} class="form-label text-dark">{label}</label>
	<div class="input-group">
		<input
			class="form-control"
			type="email"
			{name}
			{placeholder}
			class:invalid={errors[`${name}`]}
			bind:value
			on:blur={() => validate(`${name}`)}
		/> <span class="input-group-text">@</span>
	</div>
	<Errors {errors} path={name} />
</div>

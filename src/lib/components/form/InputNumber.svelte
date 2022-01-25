<!-- ---------- script ------------- -->
<script>
	import Errors from "./Errors.svelte";
	//
	export let label;
	export let value;
	export let name;
	export let min;
	export let max;
	export let validate;
	//
	export let placeholder = "";
	export let errors = undefined;
	export let sticker = undefined;
</script>

<!-- ---------- markup ------------- -->
<div class="m-2">
	<label for={name} class="form-label text-dark">{label}</label>
	<div class="input-group">
		<input
			class="form-control"
			type="number"
			{name}
			{placeholder}
			bind:value
			{min}
			{max}
			class:invalid={errors[`${name}`]}
			on:blur={() => validate(`${name}`)}
		/>
		{#if sticker}
			<span class="input-group-text">{sticker}</span>
		{/if}
	</div>
	<Errors {errors} path={name} />
</div>


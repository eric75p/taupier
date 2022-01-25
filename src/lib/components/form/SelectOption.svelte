<!-- ---------- script ------------- -->
<script>
	import Errors from "./Errors.svelte";
	export let label;
	export let value;  // bind
	export let name;
	export let validate;
	export let values; // [{label: "Anglais", value: "english"}]
	//
	export let errors = undefined;
</script>

<!-- ---------- markup ------------- -->
<div class="form-group m-2">
	<label for={name} class="form-label text-dark"> {label}</label>

	<select
			{name}
			class:invalid={errors[`${name}`]}
			bind:value
			on:change={() => validate(`${name}`)}
			class="form-select"
			>
		<option value={name} />
		{#each values as value}
			<option value={value.value}>{value.label}</option>
		{/each}
	</select>

	<Errors {errors} path={name} />
</div>


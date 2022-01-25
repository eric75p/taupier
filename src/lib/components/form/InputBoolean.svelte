<!-- ---------- script ------------- -->
<script>
	import Errors from "./Errors.svelte";
	//
	export let label;
	export let name;
	export let value;
	export let validate;
	//
	export let errors = undefined;
</script>

<!-- ---------- markup ------------- -->
<div class="form-check m-2">
	<label class="form-check-label text-dark ms-2">
		<input
			type="checkbox"
			class="form-check-input"
			{name}
			class:invalid={errors.acceptTos}
			bind:checked={value}
			on:change={() => validate(`${name}`)}
		/>		&nbsp;{label}
	</label>
	<Errors {errors} path={name} />
</div>

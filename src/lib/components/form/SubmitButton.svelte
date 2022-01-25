<!-- ---------- script ------------- -->
<script>
	export let label = "Submit";
	export let onClick;
	let button;

	const disable = function () {
		console.log(button);
		//button.disabled = true;
	};
	disable();
</script>

<!-- ---------- markup ------------- -->
<button
	class="btn btn-primary"
	type="button"
	on:click={onClick}
	bind:this={button}
>
	{label}
</button>

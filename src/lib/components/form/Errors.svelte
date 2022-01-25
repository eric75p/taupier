<!-- ---------- script ------------- -->
<script>
	export let errors = {};
	// The name of the form state property we want to show errors for
	export let path = undefined;
</script>

<!-- ---------- markup ------------- -->
{#if errors[path]}
	<div class="mt-2">
		<ul>
			{#each errors[path] as message}
				<div class="text-danger">{message}</div>
			{/each}
		</ul>
	</div>
{/if}

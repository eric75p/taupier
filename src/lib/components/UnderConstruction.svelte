<!-- ---------------- script --------------- -->
<script lang="ts">
	import { Collapse, Button, Card } from "sveltestrap";
  export let label = "Label du bouton"
	let isOpen = false;
</script>

<!-- ---------------- markup --------------- -->
<Button color="success" on:click={() => (isOpen = !isOpen)} class="mb-3">
  {label}
</Button>
<Collapse {isOpen}>
  <Card body>
    <slot></slot>
  </Card>
</Collapse>

<!-- ---------------- style --------------- -->
<style>
 


</style>

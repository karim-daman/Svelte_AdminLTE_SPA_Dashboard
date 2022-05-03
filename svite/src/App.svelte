<script>
	import Router from "svelte-spa-router"
	import Index from "./pages/index.svelte";

	const routes = {
		"/": Index
	}
</script>

<Router {routes} />

import Contact from "./pages/contact.svelte";
import NotFound from "./pages/NotFound.svelte"
import Dashboard from "./pages/Dashboard.svelte"

// import NotFound from './components/NotFound.svelte';
// import Dashboard from "./components/Dashboard.svelte"

export default {
    '/': Dashboard,
    "/Contact": Contact,
    // "/Dashboard" : Dashboard,



    

    // The catch-all route must always be last
    '*': NotFound
};

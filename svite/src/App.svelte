<!-- //   <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
//   <link rel="stylesheet" href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
//   <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
//   <link rel="stylesheet" href="plugins/jqvmap/jqvmap.min.css">
//   <link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
//   <link rel="stylesheet" href="plugins/daterangepicker/daterangepicker.css">
//   <link rel="stylesheet" href="plugins/summernote/summernote-bs4.min.css">
// 	<script src="plugins/jquery/jquery.min.js"></script>
// 	<script src="plugins/jquery-ui/jquery-ui.min.js"></script>
// 	<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
// 	<script src="plugins/chart.js/Chart.min.js"></script>
// 	<script src="plugins/sparklines/sparkline.js"></script>
// 	<script src="plugins/jqvmap/jquery.vmap.min.js"></script>
// 	<script src="plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
// 	<script src="plugins/jquery-knob/jquery.knob.min.js"></script>
// 	<script src="plugins/moment/moment.min.js"></script>
// 	<script src="plugins/daterangepicker/daterangepicker.js"></script>
// 	<script src="plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
// 	<script src="plugins/summernote/summernote-bs4.min.js"></script>
// 	<script src="plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
// 	<script src="dist/js/demo.js"></script>
// 	<script src="dist/js/pages/dashboard.js"></script>

DONE // <script src="dist/js/adminlte.js"></script>
DONE // <link rel="stylesheet" href="dist/css/adminlte.min.css">
-->
<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";

  import "admin-lte/dist/js/adminlte.min.js";
  import "admin-lte/dist/css/adminlte.min.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import "overlayScrollbars/css/OverlayScrollbars.min.css";
  import "overlayScrollbars/js/jquery.overlayScrollbars.min.js";

  import Navbar from "$lib/components/Navbar.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="wrapper">
  <!-- Preloader -->
  <div class="preloader flex-column justify-content-center align-items-center">
    <img class="animation__shake" src="/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60" />
  </div>

  <Navbar />
  <Sidebar />

  <div class="content-wrapper">
    <main>
      <Router {routes} />
    </main>
  </div>
  <Footer />

  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
</div>

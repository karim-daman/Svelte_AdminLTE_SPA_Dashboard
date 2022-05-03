<script>
  import "admin-lte/dist/js/adminlte.min.js";
  import "admin-lte/dist/css/adminlte.min.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import Dashboard from "./Dashboard.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="wrapper">
  <!-- Preloader -->
  <!-- <div class="preloader flex-column justify-content-center align-items-center">
    <img class="animation__shake" src="/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60" />
  </div> -->

  <Navbar />
  <Sidebar />

  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Dashboard</h1>
          </div>
          <!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active">Dashboard v1</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <Dashboard />
  </div>
  <Footer />

  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
</div>

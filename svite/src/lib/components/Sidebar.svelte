<script>
  import { link } from "svelte-spa-router";

  let DashboardToggle = true;
  let ChartsToggle = true;
  let UIToggle = true;
  let FormToggle = true;
  let TableToggle = true;
  let MailBoxToggle = true;
  let ExampleToggle = true;
  let ExtraToggle = true;
  let SearchToggle = true;

  function handleDashboardToggle() {
    DashboardToggle = !DashboardToggle;
  }
  function handleChartsToggle() {
    ChartsToggle = !ChartsToggle;
  }
  function handleUIToggle() {
    UIToggle = !UIToggle;
  }
  function handleFormToggle() {
    FormToggle = !FormToggle;
  }
  function handleTableToggle() {
    TableToggle = !TableToggle;
  }
  function handleMailBoxToggle() {
    MailBoxToggle = !MailBoxToggle;
  }
  function handleExampleToggle() {
    ExampleToggle = !ExampleToggle;
  }
  function handleExtraToggle() {
    ExtraToggle = !ExtraToggle;
  }
  function handleSearchToggle() {
    SearchToggle = !SearchToggle;
  }
</script>

<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="index3.html" class="brand-link">
    <img src="/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8" />
    <span class="brand-text font-weight-light">AdminLTE 3</span>
  </a>

  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar user panel (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <img src="/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
      </div>
      <div class="info">
        <a href="#" class="d-block">Alexander Pierce</a>
      </div>
    </div>

    <!-- SidebarSearch Form -->
    <div class="form-inline">
      <div class="input-group" data-widget="sidebar-search">
        <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div class="input-group-append">
          <button class="btn btn-sidebar">
            <i class="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>

    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
        <li class="nav-item">
          <a href="#" class={!DashboardToggle ? "nav-link active" : "nav-link"} on:click={handleDashboardToggle}>
            <i class="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
              <i class="right fas fa-angle-left" />
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="/" class="nav-link active">
                <i class="far fa-circle nav-icon" />
                <p>Dashboard v1</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Dashboard v2</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="/" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Dashboard v3</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#/Widgets" class="nav-link">
            <i class="nav-icon fas fa-th" />
            <p>
              Widgets
              <span class="right badge badge-danger">New</span>
            </p>
          </a>
        </li>
        <!-- <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-copy" />
            <p>
              Layout Options
              <i class="fas fa-angle-left right" />
              <span class="badge badge-info right">6</span>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="#/Top_nav" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Top Navigation</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Top_nav_sidebar" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Top Navigation + Sidebar</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Boxed" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Boxed</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Fixed_sidebar" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Fixed Sidebar</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Fixed_sidebar_custom" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>
                  Fixed Sidebar <small>+ Custom Area</small>
                </p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Fixed_topnav" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Fixed Navbar</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Fixed_footer" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Fixed Footer</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Collapsed_sidebar" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Collapsed Sidebar</p>
              </a>
            </li>
          </ul>
        </li> -->

        <li class="nav-item">
          <a href="#" class={!ChartsToggle ? "nav-link active" : "nav-link"} on:click={handleChartsToggle}>
            <i class="nav-icon fas fa-chart-pie" />
            <p>
              Charts
              <i class="right fas fa-angle-left" />
            </p>
          </a>

          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="#/Chart" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>ChartJS</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Flot" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Flot</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Inline" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Inline</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Uplot" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>uPlot</p>
              </a>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <a href="#" class={!UIToggle ? "nav-link active" : "nav-link"} on:click={handleUIToggle}>
            <i class="nav-icon fas fa-tree" />
            <p>
              UI Elements
              <i class="fas fa-angle-left right" />
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="#/General" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>General</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Icons" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Icons</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Buttons" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Buttons</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Slider" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Sliders</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Modals" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Modals & Alerts</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Navbar" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Navbar & Tabs</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Timeline" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Timeline</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Ribbons" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Ribbons</p>
              </a>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <a href="#" class={!FormToggle ? "nav-link active" : "nav-link"} on:click={handleFormToggle}>
            <i class="nav-icon fas fa-edit" />
            <p>
              Forms
              <i class="fas fa-angle-left right" />
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="#/GeneralForm" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>General Elements</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Advanced" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Advanced Elements</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Editors" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Editors</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Validation" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Validation</p>
              </a>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <a href="#" class={!TableToggle ? "nav-link active" : "nav-link"} on:click={handleTableToggle}>
            <i class="nav-icon fas fa-table" />
            <p>
              Tables
              <i class="fas fa-angle-left right" />
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="#/SimpleTable" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Simple Tables</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Data" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>DataTables</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/JsGrid" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>jsGrid</p>
              </a>
            </li>
          </ul>
        </li>

        <li class="nav-header">EXAMPLES</li>
        <li class="nav-item">
          <a href="#/Calender" class="nav-link">
            <i class="nav-icon far fa-calendar-alt" />
            <p>
              Calendar
              <span class="badge badge-info right">2</span>
            </p>
          </a>
        </li>

        <li class="nav-item">
          <a href="#/Gallary" class="nav-link">
            <i class="nav-icon far fa-image" />
            <p>Gallery</p>
          </a>
        </li>

        <li class="nav-item">
          <a href="#/Kanban" class="nav-link">
            <i class="nav-icon fas fa-columns" />
            <p>Kanban Board</p>
          </a>
        </li>

        <li class="nav-item">
          <a href="#" class={!MailBoxToggle ? "nav-link active" : "nav-link"} on:click={handleMailBoxToggle}>
            <i class="nav-icon far fa-envelope" />
            <p>
              Mailbox
              <i class="fas fa-angle-left right" />
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="#/MailBox" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Inbox</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Compose" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Compose</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/ReadMail" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Read</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class={!ExampleToggle ? "nav-link active" : "nav-link"} on:click={handleExampleToggle}>
            <i class="nav-icon fas fa-book" />
            <p>
              Pages
              <i class="fas fa-angle-left right" />
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="#/Invoice" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Invoice</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Profile" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Profile</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/ECommerce" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>E-commerce</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Projects" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Projects</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/ProjectAdd" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Project Add</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/ProjectEdit" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Project Edit</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/ProjectDetail" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Project Detail</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Contacts" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Contacts</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Faq" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>FAQ</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/ContactUs" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Contact us</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class={!ExtraToggle ? "nav-link active" : "nav-link"} on:click={handleExtraToggle}>
            <i class="nav-icon far fa-plus-square" />
            <p>
              Extras
              <i class="fas fa-angle-left right" />
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="#" class={!SearchToggle ? "nav-link active" : "nav-link"} on:click={handleSearchToggle}>
                <i class="far fa-circle nav-icon" />
                <p>
                  Login & Register v1
                  <i class="fas fa-angle-left right" />
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="#/Login" class="nav-link">
                    <i class="far fa-circle nav-icon" />
                    <p>Login v1</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#/Register" class="nav-link">
                    <i class="far fa-circle nav-icon" />
                    <p>Register v1</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#/ForgotPassword" class="nav-link">
                    <i class="far fa-circle nav-icon" />
                    <p>Forgot Password v1</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#/RecoverPassword" class="nav-link">
                    <i class="far fa-circle nav-icon" />
                    <p>Recover Password v1</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>
                  Login & Register v2
                  <i class="fas fa-angle-left right" />
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="#/Login_v2" class="nav-link">
                    <i class="far fa-circle nav-icon" />
                    <p>Login v2</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#/Register_v2" class="nav-link">
                    <i class="far fa-circle nav-icon" />
                    <p>Register v2</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#/ForgotPassword_v2" class="nav-link">
                    <i class="far fa-circle nav-icon" />
                    <p>Forgot Password v2</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#/RecoverPassword_v2" class="nav-link">
                    <i class="far fa-circle nav-icon" />
                    <p>Recover Password v2</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#/LockScreen" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Lockscreen</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/LegacyUserMenu" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Legacy User Menu</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/LanguageMenu" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Language Menu</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Notfound" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Error 404</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/ServerError" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Error 500</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Pace" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Pace</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Blank" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Blank Page</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#/Starter" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Starter Page</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-search" />
            <p>
              Search
              <i class="fas fa-angle-left right" />
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="pages/search/simple.html" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Simple Search</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="pages/search/enhanced.html" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Enhanced</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-header">MISCELLANEOUS</li>
        <li class="nav-item">
          <a href="iframe.html" class="nav-link">
            <i class="nav-icon fas fa-ellipsis-h" />
            <p>Tabbed IFrame Plugin</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="https://adminlte.io/docs/3.1/" class="nav-link">
            <i class="nav-icon fas fa-file" />
            <p>Documentation</p>
          </a>
        </li>
        <li class="nav-header">MULTI LEVEL EXAMPLE</li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="fas fa-circle nav-icon" />
            <p>Level 1</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-circle" />
            <p>
              Level 1
              <i class="right fas fa-angle-left" />
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Level 2</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>
                  Level 2
                  <i class="right fas fa-angle-left" />
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <i class="far fa-dot-circle nav-icon" />
                    <p>Level 3</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <i class="far fa-dot-circle nav-icon" />
                    <p>Level 3</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    <i class="far fa-dot-circle nav-icon" />
                    <p>Level 3</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="far fa-circle nav-icon" />
                <p>Level 2</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="fas fa-circle nav-icon" />
            <p>Level 1</p>
          </a>
        </li>
        <li class="nav-header">LABELS</li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon far fa-circle text-danger" />
            <p class="text">Important</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon far fa-circle text-warning" />
            <p>Warning</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="nav-icon far fa-circle text-info" />
            <p>Informational</p>
          </a>
        </li>
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>

<!-- Modal -->
<div class="modal fade bd-example-modal-sm" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
    <!-- <div class="modal-content"> -->

    <div class="modal-content">
      <div class="card-body">
        <h4 class="mb-4">Sign in</h4>
        <form>
          <div class="input-group mb-3"><span class="input-group-text"> <i class="fa fa-user" /> </span> <input type="text" class="form-control" placeholder="Username" /></div>
          <div class="input-group mb-3">
            <span class="input-group-text"> <i class="fa fa-lock" /> </span> <input type="text" class="form-control" placeholder="Password" />
            <button type="button" class="btn btn-light"> <i class="text-muted fa fa-eye" /> </button>
          </div>

          <div class="d-flex mb-3">
            <label class="form-check me-auto"> <input class="form-check-input" type="checkbox" value="" /> <span class="form-check-label"> Remember </span> </label>
            <a href="#" class="text-decoration-none">Forgot password</a>
          </div>
          <button class="btn btn-primary w-100" type="button"> Sign in </button>
          <p class="text-divider my-4">or access via</p>

          <div class="d-flex gap-2">
            <a href="#" class="d-flex align-items-center btn btn-light w-100">
              <img class="me-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/icons/social/facebook.svg" height="20" width="20" /> Facebook
            </a>
            <a href="#" class="d-flex align-items-center btn btn-light w-100">
              <img class="me-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/icons/social/google.svg" height="20" width="20" /> Google
            </a>
          </div>

          <p class="mb-0 mt-4 text-center">Don’t have an account? <a href="#">Sign Up</a></p>
        </form>
      </div>
    </div>

    <!-- </div> -->
  </div>
</div>

<nav class="main-header navbar navbar-expand navbar-white navbar-light">
  <!-- Left navbar links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars" /></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="#/" class="nav-link">Dashboard</a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="#/Site" class="nav-link">Site</a>
    </li>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm"> Sign-in icon </button>
  </ul>

  <!-- Right navbar links -->
  <ul class="navbar-nav ml-auto">
    <!-- Navbar Search -->
    <li class="nav-item">
      <a class="nav-link" data-widget="navbar-search" href="#" role="button">
        <i class="fas fa-search" />
      </a>
      <div class="navbar-search-block">
        <form class="form-inline">
          <div class="input-group input-group-sm">
            <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div class="input-group-append">
              <button class="btn btn-navbar" type="submit">
                <i class="fas fa-search" />
              </button>
              <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                <i class="fas fa-times" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>

    <!-- Messages Dropdown Menu -->
    <li class="nav-item dropdown">
      <a class="nav-link" data-toggle="dropdown" href="#">
        <i class="far fa-comments" />
        <span class="badge badge-danger navbar-badge">3</span>
      </a>
      <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <a href="#" class="dropdown-item">
          <!-- Message Start -->
          <div class="media">
            <img src="/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle" />
            <div class="media-body">
              <h3 class="dropdown-item-title">
                Brad Diesel
                <span class="float-right text-sm text-danger"><i class="fas fa-star" /></span>
              </h3>
              <p class="text-sm">Call me whenever you can...</p>
              <p class="text-sm text-muted">
                <i class="far fa-clock mr-1" /> 4 Hours Ago
              </p>
            </div>
          </div>
          <!-- Message End -->
        </a>
        <div class="dropdown-divider" />
        <a href="#" class="dropdown-item">
          <!-- Message Start -->
          <div class="media">
            <img src="/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
            <div class="media-body">
              <h3 class="dropdown-item-title">
                John Pierce
                <span class="float-right text-sm text-muted"><i class="fas fa-star" /></span>
              </h3>
              <p class="text-sm">I got your message bro</p>
              <p class="text-sm text-muted">
                <i class="far fa-clock mr-1" /> 4 Hours Ago
              </p>
            </div>
          </div>
          <!-- Message End -->
        </a>
        <div class="dropdown-divider" />
        <a href="#" class="dropdown-item">
          <!-- Message Start -->
          <div class="media">
            <img src="/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
            <div class="media-body">
              <h3 class="dropdown-item-title">
                Nora Silvester
                <span class="float-right text-sm text-warning"><i class="fas fa-star" /></span>
              </h3>
              <p class="text-sm">The subject goes here</p>
              <p class="text-sm text-muted">
                <i class="far fa-clock mr-1" /> 4 Hours Ago
              </p>
            </div>
          </div>
          <!-- Message End -->
        </a>
        <div class="dropdown-divider" />
        <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
      </div>
    </li>
    <!-- Notifications Dropdown Menu -->
    <li class="nav-item dropdown">
      <a class="nav-link" data-toggle="dropdown" href="#">
        <i class="far fa-bell" />
        <span class="badge badge-warning navbar-badge">15</span>
      </a>
      <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <span class="dropdown-item dropdown-header">15 Notifications</span>
        <div class="dropdown-divider" />
        <a href="#" class="dropdown-item">
          <i class="fas fa-envelope mr-2" /> 4 new messages
          <span class="float-right text-muted text-sm">3 mins</span>
        </a>
        <div class="dropdown-divider" />
        <a href="#" class="dropdown-item">
          <i class="fas fa-users mr-2" /> 8 friend requests
          <span class="float-right text-muted text-sm">12 hours</span>
        </a>
        <div class="dropdown-divider" />
        <a href="#" class="dropdown-item">
          <i class="fas fa-file mr-2" /> 3 new reports
          <span class="float-right text-muted text-sm">2 days</span>
        </a>
        <div class="dropdown-divider" />
        <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-widget="fullscreen" href="#" role="button">
        <i class="fas fa-expand-arrows-alt" />
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
        <i class="fas fa-th-large" />
      </a>
    </li>
  </ul>
</nav>

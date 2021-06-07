// Header
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="nav" class="sticky-nav">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand" href="#"><img class="profile-pic" src="assets/images/pixel_profile.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              <span></span>
              <span></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#projects">Resume</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#projects">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
        `
  }
}

// Footer
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container-fluid" id="footer">
          <div class="row">
            <div class="col-12 footer-col">
              <p>&#169; 2021 Calley Hayes</p>
            </div>
          </div>
        </div>
      </footer>
    `
  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);

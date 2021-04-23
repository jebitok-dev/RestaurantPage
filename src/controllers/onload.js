const loadPage = (() => {
    const contentContainer = document.querySelector('#content');
    const header = document.createElement('header');
    header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">DealRestaurant</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" data-tab-target="#home">Home</a>
              <a class="nav-link" data-tab-target="#menu">Specials</a>
              <a class="nav-link" data-tab-target="#contact">Menu</a>
            </div>
          </div>
        </div>
    </nav>
    `;
    contentContainer.appendChild(header)
})();
export { loadPage };
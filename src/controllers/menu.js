const renderMenuPage = (() => {
    const contentContainer = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.setAttribute('data-tab-content', '');
    menu.innerHTML = `
    <div class='hero container'>
        <section class='card'>
            <img src='./images/Recipes/RC7.png' class=img-top' alt='RC7'>
            <div class='time'>
                <p> <i class='far fa-clock'></i> <span class='space2'></span> 20 MINS </p>
            </div>
            <small><h3 class='card-body'>Homemade Spinach</h3></small>
        </section>

        <section class='card'>
            <img src='./images/Recipes/RC8.png' class=img-top' alt='RC8'>
            <div class='time'>
                <p> <i class='far fa-clock'></i> <span class='space2'></span> 30 MINS </p>
            </div>
           <small><h3 class='card-body'>Hot Chocolate Fondant</h3></small>
        </section> 

        <section class='card'>
            <img src='./images/Recipes/RC9.png' class=img-top' alt='RC9'>
            <div class='time'>
                <p> <i class='far fa-clock'></i> <span class='space2'></span> 30 MINS </p>
            </div>
            <small><h3 class='card-body'>StrawBerry Spices</h3></small>
        </section>
        <section class='card'>
            <img src='./images/Recipes/RC7.png' class=img-top' alt='RC7'>
            <div class='time'>
                <p> <i class='far fa-clock'></i> <span class='space2'></span> 20 MINS </p>
            </div>
            <small><h3 class='card-body'>Homemade Spinach</h3></small>
        </section>

        <section class='card'>
            <img src='./images/Recipes/RC8.png' class='img-top' alt='RC8'>
            <div class='time'
                <p> <i class='far fa-clock'></i> <span class='space2'></span> 30 MINS </p>
            </div>
            <small><h3 class='card-body'>Hot Chocolate Fondant</h3></small>
        </section> 

        <section class='card'>
            <img src='./images/Recipes/RC9.png' class=img-top'alt='RC9'>
            <div class='time'>
                <p> <i class='far fa-clock'></i> <span class='space2'></span> 30 MINS </p>
            </div>
            <small><h3 class='card-body'>StrawBerry Spices</h3></small>
        </section>
    </div>`;

    contentContainer.appendChild(menu);
})();
export { renderMenuPage };
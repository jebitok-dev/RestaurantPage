const renderMenuPage = (() => {
    const contentContainer = document.querySelector('#content');
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.setAttribute('data-tab-content', '');
    menu.innerHTML = `
    <div class='hero container'>
    <div class='menu-container'>
        <section class='card '>
            <img src='./images/Recipes/RC7.png' class=img-top' alt='RC7'>
            <div class='time'>
                <p> <i class='far fa-clock'></i> <span class='space2'></span> 20 MINS </p>
            </div>
            <small><h2 class='card-body'>Homemade Spinach</h2></small>
        </section>

        <section class='card'>
            <img src='./images/Recipes/RC8.png' class=img-top' alt='RC8'>
            <div class='time'>
                <p> <i class='far fa-clock'></i> <span class='space2'></span> 30 MINS </p>
            </div>
           <small><h2 class='card-body'>Hot Chocolate Fondant</h2></small>
        </section> 

        <section class='card'>
            <img src='./images/Recipes/RC9.png' class=img-top' alt='RC9'>
            <div class='time'>
                <p> <i class='far fa-clock'></i> <span class='space2'></span> 30 MINS </p>
            </div>
            <small><h2 class='card-body'>StrawBerry Spices</h2></small>
        </section>
        <section class='card'>
            <img src='./images/Recipes/RC7.png' class=img-top' alt='RC7'>
            <div class='time'>
                <p> <i class='far fa-clock'></i> <span class='space2'></span> 20 MINS </p>
            </div>
            <small><h2 class='card-body'>Homemade Spinach</h2></small>
        </section>

        <section class='card'>
            <img src='./images/Recipes/RC8.png' class='img-top' alt='RC8'>
            <div class='time'
                <p> <i class='far fa-clock'></i> <span class='space2'></span> 30 MINS </p>
            </div>
            <small><h2 class='card-body'>Hot Chocolate Fondant</h2></small>
        </section> 

        <section class='card'>
            <img src='./images/Recipes/RC9.png' class=img-top'alt='RC9'>
            <div class='time'>
                <p> <i class='far fa-clock'></i> <span class='space2'></span> 30 MINS </p>
            </div>
            <small><h2 class='card-body'>StrawBerry Spices</h2></small>
        </section>
    </div>
    </div>`;

    contentContainer.appendChild(menu);
})();
export { renderMenuPage };
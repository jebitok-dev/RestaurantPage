const homePage = (() => {
    const contentContainer = document.querySelector('#content');
    const home = document.createElement('div');
    home.classList.add('tab-content')
    home.innerHTML = `<div id='home' class='active' data-tab-content>
    <div class='hero'>
        <h1>Find the right place to eat, meet and celebrate</h1>
        <p>find</p>
        <form action="/action_page.php">
            <div class="form-group">
                <input type="email" class="form-control" placeholder="find" id="email">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="what do you want to eat?" id="pwd">
            </div>
                <button type="submit" class="btn btn-primary" data-tab-target="#menu">SEARCH</button>
        </form>
    </div>
    <div>
        <h3>Reservation</h3>
        <h3>OUR SECRET TO DELICIOUS MEALS</h3>
        <p>Deal Restaurant began with the need to replace a societal norm in Nigerian food that could only be gotten in a scanty environment. We decided to start a culinary revolution with our customers at the centre of the service to improve our matrix calculation to provide a better</p>
    </div>
    <div class='info'>
        <div class='address'>
            <p>Deal Restaurant | Terms Privacy © Deal Restaurant | 2020. All Rights Reserved.</p>
        </div>
        <div class="hours">
            <p>
                <span>Mon-Thurs:</span>8am-8pm<br /><span>Fri-Sun:</span
                >8am-11pm
            </p>
        </div>
        </div>
    </div>
    `;
    contentContainer.appendChild(home);
})();
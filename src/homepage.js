const renderHomePage = (() => {
  const contentContainer = document.querySelector('#content');
  const home = document.createElement('div');
  home.classList.add('tab-content');
  home.innerHTML = `<div id='home' class='active' data-tab-content>
    <div class='hero bg-img img'>
        <div class='center'>
        <h2>Find the right place to eat</h2>
            <form action='/' class='form-details'>
                <div class='form-group'>
                    <input type='email' class='form-control' placeholder='find' id='email'>
                </div>
                <div class='form-group'>
                    <input type='password' class='form-control' placeholder='what do you want to eat?' id='pwd'>
                </div>
                    <button type='submit' class='btn btn-primary' data-tab-target='#menu'>SEARCH</button>
            </form>
        </div>
    </div>
    <div class='justify-content-center'>
        <h2>Reservation</h2>
        <h3>OUR SECRET TO DELICIOUS MEALS</h3>
        <p>Deal Restaurant began with the need to replace a societal norm in Nigerian food that could only be gotten in a scanty environment. We decided to start a culinary revolution with our customers at the centre of the service to improve our matrix calculation to provide a better</p>
    </div>
    <div class='info'>
        <div class='address'>
            <p>324 Lessos<br />Nandi, Kenya 30302</p>
        </div>
        <div class='hours'>
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
export default renderHomePage;
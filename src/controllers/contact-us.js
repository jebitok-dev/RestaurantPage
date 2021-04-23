const contactUs = (() => {
    const contentContainer = document.querySelector('#content');
    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');
    contact.setAttribute('data-tab-content', '');
    const innerHTML = `
    <div>
    <form action="">
        <div class="form-group">
            <input type="name" class="form-control" placeholder="Your Name" id="text">
        </div>
        <div class="form-group">
            <input type="email" class="form-control" placeholder="johndoe@mail.com" id="text">
        </div>
        <div class="form-group">
            <input type="number" class="form-control" placeholder="+123 456 789" id="number">
        </div>
        <div class="form-group">
            <input type="date" class="form-control" placeholder="1 Person" id="text">
        </div>
        <div class="form-group">
            <input type="date" class="form-control" placeholder="mm/dd/yyyy" id="date">
        </div>
        <div class="form-group">
            <input type="time" class="form-control" placeholder="--:-- --" id="time">
        </div>
            <button type="submit" class="btn btn-primary" data-tab-target="#menu">BOOK A TABLE</button>
    </form>
    </div>
    `
    contentContainer.appendChild(contact);
})();

export { contactUs };
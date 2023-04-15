'use strict';
// Get DOM General elements
const bookForm = document.querySelector('.add-book');
const formAlert = document.querySelector('.alert');
const bookList = document.querySelector('.book-list');
const confirmDelBtn = document.getElementsByClassName('confirmDelBtn')[0];


// Book Constructor
function Book(title, author, genres) {
    this.title = title;
    this.author = author;
    this.genres = genres;
}


// UI constructor
function BookUI() {

}

// add ui instance
const UI = new BookUI();


// add book to DOM
BookUI.prototype.addBookToList = function (book) {
    // create tr
    const row = document.createElement('tr');
    // insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.genres}</td>
        <td>
            <a class="text-decoration-none text-dark fw-bold" data-bs-toggle="modal" data-bs-target="#confirmDelete" href="#">
                <img src="assets/trash.svg" alt="Delete icon">
            </a>
        </td>
        `;
    bookList.appendChild(row);
};

// show messages UI
BookUI.prototype.showMsg = function (status, msg = '') {
    if (status === 'error') {
        formAlert.textContent = msg;
        formAlert.classList.add('alert-danger');
        formAlert.classList.remove('d-none');
    }
    if (status === 'clear') {
        formAlert.textContent = msg;
        formAlert.classList.remove('alert-danger', 'alert-success');
        formAlert.classList.add('d-none');
    }
    if (status === 'success') {
        formAlert.textContent = msg;
        formAlert.classList.add('alert-success');
        formAlert.classList.remove('d-none');
    }
};

// remove book UI
BookUI.prototype.removeBook = function (target) {
    if (target.tagName === 'IMG') {
        // listen to confirm delete
        confirmDelBtn.addEventListener('click', () => {
            target.closest('tr').remove();
            // show confirmation msg
            UI.showMsg('success', 'Book successfully deleted.');
            setTimeout(() => UI.showMsg('clear'), 3000);
        });
    }
};


// event listener for ADD BOOK
bookForm.addEventListener('submit', function (e) {

    e.preventDefault();

    // form values
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const genres = document.getElementById('genres').value.trim();

    // check if empty values
    if (title === '' || author === '' || genres === '') {
        UI.showMsg('error', 'Please fill in all the fields');
        setTimeout(() => UI.showMsg('clear'), 3000);
        return;
    }

    // clear msg errors
    UI.showMsg('clear');

    // Add book instance
    const book = new Book(title, author, genres);

    // add book to list using UI class
    UI.addBookToList(book);

    // show succes msg
    UI.showMsg('success', 'Book added successfully');
    setTimeout(() => UI.showMsg('clear'), 3000);

    // clear fields
    bookForm.reset();

});

// event listener for DELETE BOOK
bookList.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        // call delete
        UI.removeBook(e.target);
    }
});
"use strict";
// Get DOM General elements
const addBookForm = document.querySelector(".add-book");
const updateBookForm = document.querySelector(".update-book");
const cancelUpdateBtn = document.querySelector(".cancel-update");
const formAlert = document.querySelector(".alert");
const bookList = document.querySelector(".book-list");
const confirmDelBtn = document.getElementsByClassName("confirmDelBtn")[0];
const booksLeftEl = document.querySelector(".books-left");
let booksCount = document.getElementsByClassName("book-row");
// Book constructor
class Book {
    constructor(title, author, genres, count){
        this.title = title;
        this.author = author;
        this.genres = genres;
        this.count = count;
    }
}
// BookUI constructor
class BookUI {
    // methods
    // render book to DOM
    addBookToList(book) {
        // create tr
        const row = document.createElement("tr");
        row.classList = "book-row";
        row.id = `book-row-${book.count}`;
        // insert cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genres}</td>
            <td class="countdown-${book.count}"></td>
            <td>
                <a class="d-none text-decoration-none text-dark fw-bold" href="#" title="update">
                    <img src="./assets/icons/pencil-square.svg" class="updateBook" alt="update icon">
                </a>
                &nbsp;
                <a class="d-none text-decoration-none text-dark fw-bold" data-bs-toggle="modal" data-bs-target="#confirmDelete" href="#" title="delete">
                    <img src="./assets/icons/trash.svg" class="deleteBook" alt="Delete icon">
                </a>
            </td>
            `;
        bookList.appendChild(row);
        // timer
        this.bookTimer(5, 1000);
        // update books count
        this.UpdateBookCount();
        // hide form
        addBookForm.classList.add("d-none");
        return this;
    }
    // show messages UI
    showMsg(status, msg = "") {
        if (status === "error") {
            formAlert.textContent = msg;
            formAlert.classList.add("alert-danger");
            formAlert.classList.remove("d-none");
        }
        if (status === "clear") {
            formAlert.textContent = msg;
            formAlert.classList.remove("alert-danger", "alert-success");
            formAlert.classList.add("d-none");
        }
        if (status === "success") {
            formAlert.textContent = msg;
            formAlert.classList.add("alert-success");
            formAlert.classList.remove("d-none");
        }
        return this;
    }
    // remove book from UI
    removeBook(target) {
        if (target.classList.contains("deleteBook")) // listen to confirm delete
        confirmDelBtn.addEventListener("click", ()=>{
            target.closest("tr").remove();
            // remove from LS
            Store.removeBook(target.closest("tr").id.split("-")[2]);
            // show confirmation msg
            this.showMsg("success", "Book successfully deleted");
            setTimeout(()=>this.showMsg("clear"), 2000);
            this.UpdateBookCount();
        });
        return this;
    }
    // book count update
    UpdateBookCount() {
        booksCount = document.getElementsByClassName("book-row");
        const booksLeft = 36 - booksCount.length;
        booksLeftEl.textContent = `${booksLeft} ${booksLeft !== 1 ? "books" : "book"} left`;
        return this;
    }
    // get deatils
    getDetails(bookRow, id) {
        // get row text content
        const title = bookRow.children[0].textContent;
        const author = bookRow.children[1].textContent;
        const genres = bookRow.children[2].textContent;
        // put them in the update form
        document.getElementById("titleUp").value = title;
        document.getElementById("authorUp").value = author;
        document.getElementById("genresUp").value = genres;
        document.getElementById("book-hidden-id").value = id;
        return this;
    }
    bookTimer(daysLeft, delay) {
        booksCount = document.getElementsByClassName("book-row");
        const daysLeftEl = booksCount[booksCount.length - 1].children[3];
        // let daysLeft = 5;
        // let delay = 86400000; // 1 day in milliseconds
        // let delay = 1000;
        countDown();
        let timer = setInterval(countDown, delay);
        function countDown() {
            if (daysLeft > 0) {
                daysLeftEl.textContent = `${daysLeft} ${daysLeft !== 1 ? "days" : "day"} left`;
                --daysLeft;
            } else {
                clearInterval(timer);
                timer = null;
                daysLeftEl.innerHTML = `
                    <a class="text-decoration-none text-dark fw-bold" href="#" title="Done">
                        <img src="./assets/icons/check-circle.svg" class="bookDone" alt="done icon">
                    </a>
                    &nbsp;
                    <a class="text-decoration-none text-dark fw-bold" href="#" title="More time">
                    <img src="./assets/icons/hourglass.svg" class="wait" alt="wait icon">
                    </a>`;
            }
        }
        return this;
    }
}
// LOCAL STORAGE
class Store {
    static getBooks() {
        let books;
        if (!localStorage.getItem("books")) books = [];
        else books = JSON.parse(localStorage.getItem("books"));
        return books;
    }
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach((book)=>{
            // create tr
            const row = document.createElement("tr");
            row.classList = "book-row";
            row.id = `book-row-${book.count}`;
            // insert cols
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.genres}</td>
                <td class="countdown-${book.count}">Done</td>
                <td>
                    <a class="text-decoration-none text-dark fw-bold" href="#" title="update">
                        <img src="./assets/icons/pencil-square.svg" class="updateBook" alt="update icon">
                    </a>
                    &nbsp;
                    <a class="text-decoration-none text-dark fw-bold" data-bs-toggle="modal" data-bs-target="#confirmDelete" href="#" title="delete">
                        <img src="./assets/icons/trash.svg" class="deleteBook" alt="Delete icon">
                    </a>
                </td>
                `;
            bookList.appendChild(row);
        });
    }
    static addBook(newBook) {
        const books = Store.getBooks();
        books.push(newBook);
        localStorage.setItem("books", JSON.stringify(books));
    }
    static removeBook(count) {
        const books = Store.getBooks();
        books.forEach((book, index)=>{
            if (book.count === +count) books.splice(index, 1);
        });
        localStorage.setItem("books", JSON.stringify(books));
    }
    static updatebook(title, author, genres, count) {
        const books = Store.getBooks();
        books.forEach((book)=>{
            if (book.count === +count) {
                book.title = title;
                book.author = author;
                book.genres = genres;
            }
        });
        localStorage.setItem("books", JSON.stringify(books));
    }
    // initial book count
    static initBookCount() {
        const booksLeft = 36 - booksCount.length;
        if (booksLeft < 36) booksLeftEl.textContent = `${booksLeft} ${booksLeft !== 1 ? "books" : "book"} left`;
        if (booksLeft <= 0) {
            booksLeftEl.textContent;
            addBookForm.classList.add("d-none");
        }
    }
}
// EVENT LISTENERS
// DOM load event
document.addEventListener("DOMContentLoaded", ()=>{
    Store.initBookCount();
    Store.displayBooks();
});
// Add book event listener
addBookForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // form values
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const genres = document.getElementById("genres").value.trim();
    // add ui instance
    const UI = new BookUI();
    // check if empty values
    if (title === "" || author === "" || genres === "") {
        UI.showMsg("error", "Please fill in all the fields");
        setTimeout(()=>UI.showMsg("clear"), 2000);
        return;
    }
    // clear msg errors
    UI.showMsg("clear");
    // count
    let count;
    booksCount = document.getElementsByClassName("book-row");
    // check if book already exists
    const bookRows = Array.from(booksCount);
    const result = bookRows.find((row)=>row.children[0].textContent.toLocaleLowerCase() === title.toLocaleLowerCase() && row.children[1].textContent.toLocaleLowerCase() === author.toLocaleLowerCase());
    if (result) {
        UI.showMsg("error", "You already added this book");
        setTimeout(()=>UI.showMsg("clear"), 2000);
        return;
    }
    if (booksCount.length === 0) count = 1;
    else {
        const lastBook = booksCount[booksCount.length - 1];
        if (lastBook.children[3].textContent !== "Done") {
            UI.showMsg("error", "You need to finish current book");
            setTimeout(()=>UI.showMsg("clear"), 3000);
            return;
        }
        const lastId = +lastBook.id.split("-")[2];
        count = lastId + 1;
    }
    // Add book instance
    const book = new Book(title, author, genres, count);
    // add book to list using UI class
    UI.addBookToList(book);
    // show succes msg
    UI.showMsg("success", "Book added successfully");
    setTimeout(()=>UI.showMsg("clear"), 2000);
    // clear fields
    addBookForm.reset();
});
// Update book event listener
updateBookForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const title = document.getElementById("titleUp").value.trim();
    const author = document.getElementById("authorUp").value.trim();
    const genres = document.getElementById("genresUp").value.trim();
    const rowId = document.getElementById("book-hidden-id").value.trim();
    // add ui instance
    const UI = new BookUI();
    // check if empty values
    if (title === "" || author === "" || genres === "") {
        UI.showMsg("error", "Please fill in all the fields");
        setTimeout(()=>UI.showMsg("clear"), 2000);
        return;
    }
    // clear msg errors
    UI.showMsg("clear");
    // find the row
    booksCount = document.getElementsByClassName("book-row");
    const bookRows = Array.from(booksCount);
    const row = bookRows.find((row)=>row.id === rowId);
    // update it
    row.children[0].textContent = title;
    row.children[1].textContent = author;
    row.children[2].textContent = genres;
    // update in LS
    Store.updatebook(title, author, genres, row.id.split("-")[2]);
    // show update msg 
    UI.showMsg("success", "Updated successfully");
    setTimeout(()=>UI.showMsg("clear"), 2000);
    // reset form
    updateBookForm.reset();
    // hide it
    updateBookForm.classList.add("d-none");
    addBookForm.classList.remove("d-none");
});
// cancel update event listener
cancelUpdateBtn.addEventListener("click", function(e) {
    e.preventDefault();
    updateBookForm.reset();
    updateBookForm.classList.add("d-none");
    addBookForm.classList.remove("d-none");
});
// event listener for DELETE Update BOOK
bookList.addEventListener("click", (e)=>{
    // delete book
    if (e.target.classList.contains("deleteBook")) {
        // add ui instance
        const UI = new BookUI();
        // call delete
        UI.removeBook(e.target);
    }
    // update book
    if (e.target.classList.contains("updateBook")) {
        // show update form
        addBookForm.classList.add("d-none");
        updateBookForm.classList.remove("d-none");
        // get details
        const bookRow = e.target.closest(".book-row");
        const id = bookRow.id;
        const UI = new BookUI();
        UI.getDetails(bookRow, id);
    }
    if (e.target.classList.contains("bookDone")) {
        const bookRow = e.target.closest(".book-row");
        bookRow.children[3].innerHTML = "Done";
        // show update and delete buttons
        const links = Array.from(bookRow.children[4].children);
        links.forEach((link)=>link.classList.remove("d-none"));
        const title = bookRow.children[0].textContent;
        const author = bookRow.children[1].textContent;
        const genres = bookRow.children[2].textContent;
        const count = +bookRow.id.split("-")[2];
        const book = new Book(title, author, genres, count);
        // Add to LS
        Store.addBook(book);
        // show back form
        addBookForm.classList.remove("d-none");
    }
    if (e.target.classList.contains("wait")) {
        // add ui instance
        const UI = new BookUI();
        UI.bookTimer(2, 1000);
    }
});

//# sourceMappingURL=index.44983732.js.map

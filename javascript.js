const deleteBtn = document.querySelectorAll(".delete")
const library = document.querySelector("#bookGrid")
const book = document.querySelector(".book")
const newBookBtn = document.querySelector(".addBook")
const form = document.querySelector("#addBookForm")
const cards = document.querySelector("#bookGrid")
const readBtn = document.querySelectorAll(".hasRead")
const showFormBtn = document.querySelector(".inputNewBook")

const myLibrary = [];


showFormBtn.style.display = "none"; 

newBookBtn.addEventListener("click", () => {
    if (showFormBtn.style.display === "none") {
        showFormBtn.style.display = "block";
    } else {
        showFormBtn.style.display = "none"
    }
})


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function render() {
        //(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[myLibrary.length - 1];
        let bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `<h2>${book.title}</h2>`;
        bookElement.innerHTML += `<h3>${book.author}</h3>`;
        bookElement.innerHTML += `<p>${book.pages}</p>`;
        let deleteButton = document.createElement("button");
        bookElement.appendChild(deleteButton);
        deleteButton.classList.add("delete");
        deleteButton.innerHTML = "delete"
        deleteButton.addEventListener("click", ()=> {
            library.removeChild(deleteButton.parentNode)
        })
        library.appendChild(bookElement);

        let hasReadBtn = document.createElement("button");
        bookElement.appendChild(hasReadBtn);
        hasReadBtn.classList.add("hasRead");
        if (book.read == false) {
            hasReadBtn.textContent = "not read"
        }
        else { 
            hasReadBtn.textContent = "read"
        }
        hasReadBtn.addEventListener("click", () => {
            if (hasReadBtn.innerHTML == 'not read') {
                hasReadBtn.textContent = "read"
            }
            else if (hasReadBtn.innerHTML == "read") {
                hasReadBtn.textContent = "not read"
            }
        })



    }
//}

function addBookToLibrary() {

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let isRead = document.querySelector("#isRead").checked;
    
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook)
    console.log(myLibrary)
    render()
}



for (let i = 0; i < readBtn.length; i++) {
    let btn = readBtn[i];
    btn.addEventListener("click", () => {
        if (btn.innerHTML == 'not read') {
            btn.textContent = "read"
        }
        else if (btn.innerHTML == "read") {
            btn.textContent = "not read"
        }
    })
}

for (let i = 0; i < deleteBtn.length; i++) {
    
    let btn = deleteBtn[i]
    btn.addEventListener("click", () => {
        library.removeChild(btn.parentNode)
    })
}

let submitForm = document.querySelector("#addBookForm")



submitForm.addEventListener("submit", ()=> {
    event.preventDefault();
    addBookToLibrary();
})



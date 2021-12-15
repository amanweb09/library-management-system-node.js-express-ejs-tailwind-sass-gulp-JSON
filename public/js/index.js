const getBookBtn = document.querySelector('button#getBookBtn');

getBookBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let bookID = document.querySelector('input#bookID').value;

    axios.post('/get-book', { id: bookID })
        .then((res) => {
            if (res.data.book) {
                let book = res.data.book;

                book.map((doc) => {
                    function generateMarkup(response) {
                        return `
                        <div class="details-container flex" id="det-screen">
                            <div class="detail-item">${response.id}</div>
                            <div class="detail-item">${response.title}</div>
                            <div class="detail-item">${response.author}</div>
                            <div class="detail-item">${response.stock}</div>
                        </div>
                    `
                    }

                    let markup = generateMarkup(doc);
                    const markupContainer = document.getElementById('details-container-main');
                    markupContainer.innerHTML = markup;
                })
            }
            else if (res.data.failureMessage) {
                function generateFailureMarkup() {
                    return `
                    <div class="no-book" id="det-screen">
                        <p>No Book Found with this ID</p>
                    </div>
                `
                }
                let markup = generateFailureMarkup();
                const markupContainer = document.getElementById('no-book');
                markupContainer.innerHTML = markup;
            }
        })
        .catch((err) => {
            console.log(err);
        })
})

const createNewBookBtn = document.querySelector('div#add-new-book-btn');
const cancelCreateBookBtn = document.querySelector('div.action-btn button#cancel-btn');
const submitCreateBookBtn = document.querySelector('div.action-btn button#submit-btn');

createNewBookBtn.addEventListener('click', (e) => {
    const createBookContainer = document.querySelector('div.create-book-wrapper');
    
    createBookContainer.classList.toggle('open')
})

console.log(cancelCreateBookBtn);
cancelCreateBookBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const createBookContainer = document.querySelector('div.create-book-wrapper');
    createBookContainer.classList.remove('open');
})

submitCreateBookBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let formdata = document.querySelectorAll('form#create-book-form input');

    let formObj = {
        id: formdata[0].value,
        title: formdata[1].value,
        author: formdata[2].value,
        stock: formdata[3].value,
    }
    
    axios.post('create-book', formObj)
    .then((res) => {
        console.log(res);
        if (res.status === 201) {
            showNoty(res.data.successMessage, 'success')
        }
        if (res.data.failureMessage) {
            showNoty(res.data.failureMessage, 'error')
        }
    })
    .catch((err) => {
        console.log(err);
        showNoty("Something went wrong", 'error')
    })
})
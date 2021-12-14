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
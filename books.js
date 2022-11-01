
function renderBooks() {
    const booksWrapper = document.querySelector('.books');

    booksWrapper.innerHTML = `<div class="book">
    <figure class="book__img_wrapper">
        <img class="book_img" src="./assets/crack the coding interview.png" alt="">
    </figure>
    <div class="book__title">
        Crack the Coding Interview
    </div>
    <div class="book__ratings">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half-alt"></i>
    </div>
    <div class="book__price">
        <span class="book__price--normal">59.95</span> 14.95
    </div>
</div>`

}


setTimeout(() => {
    renderBooks();
});



function getBooks() {
    return [{
        id: 1,
        title: "Crack the Coding interview",
        OriginalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5
    },
    {
        id: 1,
        title: "Crack the Coding interview",
        OriginalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5
    },
    {
        id: 1,
        title: "Crack the Coding interview",
        OriginalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5
    },
    {
        id: 1,
        title: "Crack the Coding interview",
        OriginalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5
    },
    {
        id: 1,
        title: "Crack the Coding interview",
        OriginalPrice: 49.95,
        salePrice: 14.95,
        rating: 4.5
    },


    ]
}
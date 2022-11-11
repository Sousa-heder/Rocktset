//Array de livros
const bookByCategory = [
    {
        category: "Riqueza",
        books:[
            {
                title: "Os segredos da mente milíonária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books:[
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 habitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            },
        ],
    }
];

const totalCategories = bookByCategory.length

// For para verificar quantos livros tem no array
for(let category of bookByCategory){
    console.log('Total de livros da categoria', category.category);
    console.log(category.books.length)
}

// Function para verificar quantos autores tem 
function countAuthors() {
    let authors = [];
    for(let category of bookByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
            authors.push(book.author)
            }
        }   
    }
    console.log("Total de autores: ", authors.length)
}
countAuthors();

// function para buscar informações de quanto livros tem o autor no array
function booksOfAuthor(author) {
    let books = [];
    for(let category of bookByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }   
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor('George S. Clason')

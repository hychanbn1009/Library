const submitButton = document.getElementById('submit').addEventListener('click',addBookToLibrary)

let myLibrary=[];

function Book(bookName,author,pages,isRead){
    this.bookName=bookName,
    this.author=author,
    this.pages=pages,
    this.isRead=isRead
}

function addBookToLibrary(){
    const bookName= document.getElementById('bname').value
    const author= document.getElementById('author').value
    const pages= document.getElementById('pages').value
    const isRead= document.getElementById('isRead').checked
    const book=new Book(bookName,author,pages,isRead)
    myLibrary.push(book)
    console.log(book)
    console.log(myLibrary)
    clearList()
    displayBookList(myLibrary)
}

function displayBookList(myLibrary){
    for (i=0;i<myLibrary.length;i++){
        const result = document.getElementById('result')
        const resultdiv = document.createElement('div')
        const removeButton = document.createElement('button')
        removeButton.addEventListener('click',removeBook)
        resultdiv.setAttribute('id',i)
        removeButton.setAttribute('id',i)
        resultdiv.classList.add('resultContainer')
        removeButton.innerHTML='Remove this Book'
        resultdiv.innerHTML=(
            `title:${myLibrary[i].bookName}
            author:${myLibrary[i].author}
            pages:${myLibrary[i].pages}
            Read:${myLibrary[i].isRead}`
        )
        result.appendChild(resultdiv)
        resultdiv.appendChild(removeButton)
    }
}

function removeBook(event){
    event.target.parentNode.remove();
    console.log(event.target.getAttribute('id'))
    myLibrary.splice(event.target.getAttribute('id'),1)
}

function clearList(){
    const result = document.getElementById('result')
    const resultdiv = document.getElementsByClassName('resultContainer')
    console.log(resultdiv)
    while(resultdiv.length){
        for (i=0;i<resultdiv.length;i++){
            result.removeChild(resultdiv[i])
        }
    }
}
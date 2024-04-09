let numBooks = 0;
booksArray = []

numBooksFormElement = document.getElementById("booksForm");



numBooksFormElement.addEventListener("submit",function(event){
    event.preventDefault();
    numBooksInputElement = document.getElementById("booksForm_numBooksInput");
    numBooks = parseInt(numBooksInputElement.value);
    numBooksFormElement.remove();
    booksInfoFormFunc();
});

function booksInfoFormFunc(){
    
    booksInfoFormElement = document.getElementById("booksInfoForm");
    booksInfoFormElement.style.display = "flex";

    let numBooksC = numBooks;

    booksInfoFormElement.addEventListener("submit",function(event){
        event.preventDefault();
        
        let book = {};
        numBooksC--;
        booksInfoForm_bookName_Element = document.getElementById("booksInfoForm_bookName");
        book.name = booksInfoForm_bookName_Element.value;
        booksInfoForm_bookName_Element.value = '';

        booksInfoForm_bookPrice_Element = document.getElementById("booksInfoForm_bookPrice");
        book.price = booksInfoForm_bookPrice_Element.value;
        booksInfoForm_bookPrice_Element.value = '';

        booksInfoForm_bookAuthor_Element = document.getElementById("booksInfoForm_bookAuthor");
        book.author = booksInfoForm_bookAuthor_Element.value;
        booksInfoForm_bookAuthor_Element.value = '';
        
        booksInfoForm_authorEmail_Element = document.getElementById("booksInfoForm_authorEmail");
        book.authorEmail = booksInfoForm_authorEmail_Element.value;
        booksInfoForm_authorEmail_Element.value = '';

        booksArray.push(book);
    
        if (numBooksC === 0) {
            booksInfoFormElement.remove();
            alert(`You have submitted ${numBooks} books.`)
            // console.log('No more submissions allowed.');
            // console.log(booksArray);
            tableFunc();
        }        
        

    });
}

function tableFunc(){

    let table = document.getElementById("booksTable");
    table.style.display = 'table';
    // table.style.width = '100%';
    // table.style.maxWidth = '1000px';
    // table.style.margin = '0 auto'; 
    
    table.getElementsByTagName('tbody')[0];
    
    for(let i=0; i < numBooks ; i++){

        let newRow = table.insertRow();

        let bookNameCell = newRow.insertCell(0);
        bookNameCell.contentEditable = false;
        bookNameCell.textContent = booksArray[i].name;

        let bookPriceCell = newRow.insertCell(1);
        bookPriceCell.contentEditable = false;
        bookPriceCell.textContent = booksArray[i].price;

        let authorNameCell = newRow.insertCell(2);
        authorNameCell.contentEditable = false;
        authorNameCell.textContent = booksArray[i].author;

        let authorEmailCell = newRow.insertCell(3);
        authorEmailCell.contentEditable = false;
        authorEmailCell.textContent = booksArray[i].authorEmail;

        let actionCell = newRow.insertCell(4)
        actionCell.innerHTML = '<button id="tableEditSaveB" onclick="editSaveRow(this)">Edit</button>' +
                          '<button id="tableDeleteB" onclick="deleteRow(this)">Delete</button>';

    }
    

}

function editSaveRow(button) {
    

    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    if(button.innerHTML === "Edit"){
        for (var i = 0; i < cells.length - 1; i++) {
            cells[i].classList.add("editable");
            cells[i].contentEditable = true;
        }

        button.innerHTML = "Save";
    }
    else{
        for (var i = 0; i < cells.length - 1; i++) {
            cells[i].classList.remove("editable");
            cells[i].contentEditable = false;
        }

        button.innerHTML = "Edit";
    }
    
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}















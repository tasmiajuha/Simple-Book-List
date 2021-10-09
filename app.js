//selecting every document
const title = document.querySelector('#title');
const author = document.querySelector('#author'); //# for id
const year = document.querySelector('#year');
const btn = document.querySelector('.btn'); // . for button class
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function(e) { //event listener will be activated/triggered by click event which is by clicking the Add book button
    e.preventDefault(); //to stop the default bahavior of sending the added data to our server. As we want to show the data in the UI 

    // Basic Validation
    if (title.value == '' && author.value == '' && year.value == '') {
        alert('Please input your information.');
    } else {
        const newRow = document.createElement('tr'); //creating the row for those iformation

        // Creating new title
        const newTitle = document.createElement('th');
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        // Creating new author
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        // Creating new Year
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        // Displaying in UI
        bookList.appendChild(newRow);
    }
});
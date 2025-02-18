const textInput = document.getElementById('textInput');
const submitBtn = document.getElementById('submitBtn');
const stringList = document.getElementById('stringList');
const deleteBtn = document.getElementById('deleteBtn');

submitBtn.addEventListener('click', () => {
    const inputValue = textInput.value.trim();
  
    if(inputValue == ""){
        alert("Enter a string grrr!");
    }

    if (inputValue) {
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;

    listItem.addEventListener('click', () => {
        listItem.classList.toggle('selected');
    });

    stringList.appendChild(listItem);
    textInput.value = '';
    }
});

deleteBtn.addEventListener('click', () => {
    const selectedItems = document.querySelectorAll('#stringList li.selected');
    selectedItems.forEach(item => item.remove());
});
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('input[name="item"]').value;
    const item = {
        text,
        done: false
    }
    this.reset();
    console.log(item);

}

addItems.addEventListener('submit', addItem);
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const btnCheckAll = document.querySelector('.check-all');
const btnUnCheckAll = document.querySelector('.uncheck-all');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('input[name="item"]').value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));

    this.reset();
}


function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked': '' } />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');

}


function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done

    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

const checkAll = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    [...checkboxes].map(checkbox => {
        const index = checkbox.dataset.index;
        items[index].done = true;
    });

    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

const unCheckAll = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    [...checkboxes].map(checkbox => {
        const index = checkbox.dataset.index;
        items[index].done = false;
    });

    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
btnCheckAll.addEventListener('click', checkAll);
btnUnCheckAll.addEventListener('click', unCheckAll);


populateList(items, itemsList);

const inputEl = document.querySelector('#input');
const form = document.querySelector('.btn');
const container = document.querySelector('.container');


form.addEventListener('click', (e) => {
    e.preventDefault();
    const task = inputEl.value;
    if (task === "") {
        alert('Votre liste est vide! ')
    } else {

        const newSection = document.createElement('section');
        newSection.classList.add('content');

        const newInput = document.createElement('input');
        newInput.classList.add('text');
        newInput.value = task;
        newSection.appendChild(newInput);

        container.appendChild(newSection);
        container.appendChild(newSection);
        inputEl.value = "";
        inputEl.focus();
        const div = document.createElement('div');
        div.classList.add('action');
        const edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerHTML = "OK";
        const deletee = document.createElement('button');
        deletee.classList.add('delete');
        deletee.innerHTML = "SUPPRIMER";

        div.appendChild(edit);
        div.appendChild(deletee);
        newSection.appendChild(div);
        edit.addEventListener('click', () => {
            newInput.classList.add('yellow');
        })
        deletee.addEventListener('click', () => {
            newSection.classList.add('visible');
        })
    }
})
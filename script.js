const save = document.querySelector('#save');
const form = document.querySelector('#hidden');
const oldForm = document.querySelector('.hidden');
const addButton = document.querySelector('#add');
const fullNameInput = document.querySelector('#fullname');
const container = document.querySelector('#container');

addButton.addEventListener("click", (event) => {
    event.preventDefault()
    oldForm.classList.remove('hidden');
});

save.addEventListener("click", (event) => {
    event.preventDefault()
    form.classList.remove('hidden');

    const fullName = fullNameInput.value;
    const names = fullName.split(" ");
    const firstNameValue = names[0] || "";
    const lastNameValue = names[1] || "";

    document.querySelector('#firstname').value = firstNameValue;
    document.querySelector('#lastname').value = lastNameValue;

    console.log(names);

    const type = document.querySelector('#type').value;
    const gender = document.querySelector('#gender').value;


    container.innerHTML = '';

    if (type === 'radio' || type === 'checkbox') {
        ['Male', 'Female', 'Trans'].forEach(optionValue => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = type;
            input.name = 'gender-options';
            input.value = optionValue;
            if (optionValue === gender) {
                input.checked = true;
            }
            label.textContent = optionValue;
            container.appendChild(input);
            container.appendChild(label);
        });
    }
});

// Event delegation to handle edit, delete, and arrow buttons
document.getElementById('new-form').addEventListener('click', function(event) {
    event.preventDefault()
    const target = event.target;
    const currentContainer = target.parentElement;

    if (target.classList.contains('edit')) {
        const inputField = currentContainer.querySelector('input');
        inputField.focus();
    } else if (target.classList.contains('delete')) {
        currentContainer.remove();
    } else if (target.classList.contains('arrow-down')) {
        const nextContainer = currentContainer.nextElementSibling;
        if (nextContainer) {
            currentContainer.parentNode.insertBefore(nextContainer, currentContainer);
        }
    } else if (target.classList.contains('arrow-up')) {
        const prevContainer = currentContainer.previousElementSibling;
        if (prevContainer) {
            currentContainer.parentNode.insertBefore(currentContainer, prevContainer);
        }
    }
});

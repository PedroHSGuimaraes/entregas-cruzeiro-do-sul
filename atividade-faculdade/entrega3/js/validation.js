// js/validation.js
export function validateForm() {
    const name = document.getElementById('name').value.trim();
    const description = document.getElementById('description').value.trim();
    let valid = true;

    document.getElementById('name-error').textContent = '';
    document.getElementById('description-error').textContent = '';

    if (name === '') {
        document.getElementById('name-error').textContent = 'Nome é obrigatório.';
        valid = false;
    }

    if (description === '') {
        document.getElementById('description-error').textContent = 'Descrição é obrigatória.';
        valid = false;
    }

    return valid;
}
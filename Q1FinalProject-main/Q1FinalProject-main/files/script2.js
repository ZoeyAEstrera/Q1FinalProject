document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const sex = document.getElementById('sex').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const reason = document.getElementById('reason').value;

    document.getElementById('displaySex').textContent = sex;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayContact').textContent = contact;
    document.getElementById('displayReason').textContent = reason;

    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('profile').classList.remove('hidden');
});

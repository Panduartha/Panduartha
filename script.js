document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("feedback");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            feedback.textContent = data;
            form.reset();
        })
        .catch(error => {
            feedback.textContent = "Gagal mengirim pesan.";
            console.error('Error:', error);
        });
    });
});

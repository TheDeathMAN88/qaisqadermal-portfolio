(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

document.getElementById('submit-link').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the link from trying to navigate to a new page

    // Get the form and create a FormData object
    var form = document.getElementById('contact-form');
    var data = new FormData(form);

    // Send the form data
    fetch('https://formspree.io/f/xzbldyre', {
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(responseData => {
        if (responseData.ok) {
            console.log('Form successfully submitted');
        } else {
            console.log('Form submission failed');
        }
    })
    .catch(error => console.error('Error:', error));
});



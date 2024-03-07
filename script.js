document.addEventListener('DOMContentLoaded', function() {
    const languageDropdownToggle = document.getElementById('language-dropdown-toggle');
    const languageDropdownContent = document.getElementById('language-dropdown-content');
    const languageTextbox = document.getElementById('selected-language');


    languageTextbox.value = "English";

    languageDropdownToggle.addEventListener('click', function() {
        languageDropdownContent.classList.toggle('clicked');
    });


    window.addEventListener('click', function(event) {
        if (!event.target.matches('#language-dropdown-toggle')) {
            if (languageDropdownContent.classList.contains('clicked')) {
                languageDropdownContent.classList.remove('clicked');
            }
        }
    });


    languageDropdownContent.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            languageTextbox.value = event.target.textContent;
            languageDropdownContent.classList.remove('clicked');
        }
    });
});

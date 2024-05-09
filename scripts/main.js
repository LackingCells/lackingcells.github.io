document.querySelector(".light_dark label input").addEventListener("change", function () {
    if (this.checked) { //Light mode
        //Variables
        document.documentElement.style.setProperty('--primary', '#f0ece4');
        document.documentElement.style.setProperty('--secondary', '#222222');
        document.documentElement.style.setProperty('--text_color', '#000000');

        //Background gradient
        
    } else { //Dark mode
        //Variables
        document.documentElement.style.setProperty('--primary', '#222222');
        document.documentElement.style.setProperty('--secondary', '#f0ece4');
        document.documentElement.style.setProperty('--text_color', '#FFFFFF');
        
        //Background gradient
    }
})
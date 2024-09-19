function validateForm() {
    // Check if at least one checkbox is selected
    const subjects = document.querySelectorAll('input[type="checkbox"]');
    let checked = false;
    subjects.forEach(subject => {
        if (subject.checked) {
            checked = true;
        }
    });

    if (!checked) {
        alert("Please select at least one subject.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission if all conditions are
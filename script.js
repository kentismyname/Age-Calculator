function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    if (!dobInput || dobInput.length !== 6) {
        alert("Please enter your date of birth in MMDDYY format.");
        return;
    }

    // Extract month, day, and year from the input
    const month = parseInt(dobInput.substring(0, 2), 10);
    const day = parseInt(dobInput.substring(2, 4), 10);
    const year = parseInt(dobInput.substring(4, 6), 10) + 1900;

    // Create a Date object with the extracted values
    const dob = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    // Adjust age if the birthday hasn't occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').textContent = `Your age is: ${age} years`;
}

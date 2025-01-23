// Function to calculate the total charges for Car
function calculateTotalChargesForCar() {
    const carPrice = 100; // Price per car
    const carPersons = document.getElementsByClassName('car-quantity')[0].value; // Get the number of persons selected
    const carDate = document.getElementById('car-date').value; // Get the selected date for the car

    if (!carDate) {
        alert('Please select a date for the car booking.');
        return;
    }

    // Calculate total charges for car booking
    const totalCarCharges = carPrice * carPersons;

    // Display the total charges
    alert(`Total Charges for Car: $${totalCarCharges}`);
}

// Adding event listener to the 'Book a Car' button
document.querySelector('.btn-primary-car-booking').addEventListener('click', calculateTotalChargesForCar);


// Function to calculate the total charges for Bus
function calculateTotalChargesForBus() {
    const BusPrice = 3.70 // Price per person in bus
    const BusPersons = document.getElementsByClassName('bus-quantity')[0].value; // Get the number of persons selected
    const BusDate = document.getElementById('bus-date').value; // Get the selected date for the bus

    if (!BusDate) {
        alert('Please select a date for the bus booking.');
        return;
    }

    // Calculate total charges for bus booking
    const totalCarCharges = BusPrice * BusPersons;

    // Display the total charges
    alert(`Total Charges for Bus: $${totalCarCharges}`);
}

// Adding event listener to the 'Book a Car' button
document.querySelector('.btn-primary-bus-booking').addEventListener('click', calculateTotalChargesForBus);

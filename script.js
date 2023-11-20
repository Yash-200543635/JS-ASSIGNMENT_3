document.addEventListener('DOMContentLoaded', function() {
    // Add your student ID and name dynamically
    document.getElementById('student-info').innerText = 'Student ID: 200543635 | Name: Yash Sharma';

    // Capture form values and output pizza description
    document.getElementById('order-btn').addEventListener('click', function() {
        const pizzaSize = document.getElementById('pizza-size').value;
        const crustType = document.getElementById('crust').value;
        const toppings = document.getElementById('toppings').value;
        const delivery = document.getElementById('delivery').checked ? 'with delivery' : 'for pickup';

        // Create Pizza object using a class
        const pizza = new Pizza(pizzaSize, crustType, toppings, delivery);

        // Output pizza description to the HTML page
        document.getElementById('order-summary').innerText = pizza.getDescription();
    });
});

// Pizza class definition
class Pizza {
    constructor(size, crust, toppings, delivery) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.delivery = delivery;
    }

    getDescription() {
        return `You ordered a ${this.size} pizza with ${this.crust} crust, ${this.toppings} toppings, ${this.delivery}.`;
    }
}

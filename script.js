document.addEventListener("DOMContentLoaded", function () {
    fetch("collection.json") // Load the JSON file
        .then(response => response.json()) // Convert response to JavaScript object
        .then(data => {
            const container = document.getElementById("collection"); // Find the container in HTML
            data.forEach(item => { // Loop through each item in the JSON file
                let div = document.createElement("div"); // Create a new div for each item
                div.innerHTML = `
                    <h2>${item.Model}</h2>
                    <p>${item.Manufacturer}</p>
                    <p>${item.Engine_Type}</p>
                    <p>${item.sixty}</p>
                    <p>${item.Color}</p>

                    <a href="item-template.html?id=${item.id}">View More</a>
                `; // Insert item data and link
                container.appendChild(div); // Add item to the page
            });
        })
        .catch(error => console.error("Error loading JSON:", error)); // Show errors if loading fails
});

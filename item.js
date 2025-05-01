document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    fetch("collection.json")
        .then(response => response.json())
        .then(data => {
            const item = data.find(item => item.id === itemId);
            if (item) {
                // Update visible page content
                document.getElementById("item-brand-title").innerText = item.Manufacturer;
                document.getElementById("item-model-title").innerText = item.Model;
                document.getElementById("item-model").innerText = item.Model;
                document.getElementById("item-image").src = `images/${item.images}`;
                document.getElementById("item-Manufacturer").innerText = item.Manufacturer;
                document.getElementById("item-engine").innerText = item.Engine_Type;
                document.getElementById("item-color").innerText = item.Color;
                document.getElementById("item-0to60").innerText = item.sixty;
                document.getElementById("item-description").innerText = item.description;
                


                // Create JSON-LD metadata
                const jsonLd = {
                    "@context": "https://schema.org/",
                    "@type": "Product",
                    "model": item.Model,
                    "manufacturer": item.Manufacturer
                };

                // Insert JSON-LD into the <head> of the document
                const script = document.createElement("script");
                script.type = "application/ld+json";
                script.textContent = JSON.stringify(jsonLd);
                document.head.appendChild(script);
            }
        })
        .catch(error => console.error("Error loading JSON:", error));
});

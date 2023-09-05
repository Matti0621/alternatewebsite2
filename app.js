// ...

// Function to populate the HTML with class information
function populateClasses() {
    const classList = document.getElementById("class-list");
    
    // Iterate through the classes in the JSON data and create list items with links
    jsonData.classes.forEach((cls) => {
      const listItem = document.createElement("li");
      const classLink = document.createElement("a");
      
      // Set the class name as the link text
      classLink.textContent = cls.name;
      
      // Define the link's href attribute (where it redirects to)
      // You can replace "class-details.html" with the actual URL of the class details page
      classLink.href = `class-details.html?id=${cls.id}`;
      
      // Open the link in a new tab/window
      classLink.target = "_blank";
      
      // Append the class link to the list item
      listItem.appendChild(classLink);
      
      // Append the list item to the class list
      classList.appendChild(listItem);
    });
  }
  
  // ...
  
document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.classList.add('javascript');

    document.querySelectorAll('input[type=radio][data-showfieldset], input[type=checkbox][data-showfieldset]').forEach(function (showHide) {
        const targetFieldsetId = showHide.dataset.showfieldset;
        const targetFieldset = document.getElementById(targetFieldsetId);

        showHide.addEventListener('change', function () {
            if (targetFieldset) {
                targetFieldset.classList.remove('hidden');
                const inputs = targetFieldset.querySelectorAll('input');
                inputs.forEach(function (input) {
                    input.required = true;
                });
            }
        });
    });


    document.querySelectorAll('input[type=radio][data-hidefieldset], input[type=checkbox][data-hidefieldset]').forEach(function (showHide) {
        const targetFieldsetIds = showHide.dataset.hidefieldset.split(' ');
        targetFieldsetIds.forEach(function (targetFieldsetId) {
            const targetFieldset = document.getElementById(targetFieldsetId);
            if (targetFieldset) {
                showHide.addEventListener('change', function () {
                    targetFieldset.classList.add('hidden');
                    const inputs = targetFieldset.querySelectorAll('input');
                    inputs.forEach(function (input) {
                        input.required = false;
                    });
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the search input element
    const searchInput = document.getElementById("zoeken");

    // Get the section with the hidden items
    const hiddenSection = document.querySelector("section.hidden");

    // Get all the buttons inside the hidden section
    const buttons = hiddenSection.querySelectorAll("button");

    // Add event listener for input event on search input
    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase().trim(); // Get the search text, trim whitespace, and convert to lowercase

        // Iterate over all buttons in the hidden section
        buttons.forEach(function (button) {
            const buttonText = button.textContent.toLowerCase(); // Get the text content of the button, convert to lowercase
            if (buttonText.includes(searchText)) {
                hiddenSection.classList.remove("hidden"); // Show the hidden section
                button.classList.remove("hidden"); // Show the button containing the matching text
            } else {
                button.classList.add("hidden"); // Hide the button if it does not match the search text
            }
        });

        // Hide the hidden section if no match is found
        if (!hiddenSection.querySelector("button:not(.hidden)")) {
            hiddenSection.classList.add("hidden");
        }
    });
});



// function toggleShirtList() {
//     var newList = document.getElementById("shirtList");
//     if (newList.style.display === "none") {
//         newList.style.display = "block";
//     } else {
//         newList.style.display = "none";
//     }
// }

// function toggleTruiList() {
//     var truiList = document.getElementById("truiList");
//     if (truiList.style.display === "none") {
//         truiList.style.display = "block";
//     } else {
//         truiList.style.display = "none";
//     }
// }

// function toggleList(id) {
//     var list = document.getElementById(id);
//     list.classList.toggle('hidden');
// }S
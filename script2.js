document.addEventListener("DOMContentLoaded", function () {
    const clothingTypeRadios = document.querySelectorAll('input[name="clothingType"]');
    const upperOptions = document.getElementById('upperOptions');
    const lowerOptions = document.getElementById('lowerOptions');
    const underwearOptions = document.getElementById('underwearOptions');
    const colorOptions = document.getElementById('colorOptions');
    const resultSection = document.getElementById('result');

    clothingTypeRadios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            if (radio.checked) {
                hideAllOptions();
                const selectedValue = radio.value;
                if (selectedValue === 'upper') {
                    upperOptions.classList.remove('hidden');
                } else if (selectedValue === 'lower') {
                    lowerOptions.classList.remove('hidden');
                } else if (selectedValue === 'underwear') {
                    underwearOptions.classList.remove('hidden');
                }
                colorOptions.classList.remove('hidden');
            }
        });
    });

    function hideAllOptions() {
        upperOptions.classList.add('hidden');
        lowerOptions.classList.add('hidden');
        underwearOptions.classList.add('hidden');
        colorOptions.classList.add('hidden');
    }

    clothingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const selectedClothingType = document.querySelector('input[name="clothingType"]:checked');
        const selectedColor = document.querySelectorAll('input[name="color"]:checked');
        let selectedClothingItems = [];

        if (selectedClothingType && selectedColor.length > 0) {
            const clothingTypeValue = selectedClothingType.value;
            if (clothingTypeValue === 'upper') {
                selectedClothingItems = document.querySelectorAll('input[name="upperClothing"]:checked');
            } else if (clothingTypeValue === 'lower') {
                selectedClothingItems = document.querySelectorAll('input[name="lowerClothing"]:checked');
            } else if (clothingTypeValue === 'underwear') {
                selectedClothingItems = document.querySelectorAll('input[name="underwear"]:checked');
            }
        }

        if (selectedClothingType && selectedColor.length > 0 && selectedClothingItems.length > 0) {
            let resultText = '<h2>Resultaten</h2>';
            selectedClothingItems.forEach(function (item) {
                selectedColor.forEach(function (color) {
                    resultText += `<div><input type="radio" name="selectedOption" id="${color.id}-${item.id}" value="${color.id}-${item.id}">
                        <label for="${color.id}-${item.id}">${color.id} ${item.id}</label></div>`;
                });
            });
            resultText += '<button onclick="showSelectedResult()">Verzenden</button>';
            resultSection.innerHTML = resultText;
            resultSection.classList.remove('hidden');
        } else {
            resultSection.innerHTML = '<p>Selecteer alstublieft alle opties voordat u verstuurt.</p>';
            resultSection.classList.remove('hidden');
        }
    });

    window.showSelectedResult = function () {
        const selectedOption = document.querySelector('input[name="selectedOption"]:checked');
        if (selectedOption) {
            const [color, clothing] = selectedOption.id.split('-');
            resultSection.innerHTML = `<h2>Geselecteerde Resultaat</h2><p>${color} ${clothing}</p>`;
            showMatches(color, clothing);
        }
    };

    function showMatches(color, clothing) {
        const matches = getMatches(color, clothing);
        let matchText = '<h2>Overeenkomsten</h2>';
        if (matches.length > 0) {
            matches.forEach(match => {
                matchText += `<div><input type="radio" name="matchedOption" id="${match}" value="${match}">
                    <label for="${match}">${match}</label></div>`;
            });
            matchText += '<button onclick="submitMatch()">Match Verzenden</button>';
        } else {
            matchText = '<p>Geen overeenkomsten gevonden.</p>';
        }
        resultSection.innerHTML = matchText;
        resultSection.classList.remove('hidden');
    }

    function submitMatch() {
        const selectedMatch = document.querySelector('input[name="matchedOption"]:checked');
        if (selectedMatch) {
            resultSection.innerHTML = `<h2>Geselecteerde Match</h2><p>${selectedMatch.value}</p>`;
        }
    }

    function getMatches(color, clothing) {
        // Definieer hier je overeenkomende regels
        const matches = {
            'wit-t-shirt': ['blauwe-jeans', 'zwarte-rok'],
            'zwart-t-shirt': ['blauwe-jeans', 'zwarte-broek'],
            'rood-t-shirt': ['blauwe-jeans', 'zwarte-rok'],
            'blauw-t-shirt': ['blauwe-jeans', 'zwarte-broek'],
            'groen-t-shirt': ['blauwe-jeans', 'zwarte-rok']
            // Voeg meer overeenkomende regels toe indien nodig
        };
        const key = `${color}-${clothing}`;
        return matches[key] || [];
    }
});

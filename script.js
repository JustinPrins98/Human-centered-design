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
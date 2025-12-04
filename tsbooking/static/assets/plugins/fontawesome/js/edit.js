<script>
    document.addEventListener("DOMContentLoaded", function () {
        var editModal = document.getElementById("editModal");
        var closeBtns = document.getElementsByClassName("close");
        var editForm = document.getElementById("editTaxForm");
        
        // Get all edit buttons
        var editBtns = document.getElementsByClassName("editBtn");

        // Loop through edit buttons
        for (var i = 0; i < editBtns.length; i++) {
            editBtns[i].addEventListener("click", function () {
                // Get tax data from button attributes
                var taxId = this.getAttribute("data-id");
                var taxName = this.getAttribute("data-name");
                var taxRate = this.getAttribute("data-rate");

                // Fill the form with existing data
                document.getElementById("editTaxId").value = taxId;
                document.getElementById("editName").value = taxName;
                document.getElementById("editRate").value = taxRate;

                // Show the modal
                editModal.style.display = "block";
            });
        }

        // Close modal when clicking the close button
        for (var i = 0; i < closeBtns.length; i++) {
            closeBtns[i].onclick = function () {
                editModal.style.display = "none";
            };
        }

        // Close modal when clicking outside of it
        window.onclick = function (event) {
            if (event.target == editModal) {
                editModal.style.display = "none";
            }
        };

        // Handle form submission
        editForm.onsubmit = function (event) {
            event.preventDefault(); // Prevent default form submission
            
            var taxId = document.getElementById("editTaxId").value;
            var taxName = document.getElementById("editName").value;
            var taxRate = document.getElementById("editRate").value;

            fetch(`/tax_edit/${taxId}/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-CSRFToken": document.querySelector("[name=csrfmiddlewaretoken]").value
                },
                body: `name=${encodeURIComponent(taxName)}&rate=${encodeURIComponent(taxRate)}`
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    location.reload();  // Reload page after success
                } else {
                    alert("Error updating tax!");
                }
            })
            .catch(error => console.error("Error:", error));
        };
    });
</script>

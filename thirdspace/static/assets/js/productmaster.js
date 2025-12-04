      <script>
function calculateCostPrice() {
        let acp = parseFloat(document.getElementById("acp").value) || 0;
        let taxSelect = document.getElementById("tax");
        let selectedOption = taxSelect.options[taxSelect.selectedIndex];
        let gstRate = parseFloat(selectedOption.getAttribute("data-rate")) || 0;

        let gstAmount = (acp * gstRate) / 100;
        let costPrice = acp + gstAmount;

        document.getElementById("costprice").value = costPrice.toFixed(2);
    }

    document.getElementById("acp").addEventListener("input", calculateCostPrice);
    document.getElementById("tax").addEventListener("change", calculateCostPrice);

          // Get the modal
          var modal = document.getElementById("createproductModal");
          
          // Get the button that opens the modal
          var btn = document.getElementById("myBtn");
          
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          
          var span = document.querySelector(".closeModal");
         
          // When the user clicks the button, open the modal 
          btn.onclick = function() {
            modal.style.display = "block";
          }


          function closeModal() {
    var modal = document.getElementById("createproductModal");
    if (modal) {
        modal.style.display = "none";
    }
}

          
          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
            modal.style.display = "none";
          }
          
          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
          </script>

<script>  


  document.addEventListener("DOMContentLoaded", function() {
    var editButtons = document.querySelectorAll(".editBtn");
    var span = document.getElementsByClassName("close-edit")[0];

    editButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var productId = btn.getAttribute("data-id");
            if (!productId) {
                console.error("Product ID missing");
                return;
            }

            console.log("Product Data:", {
                name: btn.getAttribute("data-name"),
                category: btn.getAttribute("data-category"),
                department: btn.getAttribute("data-description"),
                tax: btn.getAttribute("data-tax"),
                acp:btn.getAttribute("data-acp"),
                costprice:btn.getAttribute("data-costprice"),
                price: btn.getAttribute("data-price"),
            });

            document.getElementById("edit_name").value = btn.getAttribute("data-name") || '';
            document.getElementById("edit_category").value = btn.getAttribute("data-category") || '';
            document.getElementById("edit_tax").value = btn.getAttribute("data-tax") || '';
            document.getElementById("edit_acp").value = btn.getAttribute("data-acp") || '';
            document.getElementById("edit_costprice").value = btn.getAttribute("data-costprice") || '';
            document.getElementById("edit_price").value = btn.getAttribute("data-price") || '';
            document.getElementById("edit_description").value = btn.getAttribute("data-description") || '';

            document.getElementById("editProductForm").action = `/product/edit/${productId}/`;
            document.getElementById("editProductModal").style.display = "block";
        });
    });

    document.querySelector(".close-edit").addEventListener("click", function() {
        document.getElementById("editProductModal").style.display = "none";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const acpInput = document.getElementById("edit_acp");
    const taxInput = document.getElementById("edit_tax");
    const otherCostsInput = document.getElementById("edit_costprice"); // Assuming other costs are entered here
    const acpWithGstField = document.getElementById("acp_with_gst");
    const costPriceField = document.getElementById("edit_costprice");

    function calculateValues() {
        const acp = parseFloat(acpInput.value) || 0;
        const gstRate = parseFloat(taxInput.options[taxInput.selectedIndex].text) || 0;
        const otherCosts = parseFloat(otherCostsInput.value) || 0;

        const acpWithGst = acp + (acp * gstRate / 100);
        const costPrice = acpWithGst + otherCosts;

        acpWithGstField.value = acpWithGst.toFixed(2);
        costPriceField.value = costPrice.toFixed(2);
    }

    acpInput.addEventListener("input", calculateValues);
    taxInput.addEventListener("change", calculateValues);
    otherCostsInput.addEventListener("input", calculateValues);
});
</script>

<script>
    // Global functions for modal control
    function closeModal() {
        document.getElementById("createproductModal").style.display = "none";
        document.body.classList.remove("modal-open"); // Remove class on close
    }

    function closeEditModal() {
        document.getElementById("editProductModal").style.display = "none";
        document.body.classList.remove("modal-open"); // Remove class on close
    }

    // Add Product Modal Logic
    document.addEventListener("DOMContentLoaded", function () {
        var addModal = document.getElementById("createproductModal");
        var addBtn = document.getElementById("myBtn");
        var addCloseSpan = addModal.querySelector(".close");

        addBtn.onclick = function () {
            addModal.style.display = "block";
            document.body.classList.add("modal-open"); // Add class on open
        };

        addCloseSpan.onclick = function () {
            closeModal();
        };

        // When the user clicks anywhere outside of the add modal, close it
        window.addEventListener("click", function (event) {
            if (event.target == addModal) {
                closeModal();
            }
        });

        // Calculate Cost Price for Add Product Modal (existing logic)
        const acpInputAdd = document.getElementById("acp");
        const taxSelectAdd = document.getElementById("tax");
        const costPriceInputAdd = document.getElementById("costprice");

        function calculateCostPriceAdd() {
            let acp = parseFloat(acpInputAdd.value) || 0;
            let selectedOption = taxSelectAdd.options[taxSelectAdd.selectedIndex];
            let gstRate = parseFloat(selectedOption.getAttribute("data-rate")) || 0;

            let gstAmount = (acp * gstRate) / 100;
            let costPrice = acp + gstAmount;

            costPriceInputAdd.value = costPrice.toFixed(2);
        }

        acpInputAdd.addEventListener("input", calculateCostPriceAdd);
        taxSelectAdd.addEventListener("change", calculateCostPriceAdd);
    });

    // Edit Product Modal Logic
    document.addEventListener("DOMContentLoaded", function () {
        var editButtons = document.querySelectorAll(".editBtn");
        var editModal = document.getElementById("editProductModal");
        var editCloseSpan = editModal.querySelector(".close-edit");

        editButtons.forEach(function (btn) {
            btn.addEventListener("click", function () {
                var productId = btn.getAttribute("data-id");
                if (!productId) {
                    console.error("Product ID missing");
                    return;
                }

                // Populate form fields with data attributes (existing logic)
                document.getElementById("edit_name").value = btn.getAttribute("data-name") || '';
                document.getElementById("edit_category").value = btn.getAttribute("data-category") || '';
                document.getElementById("edit_tax").value = btn.getAttribute("data-tax") || '';
                document.getElementById("edit_acp").value = btn.getAttribute("data-acp") || '';
                document.getElementById("edit_costprice").value = btn.getAttribute("data-costprice") || '';
                document.getElementById("edit_price").value = btn.getAttribute("data-price") || '';
                document.getElementById("edit_description").value = btn.getAttribute("data-description") || '';
                document.getElementById("edit_eancode").value = btn.getAttribute("data-eancode") || '';

                // Set form action for the edit form (existing logic)
                document.getElementById("editProductForm").action = `/product/edit/${productId}/`;
                editModal.style.display = "block";
                document.body.classList.add("modal-open"); // Add class on open
            });
        });

        editCloseSpan.onclick = function () {
            closeEditModal();
        };

        // When the user clicks anywhere outside of the edit modal, close it
        window.addEventListener("click", function (event) {
            if (event.target == editModal) {
                closeEditModal();
            }
        });

        // Calculate Cost Price for Edit Product Modal (existing logic)
        const acpInputEdit = document.getElementById("edit_acp");
        const taxSelectEdit = document.getElementById("edit_tax");
        const costPriceInputEdit = document.getElementById("edit_costprice");

        function calculateCostPriceEdit() {
            let acp = parseFloat(acpInputEdit.value) || 0;
            let selectedOption = taxSelectEdit.options[taxSelectEdit.selectedIndex];
            let gstRate = parseFloat(selectedOption.getAttribute("data-rate")) || 0;

            let gstAmount = (acp * gstRate) / 100;
            let costPrice = acp + gstAmount;

            costPriceInputEdit.value = costPrice.toFixed(2);
        }

        acpInputEdit.addEventListener("input", calculateCostPriceEdit);
        taxSelectEdit.addEventListener("change", calculateCostPriceEdit);

        // Call it initially when the modal opens to ensure correct value if fields are pre-filled
        editButtons.forEach(function(btn) {
            btn.addEventListener("click", function() {
                calculateCostPriceEdit();
            });
        });
    });
</script>>
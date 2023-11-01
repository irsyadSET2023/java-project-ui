function openModal(action) {
  const modal = document.getElementById("myModal");
  const modalTitle = document.getElementById("modalTitle");
  const amountInput = document.getElementById("amountInput");
  const confirmButton = document.getElementById("confirmButton");
  const transactionData = document.querySelector(".bordered-table tbody");

  console.log(transactionData);

  if (action === "deposit") {
    modalTitle.innerText = "Deposit Amount";
    confirmButton.innerText = "Deposit";
    confirmButton.onclick = function () {
      // Add logic to handle deposit
      const amount = parseFloat(amountInput.value);
      // Add logic to update the balance
      console.log("Deposit:", amount);
      transactionData.insertAdjacentHTML(
        "beforeend",
        ` <tr>
                <td class="table-content">2023-10-01</td>
                <td class="table-content">-</td>
                <td class="table-content">-</td>
                <td class="table-content">$1,000.00</td>
              </tr>`
      );
      closeModal();
    };
  } else if (action === "withdraw") {
    modalTitle.innerText = "Withdraw Amount";
    confirmButton.innerText = "Withdraw";
    confirmButton.onclick = function () {
      // Add logic to handle withdrawal
      const amount = parseFloat(amountInput.value);
      // Add logic to update the balance
      console.log("Withdraw:", amount);
      closeModal();
    };
  }

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// You can add logic to handle deposit and withdrawal in the respective onclick handlers.

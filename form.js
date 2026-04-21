document.addEventListener('DOMContentLoaded', function () {
    addRow(); // Sayfa yüklendiğinde bir satır eklenir
});

// Yeni satır eklemek için fonksiyon
function addRow() {
    const tableBody = document.getElementById("inventory-table-body");

    const row = document.createElement("tr");

    // Ürün Kodu
    const codeCell = document.createElement("td");
    const codeInput = document.createElement("input");
    codeInput.type = "text";
    codeInput.name = "product_code[]";
    codeInput.classList.add("form-input");
    codeCell.appendChild(codeInput);
    row.appendChild(codeCell);

    // Ürün Adı
    const nameCell = document.createElement("td");
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "product_name[]";
    nameInput.classList.add("form-input");
    nameCell.appendChild(nameInput);
    row.appendChild(nameCell);

    // Aylara göre sayım inputları
    for (let i = 0; i < 12; i++) {
        const monthCell = document.createElement("td");
        const monthInput = document.createElement("input");
        monthInput.type = "number";
        monthInput.name = `month_${i}[]`;
        monthInput.min = "0";
        monthInput.classList.add("form-input");
        monthCell.appendChild(monthInput);
        row.appendChild(monthCell);
    }

    // Silme butonu
    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.type = "button";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = () => row.remove(); // Satırı siler
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    // Satırı tabloya ekle
    tableBody.appendChild(row);
}

// Formu göndermeye çalışırken verileri konsola yazdırma
document.getElementById('inventory-form').addEventListener('submit', function (event) {
    event.preventDefault();  // Formu göndermeyi engelle

    const formData = new FormData(event.target);
    const data = {};

    formData.forEach((value, key) => {
        if (!data[key]) {
            data[key] = [];
        }
        data[key].push(value);
    });

    // Veriyi konsola yazdır
    console.log(data);
    alert("Envanter kaydınız kaydedildi!");
});
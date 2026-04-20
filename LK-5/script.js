document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const hasil = document.getElementById("hasil");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const nohp = document.getElementById("nohp").value.trim();
        const kategori = document.getElementById("kategori").value;
        const pesan = document.getElementById("pesan").value.trim();

        // Validasi input kosong
        if (nama === "" || email === "" || nohp === "" || kategori === "" || pesan === "") {
            alert("Semua field harus diisi!");
            return;
        }

        // Validasi email
        if (!email.includes("@")) {
            alert("Email tidak valid!");
            return;
        }

        // Tampilkan hasil
        hasil.innerHTML = `
            <div style="border:1px solid #ccc; padding:10px; margin-top:20px;">
                <h3>Data yang Dikirim:</h3>
                <p><strong>Nama:</strong> ${nama}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telepon:</strong> ${nohp}</p>
                <p><strong>Kategori:</strong> ${kategori}</p>
                <p><strong>Pesan:</strong> ${pesan}</p>
            </div>
        `;

        alert("Data berhasil dikirim!");
        form.reset();
    });

    document.getElementById("nama").addEventListener("input", function () {
        console.log("user sedang mengetik nama");
    });

    // To Do List Logic
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #ccc;";
            
            const span = document.createElement("span");
            span.textContent = taskText;

            // klik task untuk tandai selesai (TAMBAHAN)
            span.addEventListener("click", function () {
                span.classList.toggle("done");
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Hapus";
            deleteBtn.style.cssText = "background: #ff4d4d; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 3px;";
            
            deleteBtn.addEventListener("click", function () {
                taskList.removeChild(li);
            });

            li.appendChild(span);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);

            taskInput.value = ""; // Clear input
        } else {
            alert("Tugas tidak boleh kosong!");
        }
    });

    // Tambah dengan menekan Enter
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addTaskBtn.click();
        }
    });

    // ==============================
    // DARK MODE & LIGHT MODE (TAMBAHAN)
    // ==============================
    const toggleBtn = document.getElementById("theme-toggle");

    if (toggleBtn) {
        // Cek mode yang tersimpan
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            toggleBtn.textContent = "☀️ Light Mode";
        }

        toggleBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                toggleBtn.textContent = "☀️ Light Mode";
                localStorage.setItem("theme", "dark");
            } else {
                toggleBtn.textContent = "🌙 Dark Mode";
                localStorage.setItem("theme", "light");
            }
        });
    }
});
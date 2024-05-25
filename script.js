// Simulasi data pengalaman
let experiences = [];

// Fungsi untuk menampilkan data pengalaman di halaman utama
function displayExperiences() {
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = '';

    experiences.forEach((experience, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${experience.jobTitle}</strong> at ${experience.company} (${experience.year})
                             <button onclick="editExperienceForm(${index})">Edit</button>
                             <button onclick="deleteExperience(${index})">Delete</button>`;
        experienceList.appendChild(listItem);
    });
}

// Fungsi untuk menambahkan data pengalaman
function addExperience() {
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const year = document.getElementById('year').value;

    experiences.push({ jobTitle, company, year });
    displayExperiences();
}

// Fungsi untuk menampilkan form edit data pengalaman
function editExperienceForm(index) {
    const experience = experiences[index];
    document.getElementById('job-title').value = experience.jobTitle;
    document.getElementById('company').value = experience.company;
    document.getElementById('year').value = experience.year;

    // Tambahkan logika untuk menyimpan index yang sedang diubah
}

// Fungsi untuk menyimpan perubahan data pengalaman
function editExperience() {
    // Tambahkan logika untuk menyimpan perubahan berdasarkan index yang telah disimpan
    displayExperiences();
}

// Fungsi untuk menghapus data pengalaman
function deleteExperience(index) {
    experiences.splice(index, 1);
    displayExperiences();
}

// Tampilkan data pengalaman saat halaman dimuat
displayExperiences();

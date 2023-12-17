const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const fullScreenNavBar = document.getElementById('fullScreenNavBar');

menuIcon.addEventListener('click', () => {
    fullScreenNavBar.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    menuIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    `;
});

closeIcon.addEventListener('click', () => {
    fullScreenNavBar.classList.add('hidden');
    document.body.style.overflow = 'auto';
    menuIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 7.5h16.5M8.25 12h7.5M11.25 16.5h2.25" />
        </svg>
    `;
});


// Main Overlay
const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const overlay = document.getElementById('overlay');
const svgIcon = document.querySelector('.items-center svg');

openButton.addEventListener('click', () => {
  overlay.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
  overlay.classList.add('hidden');
});

svgIcon.addEventListener('click', () => {
  overlay.classList.add('hidden');
});



// Task Overlay
const openTask = document.getElementById('openTask');
const closeTask = document.getElementById('closeTask');
const taskOverlay = document.getElementById('taskOverlay');
const TasksvgIcon = document.querySelector('.items-start svg');


openTask.addEventListener('click', () => {
  taskOverlay.classList.remove('hidden');
});

closeTask.addEventListener('click', () => {
  taskOverlay.classList.add('hidden');
});

TasksvgIcon.addEventListener('click', () => {
  taskOverlay.classList.add('hidden');
});


// Files
    function openFileInput() {
        document.getElementById('upload').click();
    }

    function handleFileChange(event) {
        const fileInput = event.target;
        const selectedFile = fileInput.files[0];
        
        // You can handle the selected file here, for example, display its name
        if (selectedFile) {
            alert(`Selected file: ${selectedFile.name}`);
        }
    }




// 

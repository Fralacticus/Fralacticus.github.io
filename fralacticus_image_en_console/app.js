// Références aux éléments
const dragDropArea = document.getElementById('dragDropArea');
const fileInput = document.getElementById('fileInput');
const originalImage = document.getElementById('originalImage');
const fileNameText = document.getElementById('fileNameText');
const rawTextArea = document.getElementById('rawText');
const outputArea = document.getElementById('outputArea');
let term; // Instance du terminal

// Empêcher le comportement par défaut
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dragDropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

// Mise en évidence de la zone de dépôt
['dragenter', 'dragover'].forEach(eventName => {
  dragDropArea.classList.add('highlight');
});

['dragleave', 'drop'].forEach(eventName => {
  dragDropArea.classList.remove('highlight');
});

// Gestion des fichiers déposés
dragDropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;

  if (files.length > 0) {
    const file = files[0];
    if (file.type.startsWith('image/')) {
      processImageFile(file);
    } else {
      alert('Veuillez déposer un fichier image.');
    }
  }
}

// Gestion du clic sur la zone de glisser-déposer
dragDropArea.addEventListener('click', () => {
  fileInput.click(); // Déclenche le clic sur l'input caché
});

// Gestion des fichiers sélectionnés via l'input
fileInput.addEventListener('change', handleFileSelect, false);

function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) {
    if (file.type.startsWith('image/')) {
      processImageFile(file);
    } else {
      alert('Veuillez sélectionner un fichier image.');
    }
  }
}

function processImageFile(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    originalImage.src = e.target.result;
    fileNameText.textContent = file.name;

    // Assurer une mise à l'échelle en "nearest neighbor"
    originalImage.style.imageRendering = 'pixelated';

    // Après le chargement de l'image, la traiter
    originalImage.onload = function() {
      processImage(originalImage);
    };
  };
  reader.readAsDataURL(file);
}

function processImage(img) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  // Définir la taille du canvas selon l'image
  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  // Dessiner l'image sur le canvas
  context.imageSmoothingEnabled = false;
  context.drawImage(img, 0, 0);

  // Obtenir les données de l'image
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

  // Générer l'art ANSI
  const ansiArt = convertImageToAnsiArt(imageData);

  // Afficher l'art ANSI dans le terminal
  displayAnsiArt(ansiArt, canvas.width, canvas.height);

  // Afficher les séquences ANSI brutes
  rawTextArea.value = ansiArt;
}

function convertImageToAnsiArt(imageData) {
  const { data, width, height } = imageData;
  let ansiString = '';

  for (let y = 0; y < height; y += 2) {
    for (let x = 0; x < width; x++) {
      const topPixelIndex = (y * width + x) * 4;
      const bottomPixelIndex = ((y + 1) * width + x) * 4;

      const topPixel = getPixelColor(data, topPixelIndex);
      let bottomPixel;
      if (y + 1 < height) {
        bottomPixel = getPixelColor(data, bottomPixelIndex);
      } else {
        bottomPixel = { r: 0, g: 0, b: 0, a: 0 };
      }

      ansiString += generateAnsiSequence(topPixel, bottomPixel);
    }
    ansiString += '\n';
  }

  return ansiString;
}

function getPixelColor(data, index) {
  return {
    r: data[index],
    g: data[index + 1],
    b: data[index + 2],
    a: data[index + 3],
  };
}

function generateAnsiSequence(topPixel, bottomPixel) {
    const char = '▀'; // Demi-bloc supérieur
  
    // Si les deux pixels sont transparents, ajouter un espace
    if (topPixel.a === 0 && bottomPixel.a === 0) {
      return ' ';
    }
  
    // Pour les pixels transparents, définir la couleur sur le noir
    if (topPixel.a === 0) {
      topPixel = { r: 0, g: 0, b: 0, a: 255 };
    }
    if (bottomPixel.a === 0) {
      bottomPixel = { r: 0, g: 0, b: 0, a: 255 };
    }
  
    const fgColor = `38;2;${topPixel.r};${topPixel.g};${topPixel.b}m`;
    const bgColor = `48;2;${bottomPixel.r};${bottomPixel.g};${bottomPixel.b}m`;
  
    // Générer la séquence ANSI comme dans le script PowerShell
    return `\x1b[${fgColor}\x1b[${bgColor}${char}\x1b[0m`;
  }

function displayAnsiArt(ansiArt, width, height) {
  const cols = width;
  const rows = Math.ceil(height / 2);

  if (term) {
    term.dispose();
  }

  term = new Terminal({
    cols: cols,
    rows: rows,
    convertEol: true,
    theme: {
      background: '#000000',
    },
    fontFamily: 'Consolas, monospace',
    fontSize: 12,
  });
  term.open(outputArea);

  term.write(ansiArt);
}

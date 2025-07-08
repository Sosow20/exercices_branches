function gallery() {
		fetch('<https://jsonplaceholder.typicode.com/photos>').then(response => response.json())
		.then(photos => {
			const gallery = document.getElementById('gallery');
			photos.slice(0, 50).forEach(photo => {
				const photoDiv = document.createElement('div');
				photoDiv.className = 'photo';
				const img = document.createElement('img');
				img.src = photo.thumbnailUrl;
				img.alt = photo.title;
				const title = document.createElement('div');
				title.className = 'photo-title';
				title.textContent = photo.title;
				photoDiv.appendChild(img);
				photoDiv.appendChild(title);
				gallery.appendChild(photoDiv);
			});
		})
	}
	// Appel de la fonction pour afficher les photos au chargement de la page
	window.onload = gallery;
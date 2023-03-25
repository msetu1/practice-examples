// JSON placeholder show photos 
const loadPhotos = () => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhotos(data))
};
const displayPhotos = (photos) => {
    photos.forEach(photo => {
        console.log(photo)
        const photoContainer = document.getElementById('photo-container')
        const photosDiv = document.createElement('div')
        photosDiv.classList.add('col')
        photosDiv.innerHTML = `
        <div class="card">
                        <img src="${photo.url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">ID :${photo.id}</h5>
                            <h5 class="card-title">Title :${photo.title}</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
        `;
        photoContainer.appendChild(photosDiv)

    })

}
loadPhotos()

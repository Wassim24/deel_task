function filterData(albums, keyword) {
    return albums
        .filter(album => album.title && album.title.includes(keyword))
        .map(album => ({title: album.title, id: album.id}));
}

export function fetchAlbums(keyword) {
    return fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(albums => filterData(albums, keyword))
}
async function getAlbums(){
    let albumsData = await fetch('https://jsonplaceholder.typicode.com/albums')
    let content = await albumsData.json()
    let numberOfAlbums = 25
    content = content.splice(0, numberOfAlbums)
    document.getElementById('numberOf').innerHTML = numberOfAlbums
    let list = document.querySelector('.list-group')
    let item
    for(item in content){
        list.innerHTML += `
            <li class="list-group-item">${content[item].title}</li>
        `
    }
}
getAlbums()
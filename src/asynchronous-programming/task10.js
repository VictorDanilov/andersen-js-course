class Musician {
    constructor(albumsUrl) {
      this.albumsUrl = albumsUrl;
    }
  
    async getAlbums() {
      const result = await fetch(this.albumsUrl).then((response) => response.json());
      const albums = await result;
      return console.log(albums);
    }
  }
  
  const musician = new Musician('https://jsonplaceholder.typicode.com/albums');
  musician.getAlbums();
  
// eslint-disable-next-line import/prefer-default-export
export class Musician {
    constructor(albumsUrl) {
      this.url = albumsUrl;
    }
  
    async getAlbums() {
      const response = await fetch(this.url);
      const albums = await response.json();
      return albums;
    }
  }
"use strict";
// 
class FavoriteManager {
    constructor() {
        this.favorites = [];
    }
}
class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item) {
        if (this.favorites.indexOf(item) === -1) {
            this.favorites.push(item);
        }
        this.favorites.sort();
    }
    getFavorites() {
        return this.favorites;
    }
}
class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item) {
        if (this.favorites.indexOf(item) === -1) {
            this.favorites.unshift(item);
        }
    }
    getFavorites() {
        return this.favorites;
    }
}
const movieManager = new MoviesFavoriteManager();
const bookManager = new BooksFavoriteManager();
movieManager.addFavorite("Interstellar");
movieManager.addFavorite("Inception");
movieManager.addFavorite("Interstellar");
bookManager.addFavorite("1984");
bookManager.addFavorite("Brave New World");
bookManager.addFavorite("1984");
console.log("Filmes favoritos:", movieManager.getFavorites());
console.log("Livros favoritos:", bookManager.getFavorites());

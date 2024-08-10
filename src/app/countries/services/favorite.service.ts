import { Injectable } from "@angular/core";
import { Country } from "../interfaces/CountryResponse";

@Injectable({
    providedIn: 'root'
})
export class FavoritesServices {

    private favorites: Country[] = []

    public addFavorite(favorite: Country) {
        const favExist = this.favorites.find(fav => fav.cca3 === favorite.cca3)
        if (!favExist) {
            this.favorites = [...this.favorites, favorite]
            localStorage.setItem('favorites', JSON.stringify(this.favorites))
            return
        };
    };

    get Allfavorites(): Country[] {
        return this.favorites || []
    };
    
    set updateFavorites(newFavorites: Country[]) {
        this.favorites = newFavorites
    }

    public deleteFavoriteById(code: string) {

        this.favorites = this.favorites.filter(fav => fav.cca3 !== code)
        localStorage.setItem('favorites', JSON.stringify(this.favorites))

    }
}
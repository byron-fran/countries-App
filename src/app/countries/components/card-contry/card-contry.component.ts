import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { Country } from '../../interfaces/CountryResponse';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { FavoritesServices } from '../../services/favorite.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card-contry',
  templateUrl: './card-contry.component.html',


})
export class CardContryComponent {
  constructor(
    private favoritesServices: FavoritesServices
  ) { }

  @Input()
  public country?: Country;

  onAddFavorite() {
    this.favoritesServices.addFavorite(this.country!)
  };
  onDeleteFavorite(id: string) {
    this.favoritesServices.deleteFavoriteById(id)
  }

  public isFavorite(): boolean {
    const isFavExist = this.favoritesServices.Allfavorites.find(fav => fav.cca3 === this.country?.cca3);
    return !!isFavExist
  }

}

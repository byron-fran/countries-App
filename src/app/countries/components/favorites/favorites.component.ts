import { Component, OnInit, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { FavoritesServices } from '../../services/favorite.service';
import { Country } from '../../interfaces/CountryResponse';
import { concatWith } from 'rxjs';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {
  sidebarVisible: boolean = false
  public favoritesServices = inject(FavoritesServices);

  constructor() {
  
  }


  ngOnInit(): void {

    if (localStorage.getItem('favorites')) {
      const favorites : Country[] = JSON.parse(localStorage.getItem('favorites')!) || []
      this.favoritesServices.updateFavorites = favorites
      return
    }
  }

  onDelete(code: string) {
    this.favoritesServices.deleteFavoriteById(code)
  }
}

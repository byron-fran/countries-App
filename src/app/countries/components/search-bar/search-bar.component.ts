import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',

})
export class SearchBarComponent implements OnInit, OnDestroy {

  @Input()
  public searchTerm: string = '';

  @Output()
  public newEvent: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  private countriesServices = inject(CountriesService);

  public initialValue: string = ''
  private debouncer = new Subject<string>();
  private debouncerSubscription?: Subscription

  onSearch(title: string) {
 
    this.newEvent.emit(title)
  }
  onKeyPress(value: string) {
    this.debouncer.next(value)
    this.initialValue = value
  };
  onResetCountries () : void {
    
  }
  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(500)
        
      )
      .subscribe(value => this.onDebounce.emit(value))
  };

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe()
  }


}

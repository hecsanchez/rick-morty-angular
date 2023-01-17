import { Component, OnDestroy, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {Observable, Subject, Subscription} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  results: Observable<any> | undefined
  subject = new Subject()
  resultsSubscription = Subscription;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // @ts-ignore
    this.resultsSubscription = this.subject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchText => this.httpClient.get("/api/search?q=" + searchText)))
      .subscribe(data => console.log(data));
  }
  search(value: string): void {
    const searchText = value
    this.subject.next(searchText)
  }
}

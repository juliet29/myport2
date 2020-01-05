import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { topicListClass } from "../_models/topic-list-class";
import { TOPICS } from "../_models/topic-lists";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TopicsService {
  constructor() {}

  getTopics(): Observable<topicListClass[]> {
    return of(TOPICS);
  }

  getTopic(name: string) {
    return this.getTopics().pipe(
      map((topics: topicListClass[]) => console.log(topics))
    );
  }
}

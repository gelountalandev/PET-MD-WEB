import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedbackModel } from '../../models/feedback.model';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private http:HttpClient
  ) { }

  createFeedback(feedbackModel:FeedbackModel): Observable<FeedbackModel> {
    return this.http.post<FeedbackModel>(`${BASE_URL}/feedback`, feedbackModel)
  }

  getFeedbacks(): Observable<FeedbackModel[]> {
    return this.http.get<FeedbackModel[]>(`${BASE_URL}/feedback`)
  }
}

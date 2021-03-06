import {ApplicationRef, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';



const API_URL = 'http://localhost:8090/api';
const EXT_API_KEY = 'wholesale wine';
const EXT_API_URL = 'https://health.axa.ch/hack/api/';
const EXT_HEADERS = new HttpHeaders();
EXT_HEADERS.set('Authorization', 'wholesale wine');


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient, private cdr: ApplicationRef) {
  }


  private doGet(ressource: string) {
    let apiURL = `${API_URL}${ressource}`;

    return this.http.get(apiURL)
      .subscribe(data => {
          console.log(data);
          return data;
        },
        error => console.log('error')
      );
  }

  private doPost(parameters: { resource: any, httpParams: any }) {
    let {resource, httpParams} = parameters;
    let apiURL = `${API_URL}${resource}`;

    return this.http.post(apiURL, httpParams)
      .subscribe(data => data,
        error => console.log(error));
  }

  private doPut(parameters: { resource: any, httpParams: any }) {
    let {resource, httpParams} = parameters;
    let apiURL = `${API_URL}${resource}`;

    return this.http.put(apiURL, httpParams)
      .subscribe(data => data,
        error => console.log(error));
  }

  private doDelete(parameters: { resource: any }) {
    let {resource} = parameters;
    let apiURL = `${API_URL}${resource}`;

    return this.http.delete(apiURL)
      .subscribe(data => data,
        error => console.log(error));
  }


  // Cases API
  public getCasesForPatient(patientId: number) {
    return fetch("../assets/data/cases.json");
  }


  public getAllCases() {
    return this.doGet("../assets/data/cases.json");
  }


  /**
   * SEARCH IN THE EXTERNAL API
   */


  // Drug API
  public searchForDrug(drugname: string): any {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'wholesale wine',
        'Cache-Control': 'no-cache'
      })
    };

      return this.http.get(EXT_API_URL + 'drugs?name=' + drugname, httpOptions);
  }
}

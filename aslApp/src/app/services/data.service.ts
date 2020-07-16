import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class DataService {
    constructor (private http: HttpClient) {}
    getRemoteData(input) {
        return this.http.get("https://cors-anywhere.herokuapp.com/ecf53f1909ef.ngrok.io/videos?text="+input)
    }
}

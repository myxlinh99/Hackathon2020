import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class DataService {
    constructor (private http: HttpClient) {}
    getRemoteData() {
        return this.http.get("http://4f6be0348dee.ngrok.io/videos?text=hello")
    }
}

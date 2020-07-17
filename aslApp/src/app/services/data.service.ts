import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class DataService {
    public prediction;
    constructor (public http: HttpClient) {}
    getRemoteData(input) {
        return this.http.get("https://cors-anywhere.herokuapp.com/ecf53f1909ef.ngrok.io/videos?text="+input)
    }

    saveData(dataToSend){
        let body = new FormData();
        body.append('imgdata', dataToSend);
        var url="http://cors-anywhere.herokuapp.com/ecf53f1909ef.ngrok.io/predict";
        return this.http.post(url, body).toPromise().then(data=>{
            console.log(data['predict']);
            this.prediction = data['predict']
        });
    }
}
//, {headers: new HttpHeaders({"content-Type": "application/json"})}
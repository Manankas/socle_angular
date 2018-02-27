import { Injectable }      from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable()
export class SharedService {
    objectSource: BehaviorSubject<any> = new BehaviorSubject({});    
    constructor() { }

    sendMessage(message: string) {
        this.objectSource.next({ text: message });
    }    
    getMessage(): Observable<any> {
        return this.objectSource.asObservable();
    }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionmanagementService {

  constructor() { }
  public setUsername(input: string): void {
    localStorage.removeItem('Username');
    localStorage.setItem('Username', input.toString());
  }
  public getUsername(): any{
    return localStorage.getItem('Username');
  }
  public setMailid(input: string): void {
    localStorage.removeItem('Mailid');
    localStorage.setItem('Mailid', input.toString());
  }
  public getMailid(): any{
    return localStorage.getItem('Mailid');
  }
}

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  u_email_id:String='';
  u_name:String='';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public router: Router) {}
  
  ngOnInit(){
    this.u_email_id = localStorage.getItem('u_email_id');
    this.u_name = localStorage.getItem('u_name');
  }

  onLogOut()
  {
    if (confirm('Are you sure want to LogOut?')) {
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }

}

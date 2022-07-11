import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user!: { id: string; name: string; };
  
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.user={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name'],
    };
    this.route.params.subscribe((data : Params) =>{
      this.user={
      id:data['id'],
      name:data['name'],
    };
    })
    this.route.queryParams.subscribe(data =>{
      console.log(data)
    })
  }
// onCategoriesClick(){
  // this.router.navigate(['/categories']);
// }
onUserEdit(){
  this.router.navigate(['/users',this.user.id,this.user.name,'edit'],
  {queryParamsHandling:'preserve'}); 
}
}
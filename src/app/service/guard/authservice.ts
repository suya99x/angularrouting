export class Authservice{
    isLoggedin = false;

    login(){
        this.isLoggedin=true;
    }
    logout(){
        this.isLoggedin=false;
    }
    isAuthenticated(){
        return this.isLoggedin;
    }
}
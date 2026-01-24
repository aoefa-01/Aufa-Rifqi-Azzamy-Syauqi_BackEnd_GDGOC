interface User {
  id: number;
  username: string;
  email: string;
}
class UserAccount implements User {
  id: number;
  username: string;
  email: string;
  
  constructor(id: number, username: string, email: string) {
    this.id = id;
    this.username = username;
    this.email = email;
  }
  getProfile(): void {
    console.log(`Username: ${this.username}, Email: ${this.email}`);
  }
}

const dataBaru = new UserAccount(1, "Aufa_Telkom", "aufa@email.com");
dataBaru.getProfile();

const userBaru = new UserAccount(1, "aufa", "aufa@gmail.com");

userBaru.getProfile();
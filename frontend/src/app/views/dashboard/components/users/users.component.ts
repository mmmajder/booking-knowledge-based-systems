import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {UserListItem} from "../../model/UserListItem";
import {User} from "../../../../model/User";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'type', 'requestedChanges'];
  userList: MatTableDataSource<UserListItem> = new MatTableDataSource<UserListItem>();
  propertyOwners: User[] = [];

  constructor(private userService: UserService, private dialog: MatDialog) {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userList.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers() {
    this.userService.getPropertyOwners().subscribe((propertyOwners) => {
      this.propertyOwners = propertyOwners;
      this.userList = new MatTableDataSource<UserListItem>(UsersComponent.usersToUserListItems(this.propertyOwners));
    });
  }

  private static usersToUserListItems(users: User[]): UserListItem[] {
    const userList: UserListItem[] = [];
    for (let i = 0; i < users.length; i++) {
      userList.push(new UserListItem(users[i].email, users[i].firstName + ' ' + users[i].lastName));
    }
    return userList;
  }
}

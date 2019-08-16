import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
  });

  it('should be initialized', inject([UserService], (userService: UserService) => {
    expect(userService).toBeTruthy();
  }));

  it('should UserService have jsonUrl', inject([UserService], (userService: UserService) => {
    expect(typeof userService.jsonUrl).toEqual('string');
  }));

  it('should UserService have a getAll method', inject([UserService], (userService: UserService) => {
    expect(userService.getAll).toBeDefined();
  }));

  it('should UserService getAll method gives back an Observable', inject([UserService], (userService: UserService) => {
    let observable = userService.getAll();
    expect(typeof observable['subscribe'] !== 'undefined').toBeTruthy();
  }));

});

import { TestBed } from '@angular/core/testing';

import { ConnectionTokenInterceptor } from './connection-token.interceptor';

describe('ConnectionTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ConnectionTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ConnectionTokenInterceptor = TestBed.inject(ConnectionTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

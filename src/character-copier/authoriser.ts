export interface Authoriser {
    authorise(name: string, password: string): boolean;
  }
  
  export class AcceptingAuthoriserSpy implements Authoriser {
    private authoriseWasCalled: boolean;
  
    authorise(name, password): boolean {
      this.authoriseWasCalled = true;
      return true;
    }
  
    wasCalled(): boolean {
      return this.authoriseWasCalled;
    }
  }
import { AcceptingAuthoriserSpy } from "./authoriser";
import { CharacterCopier } from "./copier";

describe('The character copier should', () => {
  it('copy a character from the source to the destination', () => {
    const authoriser = new AcceptingAuthoriserSpy();
    const copier = new CharacterCopier(authoriser);

    copier.copy();

    expect(authoriser.wasCalled()).toBeTruthy();
  });
});
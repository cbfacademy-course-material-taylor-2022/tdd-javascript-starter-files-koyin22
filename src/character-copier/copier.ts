import type {Authoriser} from "./authoriser";

export class CharacterCopier {
  authoriser: Authoriser;

  constructor(authoriser: Authoriser) {
    this.authoriser = authoriser;
  }

  copy() {
    this.authoriser.authorise("Clare", "password");
  }
}
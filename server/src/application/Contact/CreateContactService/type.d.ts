import { CreateContactCommand } from "./CreateContactCommand";

export namespace CreateContactServiceProps {
  export interface Impl {
    handle: (command: CreateContactCommand) => Promise<void>;
  }
}

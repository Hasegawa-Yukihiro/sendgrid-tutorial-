import { CreateContactCommand } from "./CreateContactCommand";

interface CreateContactServiceImpl {
  handle: (command: CreateContactCommand) => Promise<void>;
}

export class CreateContactService implements CreateContactServiceImpl {
  async handle(command: CreateContactCommand) {}
}

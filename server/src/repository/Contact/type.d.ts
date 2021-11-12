import { Contact } from "src/domain/Models/Contact";

export namespace ContactRepositoryProps {
  export interface Impl {
    create: (contact: Contact) => Promise<boolean>;
  }
}

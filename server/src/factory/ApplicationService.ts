import { CreateContactService } from "~application/Contact/CreateContactService";
import { CreateContactServiceProps } from "~application/Contact/CreateContactService/type";
import repository from "./Repository";

class ApplicationService {
  readonly createContact: CreateContactServiceProps.Impl;

  constructor() {
    this.createContact = new CreateContactService(repository.contact);
  }
}

const applicationService = new ApplicationService();

export default applicationService;

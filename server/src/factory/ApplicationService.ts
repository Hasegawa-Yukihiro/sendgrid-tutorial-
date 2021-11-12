import { CreateContactService } from "src/application/Contact/CreateContactService";
import { CreateContactServiceProps } from "src/application/Contact/CreateContactService/type";
import repository from "./Repository";

class ApplicationService {
  readonly createContract: CreateContactServiceProps.Impl;

  constructor() {
    this.createContract = new CreateContactService(repository.contact);
  }
}

const applicationService = new ApplicationService();

export default applicationService;

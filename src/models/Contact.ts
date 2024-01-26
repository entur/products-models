import { ContactInterface } from '../types/interfaces';

class Contact implements ContactInterface {
  url: string;
  email: string;
  phone: string;
  constructor(data: ContactInterface | Record<string, string> = {}) {
    this.url = data.url;
    this.email = data.email;
    this.phone = data.phone;
  }
}

export default Contact;

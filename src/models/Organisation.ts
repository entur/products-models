import { ContactInterface, OrganisationInterface } from '../types/interfaces';
import { OrganisationReferences } from '../types/types';

import Contact from './Contact';

class Organisation implements OrganisationInterface {
  id: string;
  name: string;
  legalName: string;
  contact?: ContactInterface;
  customerContact?: ContactInterface;
  types: Array<string>;
  logo: string;
  references: OrganisationReferences;
  version: number;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(data: OrganisationInterface | Record<string, any> = {}) {
    this.id = data.id;
    this.name = data.name;
    this.legalName = data.legalName;
    this.types = data.types || [];
    this.contact = data.contact || undefined;
    this.customerContact = data.customerContact
      ? new Contact(data.customerContact)
      : undefined;
    this.logo = data.logo;
    /** @type {{ codeSpace: string, netexAuthorityId: string}} */
    this.references = data.references || {};
    this.version = data.version;
  }

  /**
   * @param {string} name
   * @returns {boolean}
   */
  hasReference(name: string): boolean {
    return Object.prototype.hasOwnProperty.call(this.references, name);
  }

  /**
   * @returns {string | undefined}
   */
  getNetworkId(): string | undefined {
    return this.references.networkId;
  }

  /**
   * @returns {string | undefined}
   */
  getRegistrarId(): string | undefined {
    return this.references.registrarId;
  }

  getNetexId() {
    if (this.references.netexAuthorityId) {
      return this.references.netexAuthorityId;
    } else if (this.references.netexId) {
      return this.references.netexId;
    }

    return undefined;
  }
}

export default Organisation;

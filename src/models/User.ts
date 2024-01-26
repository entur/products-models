import { Permission } from '@entur-partner/permission-client-node';

const ENTUR_ORGANISATION_ID = '1';

class User {
  readonly id: string;
  readonly email: string;
  readonly familyName: string;
  readonly givenName: string;
  readonly name: string;
  readonly organisationId: string;
  readonly username: string;
  readonly permissions: string[];
  /** Permissions from permission-store */
  readonly storePermissions: Permission[];

  readonly isEnturUser: boolean;

  constructor(
    id: string,
    email: string,
    familyName: string,
    givenName: string,
    name: string,
    organisationId: string,
    username: string,
    permissions: string[] = [],
    storePermissions: Permission[] = []
  ) {
    this.id = id;
    this.email = email;
    this.familyName = familyName;
    this.givenName = givenName;
    this.name = name;
    this.organisationId = organisationId;
    this.username = username;
    this.permissions = permissions;
    this.storePermissions = storePermissions;

    this.isEnturUser = this.organisationId === ENTUR_ORGANISATION_ID;
  }
}

export default User;

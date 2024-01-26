import { ProofOfIdentity, UserType } from '../types/enums';
import { UserProfileData } from '../types/interfaces';

import BaseModel from './BaseModel';
import CompanionProfile from './CompanionProfile';
import FareFrame from './FareFrame';
import FarePrice from './FarePrice';

const NAME_OF_CLASS = 'UserProfile';

class UserProfile extends BaseModel {
  typeOfConcessionRef?: string;
  userType?: UserType;
  minAge?: string;
  maxAge?: string;
  proofOfIdentity?: ProofOfIdentity;
  baseUserProfileRef?: string;
  companionProfiles: CompanionProfile[];
  prices: FarePrice[];

  constructor(data: Partial<UserProfileData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.name = data.name || [];
    this.typeOfConcessionRef = data.typeOfConcessionRef;
    this.userType = data.userType || UserType.ANYONE;
    this.minAge = data.minAge;
    this.maxAge = data.maxAge;
    this.proofOfIdentity =
      data.proofOfIdentity || ProofOfIdentity.NONE_REQUIRED;
    this.baseUserProfileRef = data.baseUserProfileRef;
    this.prices = (data.prices || []).map((p) => new FarePrice(p));
    this.companionProfiles =
      data.companionProfiles?.map(
        (companionProfile) => new CompanionProfile(companionProfile)
      ) ?? [];
  }

  withVersion(version: string) {
    return super.withVersion(version).withChanges({
      companionProfiles: this.companionProfiles.map((cp) =>
        cp.withVersion(version)
      )
    });
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      companionProfiles: this.companionProfiles.map(
        (companionProfile: CompanionProfile) =>
          companionProfile.toPayload(fareFrame).withChanges({
            parentRef: this.toRef()
          })
      ),
      maxAge: this.maxAge ? Number(this.maxAge) : undefined,
      minAge: this.minAge ? Number(this.minAge) : undefined
    });
  }
}

export default UserProfile;

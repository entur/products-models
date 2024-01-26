import { v4 as uuid } from 'uuid';

import { DistributionRight, PaymentMethod } from '../types/enums';
import { DistributionAssignmentData } from '../types/interfaces';
import { getDistributionChannelRefAsString } from '../utils/get-distribution-channel-ref-as-string';

import BaseModel from './BaseModel';
import Reference from './Reference';
import SalesPackage from './SalesPackage';

const NAME_OF_CLASS = 'DistributionAssignment';

class DistributionAssignment extends BaseModel {
  compatibleWithVersionRef?: string;
  fareFrameRef: Reference;
  salesPackageRef: Reference;
  distributionRights: DistributionRight;
  allDistributionChannelsRef: boolean;
  distributionChannelRef?: string;
  organisationRef: Reference;
  paymentMethods: PaymentMethod[];
  fulfilmentMethodRef?: Reference;
  constructor(data: Partial<DistributionAssignmentData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    const {
      fareFrameRef,
      salesPackageRef,
      distributionRights,
      allDistributionChannelsRef,
      distributionChannelRef,
      organisationRef,
      paymentMethods,
      fulfilmentMethodRef
    } = data;

    this.fareFrameRef = new Reference({
      nameOfClass: fareFrameRef?.nameOfClass,
      ref: fareFrameRef?.ref,
      version: fareFrameRef?.version
    });
    this.salesPackageRef =
      salesPackageRef ||
      new Reference({
        nameOfClass: SalesPackage.getNameOfClass()
      });
    this.distributionRights = distributionRights!;
    this.allDistributionChannelsRef = allDistributionChannelsRef || false;
    this.organisationRef = organisationRef || new Reference({});
    this.paymentMethods = paymentMethods || [];
    this.fulfilmentMethodRef = fulfilmentMethodRef;
    this.distributionChannelRef = getDistributionChannelRefAsString(
      distributionChannelRef
    );
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  static getEmptyDistributionChannelRef(): string {
    return `-1_${uuid()}`;
  }

  withVersion(version: string) {
    return super.withVersion(version).withChanges({
      salesPackageRef: { ...this.salesPackageRef, version }
    });
  }
}

export default DistributionAssignment;

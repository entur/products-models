import { DistributionRight } from '../types/enums';
import { SalesPackageData } from '../types/interfaces';
import { BucketStateType } from '../types/types';
import { uniqueValuesInArray } from '../utils/unique-values-in-array';

import DistributionAssignment from './DistributionAssignment';
import Dorito from './Dorito';
import FareFrame from './FareFrame';
import FareProduct from './FareProduct';
import Reference from './Reference';
import SalesPackageElement from './SalesPackageElement';

const NAME_OF_CLASS = 'SalesPackage';

class SalesPackage extends Dorito {
  salesPackageElements: Array<SalesPackageElement>;
  distributionAssignments: Array<DistributionAssignment>;

  constructor(data: Partial<SalesPackageData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.name = data.name || [];
    this.description = data.description || [];

    this.salesPackageElements = data.salesPackageElements
      ? data.salesPackageElements.map((spe) => new SalesPackageElement(spe))
      : [];

    this.distributionAssignments = data.distributionAssignments
      ? data.distributionAssignments.map(
        (distributionAssignment) =>
          new DistributionAssignment(distributionAssignment)
      )
      : [];
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  addDistributionAssignment(
    distributionRights: DistributionRight,
    distributionChannelRef?: string
  ) {
    const distributionAssignments = [
      ...this.distributionAssignments,
      new DistributionAssignment({
        codeSpace: this.codeSpace,
        version: this.version,
        distributionChannelRef:
          distributionChannelRef ||
          DistributionAssignment.getEmptyDistributionChannelRef(),
        distributionRights: distributionRights || DistributionRight.SELL,
        salesPackageRef: this.toRef()
      })
    ];

    return this.withChanges({ distributionAssignments });
  }

  addFulfilmentMethod(
    fulfilmentMethodRef: Reference,
    distributionChannelId: string
  ) {
    const distributionAssignmentGroup = this.distributionAssignments.filter(
      (da) => da.distributionChannelRef === distributionChannelId
    );
    const distributionAssignments = distributionAssignmentGroup.some(
      (da) => da.fulfilmentMethodRef
    )
      ? [
        ...this.distributionAssignments,
        ...distributionAssignmentGroup.map(
          (da) =>
            new DistributionAssignment({
              ...da,
              id: undefined,
              fulfilmentMethodRef
            })
        )
      ]
      : this.distributionAssignments.map((da) =>
        da.distributionChannelRef !== distributionChannelId
          ? da
          : da.withChanges({ fulfilmentMethodRef })
      );

    return this.withChanges({ distributionAssignments });
  }

  removeFulfilmentMethod(
    fulfilmentMethodRef: Reference,
    distributionChannelId: string
  ) {
    const distributionAssignmentGroup = this.distributionAssignments.filter(
      (da) => da.distributionChannelRef === distributionChannelId
    );
    const distributionAssignments = distributionAssignmentGroup.every(
      (da) => da.fulfilmentMethodRef?.ref === fulfilmentMethodRef.ref
    )
      ? this.distributionAssignments.map((da) =>
        da.distributionChannelRef !== distributionChannelId
          ? da
          : da.withChanges({ fulfilmentMethodRef: undefined })
      )
      : this.distributionAssignments.filter(
        (da) =>
          !(
            da.distributionChannelRef === distributionChannelId &&
              da.fulfilmentMethodRef?.ref === fulfilmentMethodRef.ref
          )
      );

    return this.withChanges({ distributionAssignments });
  }

  removeDistributionAssignment(distributionAssignmentId: string) {
    const distributionAssignments = this.distributionAssignments.filter(
      (distributionAssignment) =>
        distributionAssignment.id !== distributionAssignmentId
    );

    return this.withChanges({ distributionAssignments });
  }

  addFareProduct(fareProduct: FareProduct) {
    const salesPackageElements = this.salesPackageElements.concat(
      new SalesPackageElement({
        codeSpace: this.codeSpace,
        fareProductRef: fareProduct.toRef(),
        version: this.version
      })
    );

    return this.withChanges({ salesPackageElements });
  }

  addFareProducts(fareProducts: Array<FareProduct>) {
    const salesPackageElements = [
      ...this.salesPackageElements,
      ...fareProducts.map(
        (fp) =>
          new SalesPackageElement({
            codeSpace: this.codeSpace,
            fareProductRef: fp.toRef(),
            version: this.version
          })
      )
    ];

    return this.withChanges({ salesPackageElements });
  }

  removeFareProductById(fareProductId: string) {
    const salesPackageElements = this.salesPackageElements.filter(
      (spe) => spe.fareProductRef?.ref !== fareProductId
    );

    return this.withChanges({ salesPackageElements });
  }

  getNumberOfProducts() {
    return this.salesPackageElements.length;
  }

  getFulfillmentMethods() {
    const fulfilmentMethods = this.distributionAssignments
      .map((da) => da?.fulfilmentMethodRef?.ref)
      .filter((value) => value !== null && value !== undefined);

    return uniqueValuesInArray(fulfilmentMethods);
  }

  getFareProductRefs(): Reference[] {
    return this.salesPackageElements
      .map((spe) => spe.fareProductRef)
      .filter(
        (ref: Reference | undefined): ref is Reference => ref !== undefined
      );
  }

  withVersion(version: string) {
    return super.withVersion(version).withChanges({
      salesPackageElements: this.salesPackageElements.map((spe) =>
        spe.withVersion(version)
      ),
      distributionAssignments: this.distributionAssignments.map(
        (distributionAssignment) => distributionAssignment.withVersion(version)
      )
    });
  }

  updateRefs(bucket: BucketStateType) {
    return super.updateRefs(bucket).withChanges({
      salesPackageElements: this.salesPackageElements.map((spe) =>
        spe.updateRefs(bucket)
      ),
      distributionAssignments: this.distributionAssignments.map(
        (distributionAssignment) => distributionAssignment.updateRefs(bucket)
      )
    });
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      salesPackageElements: this.salesPackageElements.map((spe) =>
        spe.toPayload(fareFrame)
      ),

      distributionAssignments: this.distributionAssignments
        .filter(
          (distributionAssignment) =>
            !distributionAssignment.distributionChannelRef?.startsWith('-1')
        )
        .map((distributionAssignment) =>
          distributionAssignment.toPayload(fareFrame)
        )
    });
  }
}

export default SalesPackage;

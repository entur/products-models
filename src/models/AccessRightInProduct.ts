import { AccessRightInProductData } from '../types/interfaces';
import { BucketStateType } from '../types/types';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import Reference from './Reference';

const NAME_OF_CLASS = 'AccessRightInProduct';

/**
 * Represents an access right associated with a fare product.
 * @extends {BaseModel}
 */
class AccessRightInProduct extends BaseModel {
  /**
   * Reference to the preassigned fare product.
   * @type {Reference}
   */
  preassignedFareProductRef: Reference;

  /**
   * Reference to the validable element.
   * @type {Reference}
   */
  validableElementRef: Reference;

  /**
   * Access number associated with the access right.
   * @type {number | undefined}
   */
  accessNumber?: number;

  /**
   * Flag indicating if the access number is limited.
   * @type {boolean | undefined}
   */
  accessNumberIsLimited?: boolean;

  /**
   * Minimum access number allowed.
   * @type {number | undefined}
   */
  minimumAccess?: number;

  /**
   * Maximum access number allowed.
   * @type {number | undefined}
   */
  maximumAccess?: number;

  /**
   * Constructs an instance of AccessRightInProduct.
   * @param {Partial<AccessRightInProductData>} [data={}] - The data to initialize the instance.
   */
  constructor(data: Partial<AccessRightInProductData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    const {
      preassignedFareProductRef,
      validableElementRef,
      accessNumber,
      accessNumberIsLimited,
      minimumAccess,
      maximumAccess
    } = data;

    this.preassignedFareProductRef = new Reference({
      nameOfClass: preassignedFareProductRef?.nameOfClass,
      ref: preassignedFareProductRef?.ref,
      version: preassignedFareProductRef?.version
    });
    this.validableElementRef = new Reference({
      nameOfClass: validableElementRef?.nameOfClass,
      ref: validableElementRef?.ref,
      version: validableElementRef?.version
    });
    this.accessNumber = accessNumber;
    this.accessNumberIsLimited = accessNumberIsLimited;
    this.minimumAccess = minimumAccess;
    this.maximumAccess = maximumAccess;
  }

  /**
   * Gets the name of the class.
   * @returns {string} - The name of the class.
   * @static
   */
  static getNameOfClass(): string {
    return NAME_OF_CLASS;
  }

  /**
   * Updates references in the instance based on the bucket.
   * @param {BucketStateType} bucket - The bucket containing references.
   * @returns {this} - The updated instance.
   */
  updateRefs(bucket: BucketStateType): this {
    return super.updateRefs(bucket).withChanges({
      preassignedFareProductRef: this.updateRef(
        'preassignedFareProductRef',
        bucket
      ),
      validableElementRef: this.updateRef('validableElementRef', bucket)
    });
  }

  /**
   * Converts the instance to a payload, with special handling for name and description.
   * @param {FareFrame} fareFrame - The fare frame associated with the access right.
   * @returns {object} - The payload representing the instance.
   */
  toPayload(fareFrame: FareFrame): object {
    const payload = super.toPayload(fareFrame);

    payload.name = [];
    payload.description = [];

    return payload;
  }
}

export default AccessRightInProduct;

import {
  FareClass,
  PlaceUse,
  TransportMode,
  TransportSubmode
} from '../types/enums';
import { ScopingValidityParameterData } from '../types/interfaces';

import BaseModel from './BaseModel';
import Reference from './Reference';

const NAME_OF_CLASS = 'ScopingValidityParameter';

class ScopingValidityParameter extends BaseModel {
  authorityRef?: string;
  fareClasses: FareClass[];
  operatorRef?: string;
  lineRef?: string;
  tariffZoneRef?: string;
  fareSectionRef?: string;
  vehicleMode?: TransportMode;
  transportSubmode?: TransportSubmode;
  facilitySetRef?: string;
  scheduledStopPointRef?: string;
  distributionChannelRef?: string;
  groupOfTariffZonesRef?: string;
  groupOfLinesRef?: string;
  genericParameterAssignmentRef?: Reference;
  placeUse?: PlaceUse;

  constructor(data: Partial<ScopingValidityParameterData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    const {
      authorityRef,
      fareClasses = [],
      operatorRef,
      lineRef,
      tariffZoneRef,
      fareSectionRef,
      vehicleMode,
      transportSubmode,
      facilitySetRef,
      scheduledStopPointRef,
      distributionChannelRef,
      groupOfTariffZonesRef,
      groupOfLinesRef,
      genericParameterAssignmentRef,
      placeUse
    } = data;

    this.authorityRef = authorityRef;
    this.fareClasses = fareClasses;
    this.operatorRef = operatorRef;
    this.lineRef = lineRef;
    this.tariffZoneRef = tariffZoneRef;
    this.fareSectionRef = fareSectionRef;
    this.vehicleMode = vehicleMode;
    this.transportSubmode = transportSubmode;
    this.facilitySetRef = facilitySetRef;
    this.scheduledStopPointRef = scheduledStopPointRef;
    this.distributionChannelRef = distributionChannelRef;
    this.groupOfTariffZonesRef = groupOfTariffZonesRef;
    this.groupOfLinesRef = groupOfLinesRef;
    this.placeUse = placeUse;

    //Remove these when the API no longer needs them
    //Needed by the API-type used in SaleDiscountRight
    this.changed = new Date().toISOString();
    this.created = new Date().toISOString();
    this.genericParameterAssignmentRef =
      genericParameterAssignmentRef ||
      new Reference({ nameOfClass: '', ref: '', version: '' });
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default ScopingValidityParameter;

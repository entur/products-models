import AccessRightInProduct from '../models/AccessRightInProduct';
import Accommodation from '../models/Accommodation';
import BaseModel from '../models/BaseModel';
import CappingRule from '../models/CappingRule';
import Cell from '../models/Cell';
import ChargingMoment from '../models/ChargingMoment';
import CompanionProfile from '../models/CompanionProfile';
import ConditionSummary from '../models/ConditionSummary';
import DistanceMatrixElement from '../models/DistanceMatrixElement';
import DistributionAssignment from '../models/DistributionAssignment';
import FarePointInPattern from '../models/FarePointInPattern';
import FarePrice from '../models/FarePrice';
import FareStructureElementInSequence from '../models/FareStructureElementInSequence';
import GenericParameterAssignment from '../models/GenericParameterAssignment';
import GeographicalInterval from '../models/GeographicalInterval';
import LimitingRule from '../models/LimitingRule';
import PropertyOfDay from '../models/PropertyOfDay';
import Reference from '../models/Reference';
import Rounding from '../models/Rounding';
import SalesPackageElement from '../models/SalesPackageElement';
import ScopingValidityParameter from '../models/ScopingValidityParameter';
import SteppedDuration from '../models/SteppedDuration';
import TemporalValidityParameter from '../models/TemporalValidityParameter';
import TypeOfFareProduct from '../models/TypeOfFareProduct';
import UsageValidityPeriod from '../models/UsageValidityPeriod';
import ValidityCondition from '../models/ValidityCondition';

import {
  AccommodationFacility,
  ActivationMeans,
  AmountOfPriceUnitProductType,
  BaggageType,
  BaggageUseType,
  ChargingBasisType,
  ComparisonOperator,
  DaysOfWeekEnum,
  DiscountBasis,
  DistributionRight,
  EntitlementType,
  ExchangeableTo,
  ExchangingAllowed,
  FareClass,
  FareStructureType,
  FeeBasis,
  FrequencyOfUseType,
  FulfilmentMethodType,
  GpaComparisonOperatorVariant,
  GroupCheckInEnum,
  GroupDiscountBasis,
  HolidayTypeEnum,
  InterchangeRestrictionType,
  IntervalType,
  LogicalOperator,
  LogicalOperatorWithNone,
  LuggageAllowanceType,
  LuggageChargingBasis,
  Modification,
  NuisanceFacility,
  PaymentMethod,
  PenaltyAction,
  PerBasis,
  PlaceUse,
  PriceType,
  ProofOfIdentity,
  PurchaseWhen,
  RefundBasis,
  RefundType,
  ReplacingAllowed,
  RequiredElement,
  RequiredInContext,
  RequiredType,
  ResellType,
  ResellWhen,
  ReservationChargeType,
  ReservingRequirements,
  RoundingMethod,
  SetOperator,
  State,
  StepLimitUnit,
  SupplementProductType,
  TariffBasis,
  TariffBasisFSE,
  TicketingType,
  TransportMode,
  TransportSubmode,
  TripType,
  UsageEnd,
  UsageStartConstraintType,
  UsageTrigger,
  UsageValidityType,
  UserType,
  ValidationRequirementEnum,
  ValiditionRequirementEnum,
  VatGroupRegister,
  VatRegisterGroup,
  VersionStatus,
  VersionType
} from './enums';
import {
  ErrorDetails,
  GenericParameterAssignmentUsesType,
  InfoLink,
  OrganisationReferences,
  TextInLanguage
} from './types';

export interface AvailabilityConditionData extends ValidityConditionData {
  dayTypeRefs: Reference[];
  isAvailable: boolean;
  timebandRefs?: Reference[];
}

export interface ThingData<T extends BaseModel> {
  instance: T;
  state?: State;
}

export interface BaseModelData {
  id: string;
  version: string;
  codeSpace: string;
  nameOfClass: string;
  created: string;
  changed: string;
  modification: Modification;
  status: VersionStatus;
  name: TextInLanguage[];
  description: TextInLanguage[];
}

export interface FareProductData extends DoritoData {
  accessRightsInProduct: AccessRightInProduct[];
  fareStructureType: FareStructureType;
  operatorRef: string;
  organisation: string;
  organisationId: string;
  chargingMoment: ChargingMoment;
  chargingMomentRef: Reference;
  conditionSummary: ConditionSummary;
  fareTableRefs: Reference[];
}

export interface AccessRightInProductData extends BaseModelData {
  preassignedFareProductRef: Reference;
  validableElementRef: Reference;
  accessNumber: number;
  accessNumberIsLimited: boolean;
  minimumAccess: number;
  maximumAccess: number;
}

export interface AccomodationData extends BaseModelData {
  accommodationFacility?: AccommodationFacility;
  nuisanceFacilities?: NuisanceFacility[];
}

export interface AmountOfPriceUnitProductData extends FareProductData {
  amount: number;
  validityConditions: ValidityCondition[];
  productType: AmountOfPriceUnitProductType;
}

export interface CappedDiscountRightData extends FareProductData {
  validationRequirements?: ValiditionRequirementEnum;
  cappingRules: CappingRule[];
  vatGroupRegister?: VatGroupRegister;
}

export interface CappingRuleData extends DoritoData {
  preassignedFareProductRef: Reference;
  validableElementRef: Reference;
}

export interface FarePriceData extends BaseModelData {
  amount: number;
  currency: string;
  isAllowed: boolean;
  discountPercentageUsed: number;
  rounding: Rounding;
  priceType: PriceType;
  vatRegisterGroup: VatRegisterGroup;
  limitingRule: LimitingRule;
  roundingRef: Reference;
  canBeCumulative: boolean;
}

export interface ChargingMomentData extends BaseModelData {
  fareFrameRef: Reference;
  derivedFromVersionRef: string;
  compatibleWithVersionRef: string;
}

export interface CompanionProfileData extends BaseModelData {
  parentRef?: Reference;
  userProfileId?: string;
  minimumNumberOfPersons?: number;
  maximumNumberOfPersons?: number;
  discountBasis?: DiscountBasis;
  prices: FarePrice[];
  priceType: PriceType;
  fareFrameRef: Reference;
  fareTableRefs: Reference[];
  generalGroupOfEntities: Reference;
  ticketing: TicketingType;
}

export interface ConditionSummaryData {
  id: string;
  isRefundable?: boolean;
  isExchangeable?: boolean;
}

export interface ContactInterface {
  url: string;
  email: string;
  phone: string;
}

export interface DayTypeData extends BaseModelData {
  earliestTime: string;
  availabilityCondition: Reference;
  dayLength: string;
  durationBeforePropertiesOfDay: string;
  durationAfterPropertiesOfDay: string;
  properties: PropertyOfDay[];
  timebandRefs?: Reference[];
}

export interface DistanceMatrixElementData extends BaseModelData {
  startScheduledStopPointId?: string;
  endScheduledStopPointId?: string;
  validityConditions: ValidityCondition[];
  prices: FarePrice[];
  tariffRef?: Reference;
  groupRef?: Reference;
  startTariffZoneId?: string;
  endTariffZoneId?: string;
}

export interface DistributionAssignmentData extends BaseModelData {
  compatibleWithVersionRef: string;
  fareFrameRef: Reference;
  salesPackageRef: Reference;
  distributionRights: DistributionRight;
  allDistributionChannelsRef: boolean;
  distributionChannelRef: Reference | string;
  organisationRef: Reference;
  paymentMethods: PaymentMethod[];
  fulfilmentMethodRef: Reference;
}

export interface DistributionChannelData {
  id: string;
  name: Record<string, string>;
  ownerOrgId: number;
}

export interface EntitlementGivenData extends BaseModelData {
  entitlementType: EntitlementType;
  serviceAccessRightRef: Reference;
  minimumQualificationPeriod: string;
  prices: FarePrice[];
}

export interface EntitlementRequiredData extends BaseModelData {
  validityConditions: ValidityCondition[];
  prices: FarePrice[];
  typeOfUsageParameter: string;
  serviceAccessRightNetexId: string;
  minimumQualificationPeriod: string;
}

export interface ExchangingData extends BaseModelData {
  fareFrameRef: Reference;
  fareTableRefs: Reference[];
  prices: FarePrice[];
  allowed: ExchangingAllowed;
  unusedTicketsOnly?: boolean;
  hasFee?: boolean;
  exchangeableFromDuration?: string;
  exchangeableUntilDuration?: string;
  resellWhen?: ResellWhen;
  canChangeClass?: boolean;
  onlyAtCertainDistributionPoints?: boolean;
  exchangeableFromAnyTime?: boolean;
  exchangeableUntilAnyTime?: boolean;
  refundBasis?: RefundBasis;
  numberOfExchangesAllowed?: number;
  toFareClass?: FareClass;
  exchangeableTo?: ExchangeableTo;
  specifiedProducts?: string[];
}

export interface FarePointInPatternData extends BaseModelData {
  pointRef: string;
  orderOfElement: number;
  journeyPatternRef: Reference;
}

export interface RoundingData extends BaseModelData {
  roundingMethod: RoundingMethod;
  roundingModulus?: number;
}

export interface RoundTripData extends BaseModelData {
  tripType: TripType;
  doubleSingleFare: boolean;
  shortTrip: boolean;
  isRequired: boolean;
  typeOfUsageParameter: string;
}

export interface SaleDiscountRightData extends FareProductData {
  validationRequirements: ValidationRequirementEnum[];
  validityConditions: ValidityCondition[];
  typeOfFareProduct: TypeOfFareProduct;
  typeOfFareProductRef: Reference;
}

export interface SalesPackageData extends DoritoData {
  salesPackageElements: SalesPackageElement[];
  distributionAssignments: DistributionAssignment[];
}

export interface SalesPackageElementData extends BaseModelData {
  fareProductRef: Reference;
  salesPackageRef: Reference;
  fareTableRefs: Array<Reference>;
}

export interface ScopingValidityParameterData extends BaseModelData {
  authorityRef: string;
  fareClasses: FareClass[];
  operatorRef: string;
  lineRef: string;
  tariffZoneRef: string;
  fareSectionRef: string;
  vehicleMode: TransportMode;
  transportSubmode: TransportSubmode;
  facilitySetRef: string;
  scheduledStopPointRef: string;
  distributionChannelRef: string;
  groupOfTariffZonesRef: string;
  groupOfLinesRef: string;
  genericParameterAssignmentRef: Reference;
  placeUse: PlaceUse;
}

export interface SecurityPolicyData extends BaseModelData {
  minimumAccountSecurityLevel: number;
}

export interface ServiceFacilitySetData extends BaseModelData {
  accommodation?: Accommodation;
}

export interface SteppedDurationData {
  initialDuration: string;
  subsequentStepsDuration: string;
  maximumDuration: string;
  stepUnit: StepLimitUnit;
}

export interface SupplementProductData extends FareProductData {
  supplementProductType: SupplementProductType;
  vatGroupRegister: VatGroupRegister;
  vatGroup: VatGroupRegister;
  typeOfFareProduct: TypeOfFareProduct;
  typeOfFareProductRef: Reference;
}

export interface TariffData extends BaseModelData {
  tariffBasis: TariffBasis;
  validBetweenRef: Reference;
}

export interface TemporalValidityParameterData extends BaseModelData {
  dayType?: Reference;
  validityCondition?: ValidityCondition;
  validityConditionRef?: Reference;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  operatingDayId?: any;
}

export interface TimebandData extends BaseModelData {
  startTime: string;
  endTime: string;
  dayOffset: number;
}

export interface TransferabilityData extends BaseModelData {
  canTransfer: boolean;
  maximumNumberOfNamedUsers: number;
  hasTransferFee: boolean;
}

export interface TypeOfFareProductData extends BaseModelData {
  fareFrameRef: Reference;
}

export interface UsageValidityPeriodData extends BaseModelData {
  standardDuration: string;
  usageValidityTypes: UsageValidityType[];
  usageTrigger: UsageTrigger;
  usageEnds: UsageEnd[];
  fareTableRefs: Reference[];
  steppedDuration: SteppedDuration;
  usageStartConstraintType: UsageStartConstraintType;
  activationMeans: ActivationMeans[];
}

export interface UserProfileData extends BaseModelData {
  typeOfConcessionRef: string;
  userType: UserType;
  minAge: string;
  maxAge: string;
  proofOfIdentity: ProofOfIdentity;
  baseUserProfileRef: string;
  companionProfiles: CompanionProfile[];
  prices: FarePrice[];
}

export interface UvpForNumberOfZonesData extends BaseModelData {
  authorityId: string;
  usageValidityPeriodId: string;
  numberOfZones: number;
  usageValidityPeriod: UsageValidityPeriod;
}

export interface ValidableElementData extends DoritoData {
  fareStructureElementsRef: Reference[];
  fareStructureElementsInSequence: Array<FareStructureElementInSequence>;
}

export interface ValidityConditionData extends BaseModelData {
  fromDate: string;
  toDate: string;
}

export interface VersionData {
  id: string;
  codeSpace: string;
  nameOfClass: string;
  created: string;
  changed: string;
  description?: string;
  modification: Modification;
  status: VersionStatus;
  versionType: VersionType;
  startDate: number | string | Date;
  endDate: number | string | Date;
}

export interface DoritoData extends BaseModelData {
  parameterAssignments: GenericParameterAssignment[];
  accessRightParameterAssignmentRefs: Reference[];
  parameterAssignmentRefs: Reference[];
  accessRightParameterAssignments: GenericParameterAssignment[];
  prices: FarePrice[];
  activeComparisonOperatorVariant?: GpaComparisonOperatorVariant;
}

export interface GenericParameterAssignmentData extends BaseModelData {
  limitations: Reference[];
  limitationGroupingType: LogicalOperator;
  validityParameters: ScopingValidityParameter[];
  validityParameterGroupingType: LogicalOperatorWithNone;
  validityParameterAssignmentType: ComparisonOperator;
  temporalValidityParameters: TemporalValidityParameter[];
  includes: GenericParameterAssignment[];
  includesGroupingType: LogicalOperator;
  parentParameterAssignmentRef?: Reference;
  chargingBasisType: ChargingBasisType;
  state: State;
  uses: GenericParameterAssignmentUsesType;
  limitationType: string;
  fareStructureElementRef?: Reference;
  requiredType?: RequiredType;
  requiredInContext?: RequiredInContext;
  validityParameterSetSelectionType: SetOperator;
  requiredElements?: Array<RequiredElement>;
  canIgnoreInOffering?: boolean;
  comparisonOperatorVariant?: GpaComparisonOperatorVariant;
}

export interface GroupOfDistanceMatrixElementsData extends BaseModelData {
  fareFrameRef: Reference;
  validityConditions: ValidityCondition[];
  members: DistanceMatrixElement[];
  tariffId: number;
  codeSpace: string;
}

export interface OrganisationInterface {
  id: string;
  name: string;
  legalName: string;
  contact?: ContactInterface;
  customerContact?: ContactInterface;
  types: Array<string>;
  logo: string;
  references: OrganisationReferences;
  version: number;
}

export interface RevertingData extends BaseModelData {
  allowedAfterControl: boolean;
  typeOfResponsibilityRoleRef: Reference;
  minimumTimeAfterUse: string;
  maximumTimeAfterUse: string;
}

export interface ReservingData extends BaseModelData {
  fareFrameRef: Reference;
  fareTableRefs: Reference[];
  prices: FarePrice[];
  typeOfUsageParameter?: string;
  reservingRequirements?: ReservingRequirements;
  minimumNumberToReserve?: number;
  maximumNumberToReserve?: number;
  reservationChargeType?: ReservationChargeType;
  feeBasis?: FeeBasis;
  mustReserveWholeCompartment: boolean;
}

export interface FareQuotaFactorData extends BaseModelData {
  fareStructureElementRef: Reference;
  fareFrameRef: Reference;
  prices: FarePrice[];
  validityConditions: ValidityCondition[];
}

export interface FareSectionData extends BaseModelData {
  journeyPatternRef: Reference;
  fromFarePointRef: Reference;
  toFarePointRef: Reference;
}

export interface ReplacingData extends BaseModelData {
  allowed?: ReplacingAllowed;
  resellWhen: ResellWhen;
  hasFee?: boolean;
  prices: Array<FarePrice>;
  exchangeableFromAnyTime?: boolean;
  exchangeableFromDuration?: string;
  exchangeableUntilAnyTime?: boolean;
  exchangeableUntilDuration?: string;
}

export interface RefundingData extends BaseModelData {
  refundType: RefundType;
  prices: FarePrice[];
  resellWhen: ResellWhen;
  fareFrameRef: Reference;
  fareTableRefs: Reference[];
  limitingRuleRef: Reference;
  limitingRule: LimitingRule;
  canChangeClass: boolean;
  allowed: ResellType;
  unusedTicketsOnly: boolean;
  hasFee: boolean;
  exchangeableFromDuration: string;
  exchangeableUntilDuration: string;
  onlyAtCertainDistributionPoints: boolean;
  exchangeableFromAnyTime: boolean;
  exchangeableUntilAnyTime: boolean;
  refundBasis: RefundBasis;
}

export interface PurchaseWindowData extends BaseModelData {
  fareFrameRef: Reference;
  derivedFromVersionRef: string;
  compatibleWithVersionRef: string;
  limitingRule: LimitingRule;
  purchaseWhen: PurchaseWhen;
  latestTime: string;
  minimumPeriodBeforeDeparture: string;
  maxmumPeriodBeforeDeparture: string;
}

export interface PropertyOfDayData {
  name: string;
  description?: string;
  daysOfWeek?: DaysOfWeekEnum[];
  monthOfYear?: number;
  dayOfYear?: string;
  holidayTypes?: HolidayTypeEnum[];
}

export interface ProductPriorityRuleData extends BaseModelData {
  organisationId: string;
  commercialAgreementRef: string;
  priorityProductRef: Reference;
  suppressedProductRefs: Reference[];
  ancillaryProductRefs: Reference[];
  interchangeRestrictionType: InterchangeRestrictionType;
  allowOverlappingAlternatives: boolean;
  validityConditionRef: Reference;
  infoLinks: InfoLink[];
  validityParameterAssignments: GenericParameterAssignment[];
  activeComparisonOperatorVariant: GpaComparisonOperatorVariant;
}

export interface PenaltyPolicyData extends BaseModelData {
  fareTableRefs: Array<Reference>;
  prices: Array<FarePrice>;
  penaltyPolicyType?: string;
  sameStationReentryPolicyType?: string;
  minimumTimeBeforeReentry?: string;
  penaltyAction?: PenaltyAction;
  paymentMethod?: string;
}

export interface InterchangingData extends BaseModelData {
  maximumNumberOfChanges: number;
  maximumTimeToMakeATransfer: string;
  typeOfUsageParameterRef: Reference;
  fromMode: TransportMode;
  toMode: TransportMode;
}

export interface GeographicalStructureFactorData extends BaseModelData {
  geographicalIntervals: GeographicalInterval[];
  distanceMatrixElements: DistanceMatrixElement[];
}

export interface GeographicalIntervalData extends BaseModelData {
  startGeographicalValue?: number;
  endGeographicalValue?: number;
  intervalType: IntervalType;
  prices: FarePrice[];
  numberOfUnits?: number;
}

export interface PreassignedFareProductData extends FareProductData {
  vatGroupRegister: VatGroupRegister;
  vatGroup: VatGroupRegister;
}

export interface LuggageAllowanceData extends BaseModelData {
  baggageType: BaggageType;
  baggageUseType: BaggageUseType;
  luggageAllowanceType: LuggageAllowanceType;
  luggageChargingBasis: LuggageChargingBasis;
}

export interface GeneralGroupOfEntitiesData extends BaseModelData {
  nameOfMemberClass: string;
  members: Array<Reference>;
}

export interface GroupTicketData extends BaseModelData {
  companionProfiles: CompanionProfile[];
  groupDiscountBasis: GroupDiscountBasis;
  minimumNumberOfPersons: number;
  maximumNumberOfPersons: number;
  prices: Array<FarePrice>;
  pricingBasis: PerBasis;
  ticketing?: TicketingType;
  jointCheckIn?: GroupCheckInEnum;
}

export interface ParameterUsageData {
  elementRefs?: Reference[];
}

export interface MetaDataData {
  id: string;
  version: string;
  created: string;
  responsible: string;
  externalReferenceName: string;
  externalReferenceUrl: string;
  note: string;
  nameOfClass: string;
}

export interface JourneyPatternData extends BaseModelData {
  farePointsInPattern: FarePointInPattern[];
}

export interface LimitingRuleData extends BaseModelData {
  canBeCumulative: boolean;
  discountAsPercentage: number;
  discountAsValue: number;
  maximumPriceAsPercentage: string;
  maximumPrice: string;
  minimumPrice: string;
  minimumLimitPrice: string;
}

export interface FulfilmentMethodData extends DoritoData {
  fulfilmentMethodType: FulfilmentMethodType;
  farePrice: FarePrice;
}

export interface FrequencyOfUseData extends BaseModelData {
  frequencyOfUseType: FrequencyOfUseType;
  maximalFrequency: number;
  minimalFrequency: number;
}

export interface FareTableData extends BaseModelData {
  prices: Array<FarePrice>;
  cells: Array<Cell>;
  tariffRef: Reference;
}

export interface FareStructureElementData extends DoritoData {
  qualityStructureFactorRefs: Reference[];
  geographicalStructureFactorRefs: Reference[];
  tariffBasis: TariffBasisFSE;
  fareTableRefs: Array<Reference>;
}

export interface FareStructureElementInSequenceData extends BaseModelData {
  fareStructureElementId: string;
  orderOfElement: number;
  isFirstInSequence: boolean;
  isLastInSequence: boolean;
  fareStructureElementRef: Reference;
}

export interface ProductsErrorData extends Error {
  data: string;
  error: string;
  originalStatus: string;
  status: string;
}

export interface CellData extends BaseModelData {
  priceableObjectRefs: Reference[];
  farePrice: FarePrice;
}

export interface GroupOfTariffZoneData {
  id: string;
  name: {
    value: string;
    lang: string;
  };
}

export interface ProductsErrorPendingDeprecationData extends Error {
  error: string;
  errorDescription?: string;
  errorDetails: Array<ErrorDetails>;
}

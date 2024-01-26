import { Reference } from '../main';
import BaseModel from '../models/BaseModel';
import MetaData from '../models/MetaData';
import Thing from '../models/Thing';
import Version from '../models/Version';

// eslint-disable-next-line import/no-unused-modules
export type InstanceNetexId = string;

// eslint-disable-next-line import/no-unused-modules
export type VersionNetexId = string;

// eslint-disable-next-line import/no-unused-modules
export type BucketStateInstanceType = Record<
  InstanceNetexId,
  Record<VersionNetexId, Thing<BaseModel>>
>;

// eslint-disable-next-line import/no-unused-modules
export type BucketStateVersionType = Record<VersionNetexId, Version>;

export type BucketStateType = {
  instances: BucketStateInstanceType;
  versions: BucketStateVersionType;
  metaData?: MetaData;
};

export type TextInLanguage = {
  lang: string;
  value: string;
};

export type GenericParameterAssignmentUsesType = {
  useAuthorities: boolean;
  useOperators: boolean;
  useLines: boolean;
  useZones: boolean;
  useDates: boolean;
  useDays: boolean;
  useFareClass: boolean;
  useTimes: boolean;
  useFareSection: boolean;
  useVehicleMode: boolean;
  useValidBetween: boolean;
  useTransportSubmode: boolean;
  useDistributionChannels: boolean;
  useServiceFacilitySet: boolean;
  useGroupOfTariffZones: boolean;
  useGroupOfLines: boolean;
  useScheduledStopPointRef: boolean;
  useContextTypeWithServiceJourneyRef: boolean;
  useContextTypeWithDatedServiceJourneyRef: boolean;
  useContextTypeWithDistanceMatrixElementRef: boolean;
  useContextTypeWithDynamicDistanceMatrixElement: boolean;
  useContextTypeWithScheduledStopPointRef: boolean;
  useAvailabilityCondition: boolean;
};

export type OrganisationReferences = {
  codeSpace: string;
  registrarId: string;
  networkId: string;
  netexAuthorityId: string;
  netexId: string;
};

export type InfoLink = {
  link: string;
  typeOfInfoLink: string;
  productPriorityRuleRef: Reference;
};

export type ErrorDetails = {
  name?: string;
  errorText?: string;
};

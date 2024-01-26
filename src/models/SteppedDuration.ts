import { StepLimitUnit } from '../types/enums';
import { SteppedDurationData } from '../types/interfaces';

class SteppedDuration {
  initialDuration: string;
  subsequentStepsDuration: string;
  maximumDuration?: string;
  stepUnit: StepLimitUnit;

  constructor(data: Partial<SteppedDurationData> = {}) {
    this.initialDuration = data.initialDuration || '';
    this.subsequentStepsDuration = data.subsequentStepsDuration || '';
    this.maximumDuration = data.maximumDuration;
    this.stepUnit = data.stepUnit || StepLimitUnit.ZONES;
  }
}

export default SteppedDuration;

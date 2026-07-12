import { Nullable } from "../../../../shared/types/nullable.type";
import { CompoundInterest } from "../interfaces/compound-interest.interface";

export const INITIAL_COMPOUND_INTEREST_FORM: Nullable<CompoundInterest> = {
  initialAssets: 50000,
  monthlyContributions: 4000,
  increaseContributions: 0,
  period: 24,
  expectedYield: 1
} as const;

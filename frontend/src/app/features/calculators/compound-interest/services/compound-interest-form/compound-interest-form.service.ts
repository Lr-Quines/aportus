import { computed, Service, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { Nullable } from '../../../../../shared/types/nullable.type';
import { INITIAL_COMPOUND_INTEREST_FORM } from '../../consts/initial-compound-interest-form.const';
import { CompoundInterest } from '../../interfaces/compound-interest.interface';

@Service()
export class CompoundInterestFormService {

  private readonly compoundInterest = signal<Nullable<CompoundInterest>>({ ...INITIAL_COMPOUND_INTEREST_FORM });

  public readonly form = form<Nullable<CompoundInterest>>(this.compoundInterest, schemePath => {
    required(schemePath.period);
    required(schemePath.expectedYield);
  });

  public readonly submitPayload = computed<CompoundInterest>(() => {
    const value: Nullable<CompoundInterest> = this.compoundInterest();
    return {
      initialAssets: value.initialAssets ?? 0,
      monthlyContributions: value.monthlyContributions ?? 0,
      increaseContributions: value.increaseContributions ?? 0,
      period: value.period ?? 0,
      expectedYield: value.expectedYield ?? 0,
    };
  });

  public readonly canSubmit = computed<boolean>(() => this.form().valid());

}

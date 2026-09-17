export const SAGA_STEPS = [
  'CHANGE_PASS',
  'CHANGE_EMAIL', 
  'DEDUCT_BUYER',
  'CREDIT_PARTNER',
  'INVALIDATE_TOKEN',
  'MARK_SOLD',
  'SEND_EMAIL',
] as const;

export type SagaStep = typeof SAGA_STEPS[number];
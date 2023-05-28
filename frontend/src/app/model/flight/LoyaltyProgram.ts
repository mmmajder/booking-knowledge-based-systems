export class LoyaltyProgram {
  tier!: LoyaltyProgramTier;
  discount!: number;
}

export enum LoyaltyProgramTier {
  BRONZE,
  SILVER,
  GOLD
}

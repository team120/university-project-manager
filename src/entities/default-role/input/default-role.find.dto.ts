import { Exclude, Expose, Transform } from "class-transformer";

@Exclude()
export class DefaultRoleFindDto {
  @Expose()
  @Transform(({ value }) => value === "true")
  inResearchPack: boolean;
  @Expose()
  @Transform(({ value }) => value === "true")
  inAscendingOrder: boolean;
}
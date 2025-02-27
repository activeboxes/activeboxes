import { BaseModelSchema } from '../common';
import { Static, Type } from '@sinclair/typebox';


export enum CustomDomainStatus {
  ACTIVE = 'ACTIVE',
  PENDING = 'PENDING',
}


export const CustomDomain = Type.Object({
  ...BaseModelSchema,
  platformId: Type.String(),
  domain: Type.String(),
  status: Type.Enum(CustomDomainStatus),
})

export type CustomDomain = Static<typeof CustomDomain>

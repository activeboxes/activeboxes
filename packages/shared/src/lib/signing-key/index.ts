import { Static, Type } from '@sinclair/typebox';
import { ApId } from '../common/id-generator';
import { BaseModelSchema } from '../common';

export type SigningKeyId = ApId

export const SigningKey = Type.Object({
  ...BaseModelSchema,
})
export type SigningKey = Static<typeof SigningKey>

export const AddSigningKeyRequestBody = Type.Object({
})
export type AddSigningKeyRequestBody = Static<typeof AddSigningKeyRequestBody>

export const AddSigningKeyResponse = Type.Object({
})
export type AddSigningKeyResponse = Static<typeof AddSigningKeyResponse>

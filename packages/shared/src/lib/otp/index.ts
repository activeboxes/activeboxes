import { Static, Type } from '@sinclair/typebox';

export enum OtpType {
  EMAIL_VERIFICATION = 'EMAIL_VERIFICATION',
  PASSWORD_RESET = 'PASSWORD_RESET',
}

export enum OtpState {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
}

export const CreateOtpRequestBody = Type.Object({
  type: Type.Enum(OtpType),
  email: Type.String(),
})
export type CreateOtpRequestBody = Static<typeof CreateOtpRequestBody>

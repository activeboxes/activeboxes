import { Static, Type } from "@sinclair/typebox";
import { SAFE_STRING_PATTERN } from '../common';

export const CreatePlatformProjectRequest = Type.Object({
  displayName: Type.String({
    pattern: SAFE_STRING_PATTERN,
  }),
  externalId: Type.Optional(Type.String()),
})

export type CreatePlatformProjectRequest = Static<typeof CreatePlatformProjectRequest>;

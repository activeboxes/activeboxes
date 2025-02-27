import { FlowOperationType, Principal } from '@activeboxes/shared';

export async function assertUserHasPermissionToFlow(
  principal: Principal,
  operationType: FlowOperationType,
): Promise<void> {
  return Promise.resolve();
}

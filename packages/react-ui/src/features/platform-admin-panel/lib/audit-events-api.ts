import { api } from '@/lib/api';
import {
  ApplicationEvent,
  ListAuditEventsRequest,
} from '@activeboxes/ee-shared';
import { SeekPage } from '@activeboxes/shared';

export const auditEventsApi = {
  list(request: {
    cursor: string | undefined;
    limit: number | undefined;
    action: string | undefined;
    projectId: string[];
    userId: string | undefined;
    createdBefore: string | undefined;
    createdAfter: string | undefined
  }) {
    return api.get<SeekPage<ApplicationEvent>>('/v1/audit-events', request);
  },
};

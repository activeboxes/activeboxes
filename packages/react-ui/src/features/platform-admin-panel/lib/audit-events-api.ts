import { api } from '@/lib/api';
import {
  ApplicationEvent,
  ListAuditEventsRequest,
} from '@activeboxes/ee-shared';
import { SeekPage } from '@activeboxes/shared';

export const auditEventsApi = {
  list(request: ListAuditEventsRequest) {
    return api.get<SeekPage<ApplicationEvent>>('/v1/audit-events', request);
  },
};

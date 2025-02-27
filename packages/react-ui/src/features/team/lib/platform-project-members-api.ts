import { api } from '@/lib/api';
import {
  ListPlatformProjectMembersRequestQuery,
  ProjectMemberWithUser,
} from '@activeboxes/ee-shared';
import { SeekPage } from '@activeboxes/shared';

export const platformProjectMembersApi = {
  list(request: ListPlatformProjectMembersRequestQuery) {
    return api.get<SeekPage<ProjectMemberWithUser>>(
      '/v1/platform-project-members/users',
      request,
    );
  },
};

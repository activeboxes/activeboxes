import { api } from '@/lib/api';
import {
  IssueStatus,
  ListIssuesParams,
  PopulatedIssue,
  UpdateIssueRequestBody,
} from '@activeboxes/shared';
import { SeekPage } from '@activeboxes/shared';

export const issuesApi = {
  list(request: ListIssuesParams): Promise<SeekPage<PopulatedIssue>> {
    return api.get<SeekPage<PopulatedIssue>>('/v1/issues', request);
  },
  resolve(issueId: string) {
    const body: UpdateIssueRequestBody = {
      status: IssueStatus.RESOLEVED,
    };

    return api.post<void>(`/v1/issues/${issueId}`, body);
  },
  count() {
    return api.get<number>('/v1/issues/count');
  },
};

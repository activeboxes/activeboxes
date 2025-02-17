import { Permission } from "../common";
import { DefaultProjectRole } from '../project';
import { UserIdentity } from '../authentication/user-identity';
import { Static, Type } from '@sinclair/typebox';


export const ProjectMember = Type.Object({
  userId: Type.String(),
  user: UserIdentity,
})

export type ProjectMember = Static<typeof ProjectMember>


export type ProjectMemberRole = DefaultProjectRole
export const ProjectMemberRole = DefaultProjectRole

export const rolePermissions: Record<ProjectMemberRole, Permission[]> = {
  [ProjectMemberRole.ADMIN]: [
    Permission.READ_APP_CONNECTION,
    Permission.WRITE_APP_CONNECTION,
    Permission.READ_FLOW,
    Permission.WRITE_FLOW,
    Permission.UPDATE_FLOW_STATUS,
    Permission.READ_PROJECT_MEMBER,
    Permission.WRITE_PROJECT_MEMBER,
    Permission.WRITE_INVITATION,
    Permission.READ_INVITATION,
    Permission.WRITE_GIT_REPO,
    Permission.READ_GIT_REPO,
    Permission.READ_RUN,
    Permission.WRITE_RUN,
    Permission.READ_ISSUES,
    Permission.WRITE_ISSUES,
    Permission.WRITE_ALERT,
    Permission.READ_ALERT,
    Permission.WRITE_PROJECT,
  ],
  [ProjectMemberRole.EDITOR]: [
    Permission.READ_APP_CONNECTION,
    Permission.WRITE_APP_CONNECTION,
    Permission.READ_FLOW,
    Permission.WRITE_FLOW,
    Permission.UPDATE_FLOW_STATUS,
    Permission.READ_PROJECT_MEMBER,
    Permission.READ_INVITATION,
    Permission.WRITE_GIT_REPO,
    Permission.READ_GIT_REPO,
    Permission.READ_RUN,
    Permission.WRITE_RUN,
    Permission.READ_ISSUES,
    Permission.WRITE_ISSUES,
  ],
  [ProjectMemberRole.OPERATOR]: [
    Permission.READ_APP_CONNECTION,
    Permission.WRITE_APP_CONNECTION,
    Permission.READ_FLOW,
    Permission.UPDATE_FLOW_STATUS,
    Permission.READ_PROJECT_MEMBER,
    Permission.READ_INVITATION,
    Permission.READ_GIT_REPO,
    Permission.READ_RUN,
    Permission.WRITE_RUN,
    Permission.READ_ISSUES,
  ],
  [ProjectMemberRole.VIEWER]: [
    Permission.READ_APP_CONNECTION,
    Permission.READ_FLOW,
    Permission.READ_PROJECT_MEMBER,
    Permission.READ_INVITATION,
    Permission.READ_ISSUES,
  ],
}

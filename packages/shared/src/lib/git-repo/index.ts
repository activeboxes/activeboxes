import { Static, Type } from "@sinclair/typebox"


export enum GitBranchType {
  PRODUCTION = 'PRODUCTION',
  DEVELOPMENT = 'DEVELOPMENT',
}

export enum GitPushOperationType {
  PUSH_FLOW = 'PUSH_FLOW',
}


export const GitRepoWithoutSensitiveData = Type.Object({
})

export type GitRepoWithoutSensitiveData = Static<typeof GitRepo>


export const GitRepo = Type.Composite([
  GitRepoWithoutSensitiveData,
  Type.Object({
  }),
])

export type GitRepo = Static<typeof GitRepo>


export const PushGitRepoRequest = Type.Object({
  type: Type.Enum(GitPushOperationType),
  commitMessage: Type.String(),
  flowIds: Type.Array(Type.String()),
})

export type PushGitRepoRequest = Static<typeof PushGitRepoRequest>


export const ConfigureRepoRequest = Type.Object({
})

export type ConfigureRepoRequest = Static<typeof ConfigureRepoRequest>

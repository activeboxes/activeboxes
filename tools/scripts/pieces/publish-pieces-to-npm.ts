import { publishNxProject } from '../utils/publish-nx-project'
import { findAllPiecesDirectoryInSource } from '../utils/piece-script-utils'

const publishPiece = async (nxProjectPath: string): Promise<void> => {
  console.info(`[publishPiece] nxProjectPath=${nxProjectPath}`)
  await publishNxProject(nxProjectPath)
}

const main = async () => {
  const piecesSource = await findAllPiecesDirectoryInSource()
  for (const piece of piecesSource) {
    await publishPiece(piece)
  }
}

main()

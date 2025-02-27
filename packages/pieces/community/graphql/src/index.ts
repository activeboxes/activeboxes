
import { createPiece, PieceAuth } from "@activeboxes/pieces-framework";
import { query } from "./lib/actions/query";
import { PieceCategory } from "@activeboxes/shared";
    
    export const graphql = createPiece({
      displayName: "GraphQL",
      auth: PieceAuth.None(),
      minimumSupportedRelease: '0.30.0',
      logoUrl: "https://cdn.activeboxes.org/pieces/graphql.svg",
      categories:[PieceCategory.CORE],
      authors: ['mahmuthamet'],
      actions: [query],
      triggers: [],
    });
    
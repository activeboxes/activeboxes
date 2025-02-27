
    import { createPiece, PieceAuth } from "@activeboxes/pieces-framework";
    import { PieceCategory } from '@activeboxes/shared';
    import { outputQrcodeAction } from './lib/actions/output-qrcode-action'
    
    export const qrcode = createPiece({
      displayName: 'QR Code',
      auth: PieceAuth.None(),
      minimumSupportedRelease: '0.30.0',
      logoUrl: "https://cdn.activeboxes.org/pieces/qrcode.png",
      categories: [PieceCategory.CORE],
      authors: ['Meng-Yuan Huang'],
      actions: [
        outputQrcodeAction,
      ],
      triggers: [],
    });
    
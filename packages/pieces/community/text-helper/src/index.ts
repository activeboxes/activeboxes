import { PieceAuth, createPiece } from '@activeboxes/pieces-framework';
import { PieceCategory } from '@activeboxes/shared';
import { concat } from './lib/actions/concat';
import { find } from './lib/actions/find';
import { htmlToMarkdown } from './lib/actions/html-to-markdown';
import { markdownToHTML } from './lib/actions/markdown-to-html';
import { replace } from './lib/actions/replace';
import { split } from './lib/actions/split';
import { stripHtmlContent } from './lib/actions/strip-html';
import { slugifyAction } from './lib/actions/slugify';
import { defaultValue } from './lib/actions/default-value';

export const textHelper = createPiece({
  displayName: 'Text Helper',
  description: 'Tools for text processing',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://cdn.activeboxes.org/pieces/text-helper.svg',
  authors: [
    'joeworkman',
    'kishanprmr',
    'MoShizzle',
    'AbdulTheActivePiecer',
    'abuaboud',
    'AdamSelene',
    'Anmol-Gup',
  ],
  categories: [PieceCategory.CORE],
  actions: [
    concat,
    replace,
    split,
    find,
    markdownToHTML,
    htmlToMarkdown,
    stripHtmlContent,
    slugifyAction,
    defaultValue,
  ],
  triggers: [],
});

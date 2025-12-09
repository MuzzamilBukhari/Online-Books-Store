// Re-export Book interface and useBooks hook from the new Gutendex API hook
// This maintains backward compatibility with existing components
export type { Book } from './useBooks';
export { useBooks as default } from './useBooks';


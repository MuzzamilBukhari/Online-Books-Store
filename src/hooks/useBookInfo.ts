// Re-export Book interface and useBooks hook from the new Gutendex API hook
// This maintains backward compatibility with existing components
export { Book, useBooks as default } from './useBooks';

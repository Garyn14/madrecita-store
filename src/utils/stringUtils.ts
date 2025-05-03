/**
 * Normalizes a string by removing accents and converting to lowercase
 * This helps with searching for text with or without accents
 * 
 * @param text The string to normalize
 * @returns Normalized string without accents in lowercase
 */
export const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};
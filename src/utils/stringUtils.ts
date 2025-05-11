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

/**
 * Checks if a product name matches a search term
 * Handles multiple words in the search term and partial matches
 * 
 * @param productName The product name to check
 * @param searchTerm The search term to match against
 * @returns True if the product name matches the search term
 */
export const matchesSearch = (productName: string, searchTerm: string): boolean => {
  if (!searchTerm) return true;
  
  // Normalize both strings
  const normalizedProductName = normalizeText(productName);
  const normalizedSearchTerm = normalizeText(searchTerm);
  
  // If the entire search term is found in the product name
  if (normalizedProductName.includes(normalizedSearchTerm)) {
    return true;
  }
  
  // Split search term into words and check if any word matches
  const searchWords = normalizedSearchTerm.split(/\s+/).filter(word => word.length > 1);
  
  // If any word in the search term is found in the product name
  return searchWords.some(word => normalizedProductName.includes(word));
};
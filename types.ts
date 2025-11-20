
export enum MainCategory {
  BESTSELLER = 'Bestseller',
  TODAYS_SPECIAL = 'Todays Special',
  CHEFS_SPECIAL = 'Top Seller',
  SWEET_DRINKS = 'Sweet & Drinks',
  ABOUT_US = 'About Us',
}

export enum DietaryType {
  VEG = 'Veg',
  NON_VEG = 'Non Veg'
}

export enum PortionSize {
  SINGLE = 'Single', // 40%
  HALF = 'Half',     // 70%
  FULL = 'Full'      // 100%
}

export interface AddOn {
  name: string;
  price: number;
}

// This interface now matches a typical Vector DB Document structure
export interface Dish {
  id: string;
  name: string;
  description: string;
  basePrice: number; // The 100% price
  image: string;
  dietaryType: DietaryType;
  ingredients: string[];
  calories: number;
  rating: number;
  prepTime: string;
  servings: number;
  addOns: AddOn[];
  videoUrl?: string;
  chefNote?: string;
  recommendedDishIds?: string[];
  
  // Analytics / Vector DB Metadata
  salesMetrics?: {
    totalSold: number;
    dailyOnlineOrders: number;
    popularityScore: number; // 0 to 1
  };
}

export interface CartItem extends Dish {
  quantity: number;
  selectedAddons: string[];
  selectedPortion: PortionSize; // Track which size they bought
  finalPrice: number; // The calculated price based on portion
}

export enum AboutSection {
  RESTAURANT = 'The Restaurant',
  EVENTS = 'Book for Events',
  CHEFS = 'Chefs',
  REVIEWS = 'Reviews',
  SOCIAL = 'Social Media',
  CONTACT = 'Contact Number'
}

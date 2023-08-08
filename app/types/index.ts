type User = {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

type Recipe = {
  id: string;
  title: string;
  description?: string;
  ingredients: string[];
  steps: string[];
  categories?: string[];
  photo?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type { User, Recipe };

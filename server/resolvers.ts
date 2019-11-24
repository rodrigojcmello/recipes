import Recipe, { RecipeType } from './models/Recipe';

export default {
  Query: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAllRecipes: async (): Promise<any> => {
      return Recipe.find();
    }
  },
  Mutation: {
    addRecipe: async (
      root: () => {},
      args: RecipeType
    ): Promise<RecipeType> => {
      return new Recipe(args).save();
    }
  }
};

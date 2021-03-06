export const blogPostReducer = (state, action) => {
  switch (action.type) {
    case "setBlogPostData":
      return {
        ...action.newBlogPostData,
      };
    case "addNewBlogPost":
      return {
        ...state,
        blog_posts: [...state.blog_posts, action.blog_post],
        // filtered_blog_posts:
        //   state.selectedCategoty === action.blog_post.blog_post_category_id
        //     ? [...state.blog_posts, action.blog_post]
        //     : state.filtered_blog_posts,
      };

    case "setSelectedCategory":
      return {
        ...state,
        selectedCategory: action.selectedCategory,
        // filtered_blog_posts: state.blog_posts.filter((post) => post.blog_post_category_id === action.id),
      };

    case "clearSelectedCategory":
      return {
        ...state,
        selectedCategory: null,
        // filtered_blog_posts: [...state.blog_posts],
      };

    case "createCategory":
      return {
        ...state,
        blog_post_categories: [...state.blog_post_categories, { ...action.newCategory }],
      };

    case "updateCategory":
      return {
        ...state,
        blog_post_categories: state.blog_post_categories.map((category) => {
          if (action.categoryId !== category.id) return category;
          return {
            ...category,
            name: action.newName,
          };
        }),
      };

      case "deleteCategory":
        return {
          ...state,
          blog_post_categories: state.blog_post_categories.filter((category) => action.categoryId !== category.id),
        };

        case "showUncategorizedPosts":
          return {
            ...state,
            blog_post_categories: state.blog_post_categories.filter((category) => action.categoryId !== category.id),
          };
      
    default:
      return;
  }
};

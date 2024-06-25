export interface GeneralModel {
    posts: PostModel[]
    postCategories: PostCategoryModel[]
  }
  
  export interface PostModel {
    id: number
    title: string
    body: string
    userId: number
    date: number
    category: string
  }
  
  export interface PostCategoryModel {
    id: string
    title: string
  }
  
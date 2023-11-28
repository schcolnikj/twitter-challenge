export interface SingUpData {
  name: string;
  password: string;
  email: string;
  username: string;
}

export interface SingInData {
  username?: string;
  email?: string;
  password: string;
}

export interface PostData {
  content: string;
  parentId?: string;
  images?: File[];
}

export interface Post {
  id: string;
  content: string;
  parentId?: string;
  images?: string[];
  createdAt: Date;
  authorId: string;
  author: Author;
  reactions: Reaction[];
  comments: Post[];
  qtyComments: number;
  qtyLikes: number;
  qtyRetweets: number;
}

export interface Reaction {
  id: string;
  type: string;
  createdAt: Date;
  userId: string;
  postId: string;
  updatedAt: Date;
  deletedAt?: Date;
}
export interface Author {
  id: string;
  name?: string;
  username: string;
  profilePicture?: string;
  private: boolean;
  createdAt: Date;
}
export interface Chat {
  id: string;
  user1Id: string;
  user2Id: string;
  user1: User;
  user2: User;
  messages: MessageDTO[]
}

export interface User {
  id: string;
  name?: string;
  username: string;
  profilePicture?: string;
  isPrivate: boolean;
  createdAt: Date;
  followers: Author[];
  following: Author[];
  posts: Post[];
}

export interface MessageDTO {
  id: string;
  body: string;
  createdAt: Date;
  chatId: string;
  senderId: string;
  chat: Chat;
}

export interface ChatDTO {
  id: string;
  users: Author[];
  messages: MessageDTO[];
}

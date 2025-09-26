export interface University {
  name: string;
  type: string;
  faculty: string;
  examYear: number;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  subject: string;
  amazonUrl: string | null;
  imageUrl: string | null;
  universities: University[];
}

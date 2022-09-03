import { Tag } from './Tag';

export type Note = {
    name: string,
    filename: string,
    date: string,
    tags: Tag[]
}
import { Tag } from './Tag';

export type Work = {
    name: string,
    description: string,
    tags: Tag[],
    source_code?: string,
    deployment?: string
}
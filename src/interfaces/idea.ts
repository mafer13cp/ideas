export interface Idea {
    id: number;
    date: string;
    summary: string;
    assignees: string;
    workflow: string;
    reviewScore: number;
    reviewNumber: string;
    user: string;
    anonymous: number; //bool 0 || 1
}

export interface Developer {
    firstName: string;
    lastName: string;
    team: string;
}

export interface DeveloperDoc extends Developer {
    id: string;
}
export interface IRanking {
    _id: string;
    name: string;
    slug: string;
    verified: boolean;
    volume: {
        eth: number;
        change: number;
    };
    sales: {
        count: number;
        change: number;
    };
}

export interface OverallTransactionFloors {
    '1d': { eth: number };
    '3d': { eth: number };
    '7d': { eth: number };
    dynamic: { eth: number };
}

export interface IProjectStats {
    mintCount?: number;
    sales24h?: {
        avgPrice?: {
            eth: number;
            change: number;
        };
        buyers?: {
            unique: number;
            change: number;
        };
        transactions?: {
            count: number;
            change: number;
        };
        volume?: {
            eth: number;
            change: number;
        };
    };
    listingFloor?: number;
    transactionFloors?: OverallTransactionFloors;
    uniqueOwners?: number;
}

export interface ITraitMetadata {
    count: number;
    value: string;
    traitType: string;
    transactionFloor: {
        eth: number;
        earliestData: string;
        numTransactions: number;
    };
    listingFloor: {
        eth: number;
    };
}

export interface IProject {
    _id: string;
    contractAddresses: string[];
    coverUrl: string;
    description: string | null;
    discord: string | null;
    imageUrl: string;
    isVerified: boolean;
    name: string;
    projectId: string;
    stats: IProjectStats | null;
    traitMetadata?: ITraitMetadata[];
    twitter?: {
        username?: string;
        followersCount?: number;
    };
    website?: string;
    url: string;
}
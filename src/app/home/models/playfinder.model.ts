export interface Filter {
    starts: string;
    ends: string;
    fromTime: string;
    toTime: string;
}

export interface Meta {
    total_items: number;
    filter: Filter;
}

export interface Attributes {
    starts: string;
    ends: string;
    price: string;
    admin_fee: string;
    currency: string;
    availabilities: number;
}

export interface PlayData {
    type: string;
    id: string;
    attributes: Attributes;
}

export interface PlayDataRoot {
    meta: Meta;
    data: PlayData[];
}

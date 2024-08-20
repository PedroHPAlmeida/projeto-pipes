export type Operation = {
    customerName: string;
    customerStatus: CustomerStatus;
    operationDate: string;
    operationValue: number;
    operationRisck: number;
}

export enum CustomerStatus {
    ACTIVE = 1,
    INACTIVE = 2
}
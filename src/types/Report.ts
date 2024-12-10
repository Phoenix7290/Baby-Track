export interface Report {
    id: number;
    type: 'sono' | 'fralda' | 'alimentacao';
    startTime?: string;
    endTime?: string;
    dateTime?: string;
    diaperStatus?: string;
    feedingType?: 'mamadeira' | 'amamentacao';
    quantity?: number;
    breastSide?: 'esquerdo' | 'direito';
    description?: string;
}  
export interface BLEDevice {
    name: string | null | undefined,
    id: string,
    advertising: any,
    rssi: number,
    services: number[] | null,
    characteristics: Characteristic[] | null
} 

export interface Characteristic {
    service: string,
    characteristic: string,
    properties: string[],
    descriptors: any[] | null
}
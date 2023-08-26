export interface BLEDevice {
    name: string | null | undefined,
    advertising: any,
    rssi: number,
    id: string
} 
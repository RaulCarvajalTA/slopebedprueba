export interface Program {
    id: number
    title: string,
    info: Order[]
}

export interface Order {
    angle: number,
    hour: string
}
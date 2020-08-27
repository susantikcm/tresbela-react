export interface IFieldScheme {
    name: string,
    type: string,
    label: string,
    required: boolean,
    options?: string[],
    value?: any,
    group?: string,
    placeholder?: string,
}
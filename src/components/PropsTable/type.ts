export interface PropsTableProps {
    name: string;
    type: { name: string };
    flags: { isOptional: boolean };
    comment?: { summary?: [{ text?: string }] };
}

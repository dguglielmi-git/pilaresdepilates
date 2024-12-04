export type NodeMenu = {
    id: number;
    label: string;
    icon: string;
    iconSize: number;
    target: string;
    level: number;
    nodes: NodeMenu[];
}
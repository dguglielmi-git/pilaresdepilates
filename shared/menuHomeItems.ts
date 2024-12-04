import {
    mdiAccountCogOutline,
    mdiOfficeBuilding,
    mdiAccountHardHat
} from "@mdi/js";
import { NodeMenu } from "@/types/NodeMenu";

export const menuHomeItems: NodeMenu[] = [
    {
        id: 0,
        label: "Admin",
        icon: mdiAccountCogOutline,
        iconSize: 1,
        target: "",
        level: 0,
        nodes: [
            {
                id: 1,
                label: "Business",
                icon: mdiOfficeBuilding,
                iconSize: 1,
                target: "",
                level: 1,
                nodes: [],
            },
            {
                id: 2,
                label: "My Assignments",
                icon: mdiAccountHardHat,
                iconSize: 1,
                target: "",
                level: 1,
                nodes: [],
            },
        ],
    },
];
import { mdiAccountHardHat, mdiHandshakeOutline } from "@mdi/js";

const getDashboardCards = async () => {
    return [
        {
            id: 0,
            icon: mdiHandshakeOutline,
            iconSize: 2,
            bodyText: "Manage your Business",
            statusQuantity: 0,
            statusLabel: "Managed",
            link: "/business",
        },
        {
            id: 2,
            icon: mdiAccountHardHat,
            iconSize: 2,
            bodyText: "My Assignments",
            statusQuantity: 0,
            statusLabel: "Assignments",
            link: "/myassignments",
        },
    ];
}

export { getDashboardCards }
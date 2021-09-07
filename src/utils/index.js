// Helper method for sorting villagers
export const compare = (a, b, sortDirection) => {
    if (a < b) {
        return sortDirection === 'asc' ? -1 : 1;
    }
    if (a > b) {
        return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
}

// Helper method for getting the property of a villager based on field ID
export const getProperty = (villager, fieldId) => {
    switch (fieldId) {
        case 0:
            return villager['name']['name-USen'];
        case 1:
            return villager['species'];
        case 2:
            return villager['personality'];
        case 3:
            return villager['gender'];
        default:
            return villager;
    }
}
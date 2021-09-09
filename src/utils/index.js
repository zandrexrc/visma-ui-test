// Helper method for sorting data
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
export const getVillagerProperty = (villager, fieldId) => {
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

// Helper method for getting the property of a fossil based on field ID
export const getFossilProperty = (fossil, fieldId) => {
    switch (fieldId) {
        case 0:
            return fossil['name']['name-USen'];
        case 1:
            return fossil['part-of'];
        default:
            return fossil;
    }
}

// Helper method for getting the property of an art piece based on field ID
export const getArtProperty = (art, fieldId) => {
    switch (fieldId) {
        case 0:
            return art['name']['name-USen'];
        case 1:
            return art['hasFake'];
        default:
            return art;
    }
}
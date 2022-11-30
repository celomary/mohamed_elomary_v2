export const addFieldsToAttrItems = (attrs) => {
    return attrs.map((attribute) => {
        const items = attribute.items.map((item) => {
            return { ...item, selected: false };
        });
        return { ...attribute, items };
    });
};

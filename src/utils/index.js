export const LayoutEnum = Object.freeze({
  LIST: "List",
  TABLE: "Table"
});

export const Layouts = [LayoutEnum.LIST, LayoutEnum.TABLE];
export function isLayoutList(layout) {
    return layout && layout === LayoutEnum.LIST;
}

export function isLayoutTable(layout) {
    return layout && layout === LayoutEnum.TABLE;
}


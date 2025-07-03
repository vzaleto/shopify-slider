import {Product} from "@/types";

export function extraColorsFromProduct(product: Product): string[] {
    const set = new Set<string>();

    for (const variant of product.variants) {
        for (const option of variant.selectedOptions) {
            if (option.name === 'Color') {
                set.add(option.value)
            }
        }
    }
    return Array.from(set);
}

export function parseAccordionMetafields(product: Product) {

    const accordionFields = product.metafields.filter(
        (elem) => elem.key?.toLowerCase().startsWith("accordion") && elem.value.trim() !== ""
    );

    const allowMultipleOpenField = accordionFields.find(
        (elem) => elem.key === "allowMultipleOpen"
    );

    const accordionItems = accordionFields.map((field) => ({
        title: field.key,
        content: field.value,
    }));

    return {
        accordionItems,
        allowMultipleOpen: allowMultipleOpenField?.value === "true",
    };

}
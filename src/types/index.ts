export interface ColorGalleryProps {
    images: { url: string; altText: string }[]
    selectedColor: string;
}

// export interface Product {
//     variants: {
//         selectedOptions: Array<{ name: string; value: string; }>;
//     }[];
//     media: Array<{ url: string; altText: string; }>;
// }

export interface Media {
    url: string;
    altText: string;
}

export interface Variant {
    id: string,
    title: string,
    selectedOptions: { name: string; value: string; }[],
}

export interface Metafield {
    namespace: string;
    key: string;
    value: string
}
export interface Product{
    id: string;
    title: string;
    media: Media[];
    variants: Variant[];
    metafields: Metafield[]
}
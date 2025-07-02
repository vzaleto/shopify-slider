'use client'
import {useMemo, useState} from "react";
import {ColorSelector} from "@/components/colorSelection/ColorSelector";
import {ColorGallery} from "@/components/colorGallery/colorGallery";
import {Product} from "@/types";
import {Accordion} from "@/components/accordion/Accordion";



export default function ProductPage() {

    const allColors: string[] = useMemo(() => {

        const set = new Set<string>();

        product.variants.forEach((variant) => {

            const colorOption = variant.selectedOptions.find((elem) => elem.name === 'Color');

            if (colorOption) {
                set.add(colorOption.value)
            }
        })
        return Array.from(set);
    }, []);

    const [selectedColor, setSelectedColor] = useState(allColors[0]);

    return (
        <>
            <ColorSelector selectedColor={selectedColor} availableColors={allColors} onChange={setSelectedColor}/>
            <ColorGallery images={product.media} selectedColor={selectedColor}/>
            <Accordion items={metafields.accordionItems} allowMultipleOpen={metafields.allowMultipleOpen}/>
        </>
    )

}
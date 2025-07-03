'use client';
import {useMemo, useState} from "react";
import {ColorSelector} from "@/components/colorSelection/ColorSelector";
import {ColorGallery} from "@/components/colorGallery/colorGallery";
import {Accordion} from "@/components/accordion/Accordion";
import {Product} from "@/types";
import {extraColorsFromProduct, parseAccordionMetafields} from "@/utils/productUtils";

export default function ProductClient({product}: { product: Product }) {

    const allColors: string[] = useMemo(() =>  extraColorsFromProduct(product), [product]);

    const [selectedColor, setSelectedColor] = useState(allColors[0]);

    const metafields = useMemo(() => parseAccordionMetafields(product), [product.metafields]);

    return (
        <div className="flex flex-col mt-6 lg:flex-row   ">
            <div className="lg:w-2/3 w-full ">
                <ColorGallery images={product.media} selectedColor={selectedColor}/>
            </div>
            <div className="lg:w-1/3 w-full flex flex-col justify-between min-h pl-4 " >
                <ColorSelector selectedColor={selectedColor} availableColors={allColors} onChange={setSelectedColor}/>

                {metafields.accordionItems.length > 0 &&
                    <Accordion items={metafields.accordionItems} allowMultipleOpen={metafields.allowMultipleOpen}/>
                }
            </div>


        </div>
    )
}
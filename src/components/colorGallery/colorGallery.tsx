
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import {ColorGalleryProps} from "@/types";
import {useEffect, useState} from "react";
import {getSchemaForDevice, schema} from "@/utils/getSwiperShema";

export const ColorGallery = ({images,selectedColor} : ColorGalleryProps) => {

    const [swiperConfig, setSwiperConfig] = useState(schema.desktop);

    useEffect(() => {
        const updateConfig = () =>{
            setSwiperConfig(getSchemaForDevice(window.innerWidth))
        }
        updateConfig();
        window.addEventListener('resize', updateConfig);
        return ()=> window.removeEventListener('resize', updateConfig);

    }, []);

    const filteredImages = images.filter((image)=> {
        if(!image.altText) return false;
            return   image.altText.toLowerCase() === selectedColor.toLowerCase()
    });

    return (
        <Swiper modules={[Navigation,Pagination]} spaceBetween={swiperConfig.spaceBetween} slidesPerView={swiperConfig.slidesPerView} navigation={swiperConfig.navigation} pagination={ swiperConfig.pagination ? {clickable: true} : false } >
            {
                filteredImages.map((image) => (
                    <SwiperSlide key={image.url}>

                        {/*<Image src={image.url} alt={image.altText ?? ''} width={500} height={500} />*/}
                        <img src={image.url} alt={image.altText} className="w-full object-contain" width={500} height={500} />
                    </SwiperSlide>
                ))
            }
        </Swiper>

    );
};
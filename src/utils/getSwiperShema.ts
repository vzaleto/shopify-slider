export const schema = {
    desktop:{slidesPerView: 3,spaceBetween:30,navigation:true,pagination:true},
    tablet:{slidesPerView: 2,spaceBetween:20,navigation:true,pagination:false},
    mobile:{slidesPerView: 1,spaceBetween:10,navigation:false,pagination:true}
}
export const getSchemaForDevice = (width: number) => {
    if (width >= 1024) {
        return schema.desktop
    } else if (width >= 640) {
        return schema.tablet
    } else {
        return schema.mobile
    }
}
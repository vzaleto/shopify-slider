import {getProductByHandle} from "@/services/getProductByHandle";
import ProductClient from "@/components/ProducClient/ProductClient";


export default async function ProductPage(props: { params: Promise< { handle: string }> }) {

 const {handle} = await props.params;

    const product = await  getProductByHandle(handle);

    return (
        <div className="container mx-auto" >
            <ProductClient product={product}/>
        </div>

    )
}
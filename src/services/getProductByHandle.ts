import {Product} from "@/types";
import {shopifyFetch} from "@/services/shopify";

export async function getProductByHandle(handle: string): Promise<Product> {
    const query = `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      media(first: 20) {
        nodes {
          ... on MediaImage {
            image {
              url
              altText
            }
          }
        }
      }
      variants(first: 20) {
        nodes {
          id
          title
          selectedOptions {
            name
            value
          }
        }
      }
      metafields(identifiers: [
        { namespace: "custom", key: "accordion_1--accordion_2_title" },
        { namespace: "custom", key: "accordion----accordion_1_title" },
        { namespace: "test_data", key: "snowboard_length"}
      ]) {
        namespace
        key
        value
      }
    }
  }
`;
    const dataShopify = await shopifyFetch<{ product: any }>(query, {handle});
    const {product} = dataShopify;
    if (!product) throw new Error("Product not found");

    return {
        id: product.id,
        title: product.title,
        media: product.media.nodes.map((elem: any) => ({
        url: elem.image.url,
        altText: elem.image.altText
    })),
        variants: product.variants.nodes,
        metafields: product.metafields
    }

}
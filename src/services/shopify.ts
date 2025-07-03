import axios from "axios";
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const SHOPIFY_DOMAIN = process.env.SHOPIFY_DOMAIN;

const SHOPIFY_API_URL = `${SHOPIFY_DOMAIN}/api/2024-04/graphql.json`;

export async function shopifyFetch<T>(query: string, variables:Record<string, any> = {}): Promise<T> {

    try {
        const response = await axios.post(SHOPIFY_API_URL, {
            query:  query,
            variables: variables
        }, {
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
            },
        });

        return response.data.data;

    }catch (error) {
        console.error('Error in shopifyFetch:', error);
        throw error;
    }

}
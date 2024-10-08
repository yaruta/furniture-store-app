import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function fetchShopProducts({signal}) {
    const response = await fetch('https://furniture-shop-md-default-rtdb.europe-west1.firebasedatabase.app/products.json', {signal});

    if(!response.ok) {
        const error = new Error("An error occured while fetching the products.");
        error.code = error.status;
        error.info = await response.json();
        throw error;
    }

    const data = await response.json();

    return data;
}

export async function fetchProduct({id, signal}) {
    const response = await fetch(`https://furniture-shop-md-default-rtdb.europe-west1.firebasedatabase.app/products/${id}.json`, {signal});

    if(!response.ok) {
        const error = new Error("An error occured while fetching the item.");
        error.code = error.status;
        error.info = await response.json();
        throw error;
    }
    
    const data = await response.json();
    return data;
}

export async function fetchFAQ({signal}) {
    const response = await fetch('https://furniture-shop-md-default-rtdb.europe-west1.firebasedatabase.app/faq.json', {signal});

    if(!response.ok) {
        const error = new Error("An error occured while fetching the faq");
        error.code = error.status;
        error.info = await response.json();
        throw error;
    }

    const data = await response.json();
    return data;
}
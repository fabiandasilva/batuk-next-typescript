type FormatPrice = {
    price: number
}

export const useFormatPrice = ({ price }: FormatPrice) => {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "ARS",
    }).format(price);
}
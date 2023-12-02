import { MockupData } from "@/app/data/Mockup";
import { NextResponse } from "next/server";

const sleep = (timer: number | undefined) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
}


export async function GET(_, { params }) {
    const { category } = params

    const items = category === 'all'
        ? MockupData
        : MockupData.filter(product => product.category.toLowerCase() === category.toLowerCase())


    await sleep(100);
    return NextResponse.json(items)
}
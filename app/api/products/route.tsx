import { MocukupDada } from "@/app/data/Mockup";
import { NextResponse } from "next/server";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer));
}


export async function GET() {

    await sleep(1000);
    return NextResponse.json(MocukupDada)
}
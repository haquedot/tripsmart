import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import getUserDetails from "@/helpers/getUserDetails";

connect();

export async function POST(request: NextRequest) {
    try {
        // extract data from token

        const userId = await getUserDetails(request);

        const user = await User.findOne({
            _id: userId
        }).select("-password")

        return NextResponse.json(
            {
                message: "User details fetched successfully",
                data: user,
            }, { status: 200 }
        );

    } catch (error: any) {
        return NextResponse.json(
            {
                error: error.message,
            }, { status: 500 }
        );
    }
}
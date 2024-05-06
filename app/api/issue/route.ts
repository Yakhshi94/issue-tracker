import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";
import { useState } from "react";

const createIssueSchema = z.object({
    title: z.string().min(1, 'Length should be longer than 1 character').max(255),
    description: z.string().min(1, "The length should be greather than 1 char")
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if(!validation.success)
        return NextResponse.json(validation.error.format(), { status: 400 })
    const newIssue = prisma.issue.create({
        data: { title: body.title, description: body.description }
    });

    return NextResponse.json(newIssue, { status: 201 });
}
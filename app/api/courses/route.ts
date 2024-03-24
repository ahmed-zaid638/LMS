import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const userId = auth()?.userId;
    const { title } = await req.json();
    if (!userId) {
      return new NextResponse("Unauthorized user", { status: 401 });
    }

    const course = await prisma.course.create({
      data: {
        userId: userId,
        title: title,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log({ "[Courses]": error });
    return new NextResponse("Internal Error", { status: 500 });
  }
}

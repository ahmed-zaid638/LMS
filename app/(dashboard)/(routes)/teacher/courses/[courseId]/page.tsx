import React from "react";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import IconBadge from "@/components/icon-badge";
interface CoursePageProps {
  params: {
    courseId: string;
  };
}

async function CoursePage({ params }: CoursePageProps) {
  const userId = auth().userId;
  console.log(userId);
  if (!userId) {
    return redirect("/");
  }

  // course
  const course = await prisma.course.findUnique({
    where: {
      id: params.courseId,
    },
  });

  if (!course) {
    return redirect("/");
  }
  // required fields
  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
  ];
  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;


  return (
    <div className="p-2">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Course Setup</h1>
          <span className="text-sm text-slate-700">
            Completed all fields {completionText}
          </span>
        </div>
        <div className="flex items-center gap-x-2">
          <IconBadge />
          <h2 className="text-xl">Customize your course</h2>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;

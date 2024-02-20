"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";

function CreatePage() {
  const router = useRouter();
  const formSchema = z.object({
    title: z.string().min(1, { message: "Title is requried" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      title: "",
    },
    resolver: zodResolver(formSchema),
  });
  const { isSubmitting, isValid } = form.formState;

  // onSubmit
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/teacher/courses/${response.data.id}`);
      toast.success("asdasdfasdg");

      console.log(values.title);
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    }
  };
  return (
    <div className="">
      <div className="">
        <h1 className="text-2xl">Name your course</h1>
        <p className="text-sm text-slate-600">
          What would you like to name your course? Don&apos;t worry, you can
          change this later.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course title</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="e.g. 'Advanced web development'"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormDescription>
                  What will you teach in this course?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <div className="flex items-center gap-x-2 mt-3">
            <Link href="/">
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default CreatePage;

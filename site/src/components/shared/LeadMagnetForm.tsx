"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, { message: "Минимум 2 символа" }),
  email: z.string().email({ message: "Некорректный email" }),
});

type FormValues = z.infer<typeof formSchema>;

export function LeadMagnetForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    // Имитация отправки
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Lead Magnet Subscribe:", values);
    
    toast.success("Чек-лист отправлен!", {
      description: "Проверьте вашу почту (включая папку Спам).",
      style: { backgroundColor: "#F7F0E6", color: "#2C1810", border: "1px solid #E5D5C5" }
    });
    
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-sm">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  placeholder="Ваше имя" 
                  className="font-sans border-white/40 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white focus-visible:border-white h-14 px-5 text-lg" 
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-[#FFD7D7] text-xs font-medium" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  placeholder="Ваш email" 
                  type="email"
                  className="font-sans border-white/40 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white focus-visible:border-white h-14 px-5 text-lg" 
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-[#FFD7D7] text-xs font-medium" />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-white hover:bg-[#F7F0E6] text-[#7A9270] rounded-full h-14 text-lg font-sans font-semibold transition-colors mt-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправка..." : "Получить чек-лист"}
        </Button>
      </form>
    </Form>
  );
}

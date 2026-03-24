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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа." }),
  contact: z.string().min(5, { message: "Введите корректный номер телефона или Telegram." }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    // Имитация отправки (в будущем здесь будет интеграция с Resend)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form values:", values);
    
    toast.success("Заявка успешно отправлена!", {
      description: "Я свяжусь с вами в ближайшее время.",
      style: { backgroundColor: "#96AB88", color: "white", border: "none" }
    });
    
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg shadow-[#2C1810]/5 border border-[#E5D5C5]">
      <h3 className="font-display text-2xl text-[#2C1810] mb-6">
        Оставить заявку на консультацию
      </h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-sans text-[#6B5B52]">Ваше имя</FormLabel>
                <FormControl>
                  <Input placeholder="Анна" className="font-sans border-[#E5D5C5] focus-visible:ring-[#96AB88] bg-[#F7F0E6]/30 text-lg py-5" {...field} />
                </FormControl>
                <FormMessage className="text-[#D94040] text-sm" />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-sans text-[#6B5B52]">Телефон или Telegram</FormLabel>
                <FormControl>
                  <Input placeholder="+7 (999) 000-00-00 или @username" className="font-sans border-[#E5D5C5] focus-visible:ring-[#96AB88] bg-[#F7F0E6]/30 text-lg py-5" {...field} />
                </FormControl>
                <FormMessage className="text-[#D94040] text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-sans text-[#6B5B52]">Что вас беспокоит? (необязательно)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Опишите вашу ситуацию в свободной форме..." 
                    className="font-sans min-h-[120px] resize-none border-[#E5D5C5] focus-visible:ring-[#96AB88] bg-[#F7F0E6]/30 text-lg" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-[#D94040] text-sm" />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-[#96AB88] hover:bg-[#7A9270] text-white rounded-full py-6 text-lg font-sans font-semibold transition-colors mt-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправка..." : "Отправить заявку"}
          </Button>
          
          <p className="text-xs text-[#A58D7F] text-center mt-4">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
          </p>
        </form>
      </Form>
    </div>
  );
}

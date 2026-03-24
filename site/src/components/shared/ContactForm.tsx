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
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Ошибка отправки");
      }

      toast.success("Заявка успешно отправлена!", {
        description: "Я свяжусь с вами в ближайшее время.",
        style: { backgroundColor: "var(--color-sage)", color: "white", border: "none" }
      });
      form.reset();
    } catch {
      toast.error("Не удалось отправить заявку", {
        description: "Попробуйте позже или напишите в Telegram.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg shadow-dark/5 border border-border">
      <h3 className="font-display text-2xl text-dark mb-6">
        Оставить заявку на консультацию
      </h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-sans text-muted">Ваше имя</FormLabel>
                <FormControl>
                  <Input placeholder="Анна" className="font-sans border-border focus-visible:ring-sage bg-cream/30 text-lg py-5" {...field} />
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
                <FormLabel className="font-sans text-muted">Телефон или Telegram</FormLabel>
                <FormControl>
                  <Input placeholder="+7 (999) 000-00-00 или @username" className="font-sans border-border focus-visible:ring-sage bg-cream/30 text-lg py-5" {...field} />
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
                <FormLabel className="font-sans text-muted">Что вас беспокоит? (необязательно)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Опишите вашу ситуацию в свободной форме..." 
                    className="font-sans min-h-[120px] resize-none border-border focus-visible:ring-sage bg-cream/30 text-lg" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-[#D94040] text-sm" />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-sage hover:bg-sage-dark text-white rounded-full py-6 text-lg font-sans font-semibold transition-colors mt-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Отправка..." : "Отправить заявку"}
          </Button>
          
          <p className="text-xs text-taupe text-center mt-4">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
          </p>
        </form>
      </Form>
    </div>
  );
}

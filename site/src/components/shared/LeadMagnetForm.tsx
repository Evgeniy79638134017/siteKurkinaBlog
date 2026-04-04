"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { toast } from "sonner";

import Link from "next/link";
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
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, { message: "Минимум 2 символа" }),
  email: z.string().email({ message: "Некорректный email" }),
  consent: z.literal(true, {
    message: "Необходимо дать согласие.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function LeadMagnetForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      consent: undefined as unknown as true,
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Ошибка отправки");
      }

      toast.success("Чек-лист отправлен!", {
        description: "Проверьте вашу почту (включая папку Спам).",
        style: { backgroundColor: "var(--color-cream)", color: "var(--color-dark)", border: "1px solid var(--color-border)" }
      });
      form.reset();
    } catch {
      toast.error("Не удалось отправить чек-лист", {
        description: "Попробуйте позже.",
      });
    } finally {
      setIsSubmitting(false);
    }
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

        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value === true}
                  onCheckedChange={field.onChange}
                  className="border-white/40 data-[state=checked]:bg-white data-[state=checked]:text-sage-dark"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="font-sans text-xs text-white/70 leading-snug cursor-pointer">
                  Даю согласие на обработку{" "}
                  <Link href="/privacy" className="underline hover:text-white/90 transition-colors">
                    персональных данных
                  </Link>{" "}
                  (152-ФЗ)
                </FormLabel>
                <FormMessage className="text-[#FFD7D7] text-xs font-medium" />
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-white hover:bg-cream text-sage-dark rounded-full h-14 text-lg font-sans font-semibold transition-colors mt-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправка..." : "Получить чек-лист"}
        </Button>
      </form>
    </Form>
  );
}

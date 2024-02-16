"use client";
import React from "react";
import type { Contact } from "@/lib/validation/contact_validation";
import { contact_schema } from "@/lib/validation/contact_validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { FormItem, FormField, FormMessage, Form, FormControl } from "./ui/form";

const ContactForm = () => {
  const form = useForm<Contact>({
    resolver: zodResolver(contact_schema),
  });

  function onSubmit(values: Contact) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form action="" className="space-y-7 pb-10">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="" placeholder="Name*" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="" placeholder="Email*" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="" placeholder="Subject*" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  rows={5}
                  className="border-none bg-neutral-800 rounded-2xl py-7"
                  placeholder="Message*"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full bg-neutral-700 py-8 hover:bg-neutral-100 hover:text-neutral-900 rounded-2xl"
          type="submit"
        >
          Contact Me
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;

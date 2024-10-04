"use client";
import PWInput from "@/components/form/PWInput";
import PWTextarea from "@/components/form/PWTextarea";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Spinner } from "@nextui-org/spinner";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

const Contact = () => {
  const methods = useForm();

  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-center items-center mb-10 gap-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
            Contact Us
          </h2>
          <p className="max-w-2xl text-center">
            Have a question or need help with your rental? We are here to help!
            Fill out the form below and we will get back to you as soon as
            possible.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <Card className="md:order-2">
            <CardHeader>
              <h1 className="text-2xl font-bold">Send Us a Message</h1>
            </CardHeader>
            <CardBody>
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <PWInput
                      name="name"
                      type="text"
                      placeholder="your@email.com"
                      label="Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <PWInput
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      label="Email"
                      required
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <PWTextarea
                      label={"Address"}
                      placeholder="Enter your address"
                      name="address"
                      required
                    />
                  </div>

                  <Button
                    className="w-full bg-primary hover:bg-primaryLight mt-6"
                    type="submit"
                  >
                    {"Register"}
                  </Button>
                </form>
              </FormProvider>
            </CardBody>
          </Card>

          <Card className="md:order-1">
            <CardHeader>
              <h1 className="text-2xl font-bold">Contact Information</h1>
            </CardHeader>
            
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;

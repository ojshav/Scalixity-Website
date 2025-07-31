"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/src/app/components/ui/card";
import { Input } from "@/src/app/components/ui/input";
import { Textarea } from "@/src/app/components/ui/textarea";
import { Button } from "@/src/app/components/ui/button";
import { Label } from "@/src/app/components/ui/label";
import { Checkbox } from "@/src/app/components/ui/checkbox";
import { useToast } from "@/src/app/hooks/use-toast";
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/src/app/components/ui/dialog";

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  github: string;
  experience: string;
  about: string;
  agree: boolean;
}

export default function ChatbotHackathonPage() {
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormInputs>({
    defaultValues: { experience: "Beginner" }
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    toast({
      title: "Registration Successful!",
      description: `Thank you for registering for the Build-A-Chatbot Hackathon. We will contact you soon.`,
    });
    reset();
    setOpen(false);
  };

  return (
    <div className="bg-[#F3F1EB] min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <Card className="w-full max-w-3xl mx-auto mb-10">
          <CardHeader>
            <img src="/images/ai-chatbot.svg" alt="Build-A-Chatbot Hackathon" className="w-full max-h-64 object-contain rounded-xl shadow mb-4" />
            <CardTitle className="text-3xl md:text-4xl mb-2 text-black">Build-A-Chatbot Hackathon</CardTitle>
            <CardDescription className="text-gray-900 mb-4">
              <span className="block mb-2">Create a functional AI chatbot for a real-world use case! Use Scalixity's chatbot service or any API provided to build innovative solutions.</span>
              <ul className="list-disc list-inside text-gray-900 text-base mb-2 text-left mx-auto max-w-xl">
                <li>Open to developers, students, and automation lovers</li>
                <li>Individual or team participation allowed</li>
                <li>Create chatbots for e-commerce, health, or support use cases</li>
                <li>Winners get featured on Scalixity.com</li>
              </ul>
              <div className="mt-4 text-left mx-auto max-w-xl">
                <h3 className="text-lg font-semibold mb-1">Hackathon Details:</h3>
                <ul className="list-disc list-inside text-gray-900 text-base mb-2">
                  <li><b>Target:</b> Developers, students, and automation lovers</li>
                  <li><b>Objective:</b> Create a functional AI chatbot for a real-world use case</li>
                  <li><b>Use Cases:</b> E-commerce, health, support, or any innovative application</li>
                  <li><b>Bonus:</b> Use Scalixity's chatbot service or any API provided</li>
                  <li><b>Reward:</b> Winner's chatbot will be featured on Scalixity.com</li>
                  <li><b>Submission Deadline:</b> 15th August 2025, 11:59 PM IST</li>
                  <li><b>Judging Criteria:</b> Functionality, Innovation, User Experience, Technical Implementation</li>
                </ul>
                <p className="mt-2">For more information, contact <a href="mailto:info@scalixity.com" className="underline text-primary">info@scalixity.com</a></p>
              </div>
            </CardDescription>
            <Button className="mt-4 px-8 py-3 text-lg" onClick={() => setOpen(true)}>
              Register Now
            </Button>
          </CardHeader>
        </Card>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-lg w-full bg-white border border-primary/30">
            <DialogHeader>
              <DialogTitle className="text-black">Register for Build-A-Chatbot Hackathon</DialogTitle>
              <DialogDescription className="text-gray-900">Fill the form below to participate in the hackathon.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Your Name" {...register("name", { required: "Name is required" })} />
                    {errors.name && <span className="text-destructive text-xs">{errors.name.message}</span>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" {...register("email", { required: "Email is required" })} />
                    {errors.email && <span className="text-destructive text-xs">{errors.email.message}</span>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Phone Number" {...register("phone", { required: "Phone is required" })} />
                    {errors.phone && <span className="text-destructive text-xs">{errors.phone.message}</span>}
                  </div>
                  <div>
                    <Label htmlFor="experience">Experience Level</Label>
                    <select id="experience" className="form-input" {...register("experience")}>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="github">GitHub Profile</Label>
                  <Input id="github" placeholder="https://github.com/yourusername" {...register("github", { required: "GitHub profile is required" })} />
                  {errors.github && <span className="text-destructive text-xs">{errors.github.message}</span>}
                </div>
                <div>
                  <Label htmlFor="about">About You / Project Idea</Label>
                  <Textarea id="about" placeholder="Tell us about yourself and your chatbot project idea..." {...register("about", { required: "This field is required" })} />
                  {errors.about && <span className="text-destructive text-xs">{errors.about.message}</span>}
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="agree" {...register("agree", { required: "You must agree to the terms" })} />
                  <Label htmlFor="agree" className="text-xs">I agree to the <a href="/terms" className="underline text-primary">terms and conditions</a>.</Label>
                  {errors.agree && <span className="text-destructive text-xs ml-2">{errors.agree.message as string}</span>}
                </div>
              </div>
              <Button type="submit" className="w-full mt-6" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Registration"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
} 
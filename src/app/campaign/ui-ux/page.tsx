"use client";
import { useForm, SubmitHandler } from "react-hook-form";

import { Input } from "@/src/app/components/ui/input";
import { Textarea } from "@/src/app/components/ui/textarea";
import { Button } from "@/src/app/components/ui/button";
import { Label } from "@/src/app/components/ui/label";
import { Checkbox } from "@/src/app/components/ui/checkbox";
import { useToast } from "@/src/app/hooks/use-toast";
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/src/app/components/ui/dialog";
import { motion } from "framer-motion";
import { ContestBanner } from "@/src/app/components/banners";
import { CompetitionAbout } from "./about";
import CompetitionCTA from "./cta";

interface FormInputs {
  name: string;
  email: string;
  phone: string;
  portfolio: string;
  experience: string;
  about: string;
  agree: boolean;
}

export default function UIUXCampaignPage() {
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormInputs>({
    defaultValues: { experience: "Beginner" }
  });

  const onSubmit: SubmitHandler<FormInputs> = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    toast({
      title: "Registration Successful!",
      description: `Thank you for registering for the Scalixity UI/UX Competition. We will contact you soon.`,
    });
    reset();
    setOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fefcfd' }}>
      {/* Contest Banner */}
      <div className="w-full pt-4 sm:pt-6 lg:pt-8">
        <ContestBanner />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-16 -mt-4 sm:-mt-6 lg:-mt-8">
        <div className="container mx-auto text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Main Title */}
                         <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3, duration: 0.8 }}
               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight px-4 sm:px-0"
               style={{ fontFamily: 'Playfair Display, serif' }}
             >
               Scalixity UI/UX <span className="text-amber-600">Competition</span>
             </motion.h1>

            {/* Subheading */}
                         <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0"
               style={{ fontFamily: 'Playfair Display, serif' }}
             >
               Join a global movement of designers shaping meaningful digital experiences. Compete with creatives worldwide, get recognized, and stand a chance to win a full-time role, internship, goodies, and global exposure.
             </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="pt-4 sm:pt-6 lg:pt-8"
            >
                             <Button 
                 className="px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-semibold bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:glow-amber-500" 
                 style={{ fontFamily: 'Playfair Display, serif' }}
                 onClick={() => setOpen(true)}
               >
                 Register Now
               </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* Competition Details */}
      <CompetitionAbout />

      {/* CTA Section */}
      <CompetitionCTA />
      
             <Dialog open={open} onOpenChange={setOpen}>
         <DialogContent className="max-w-2xl w-full py-6 sm:py-8 px-4 sm:px-6" style={{ backgroundColor: '#fefcfd' }}>
                     <DialogHeader>
             <DialogTitle className="text-black text-lg sm:text-xl lg:text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>Register for Scalixity UI/UX Competition</DialogTitle>
             <DialogDescription className="text-gray-900 text-sm sm:text-base" style={{ fontFamily: 'Playfair Display, serif' }}>Fill the form below to participate in the competition.</DialogDescription>
           </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label htmlFor="name" style={{ fontFamily: 'Playfair Display, serif' }}>Full Name</Label>
                  <Input id="name" placeholder="Your Name" {...register("name", { required: "Name is required" })} />
                  {errors.name && <span className="text-destructive text-xs">{errors.name.message}</span>}
                </div>
                <div>
                  <Label htmlFor="email" style={{ fontFamily: 'Playfair Display, serif' }}>Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" {...register("email", { required: "Email is required" })} />
                  {errors.email && <span className="text-destructive text-xs">{errors.email.message}</span>}
                </div>
                <div>
                  <Label htmlFor="phone" style={{ fontFamily: 'Playfair Display, serif' }}>Phone</Label>
                  <Input id="phone" type="tel" placeholder="Phone Number" {...register("phone", { required: "Phone is required" })} />
                  {errors.phone && <span className="text-destructive text-xs">{errors.phone.message}</span>}
                </div>
                <div>
                  <Label htmlFor="experience" style={{ fontFamily: 'Playfair Display, serif' }}>Experience Level</Label>
                  <select id="experience" className="form-input" {...register("experience")}>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="portfolio" style={{ fontFamily: 'Playfair Display, serif' }}>Portfolio Link</Label>
                <Input id="portfolio" placeholder="https://yourportfolio.com" {...register("portfolio", { required: "Portfolio link is required" })} />
                {errors.portfolio && <span className="text-destructive text-xs">{errors.portfolio.message}</span>}
              </div>
              <div>
                <Label htmlFor="about" style={{ fontFamily: 'Playfair Display, serif' }}>About You / Project</Label>
                <Textarea id="about" placeholder="Tell us about yourself or your project..." {...register("about", { required: "This field is required" })} />
                {errors.about && <span className="text-destructive text-xs">{errors.about.message}</span>}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="agree" {...register("agree", { required: "You must agree to the terms" })} />
                <Label htmlFor="agree" className="text-xs" style={{ fontFamily: 'Playfair Display, serif' }}>I agree to the <a href="/terms" className="underline text-primary">terms and conditions</a>.</Label>
                {errors.agree && <span className="text-destructive text-xs ml-2">{errors.agree.message as string}</span>}
              </div>
            </div>
                         <Button type="submit" className="w-full mt-4 sm:mt-6 bg-amber-700 text-white py-3 sm:py-4 text-sm sm:text-base" style={{ fontFamily: 'Playfair Display, serif' }} disabled={isSubmitting}>
               {isSubmitting ? "Submitting..." : "Submit Registration"}
             </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
} 
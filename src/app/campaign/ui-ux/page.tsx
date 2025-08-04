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

interface CampaignQuestion {
  id: number;
  campaign_id: number;
  question_order: number;
  label: string;
  type: string;
  options: string[];
}

interface FormInputs {
  [key: string]: string | boolean | string[];
}

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function UIUXCampaignPage() {
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);
  const [questions, setQuestions] = React.useState<CampaignQuestion[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [checkboxValues, setCheckboxValues] = React.useState<{[key: string]: string[]}>({});
  const [isSuccess, setIsSuccess] = React.useState(false);
  
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormInputs>();

  // Fetch campaign questions when dialog opens
  React.useEffect(() => {
    if (open) {
      fetchCampaignQuestions();
    }
  }, [open]);

  const fetchCampaignQuestions = async () => {
    setLoading(true);
    setError(null);
    try {
      // For now, we'll use campaign ID 1 for UI/UX competition
      // In the future, you can make this dynamic based on the campaign
      const response = await fetch(`${baseURL}/api/campaigns/1/questions`);
      if (!response.ok) throw new Error("Failed to fetch form questions");
      const data = await response.json();
      console.log('Fetched questions:', data);
   
      setQuestions(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error fetching form questions");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChange = (questionId: number, option: string, checked: boolean) => {
    setCheckboxValues(prev => {
      const currentValues = prev[`question_${questionId}`] || [];
      if (checked) {
        return {
          ...prev,
          [`question_${questionId}`]: [...currentValues, option]
        };
      } else {
        return {
          ...prev,
          [`question_${questionId}`]: currentValues.filter(val => val !== option)
        };
      }
    });
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log('Form data being submitted:', data);
    console.log('Checkbox values:', checkboxValues);
    
    // Merge form data with checkbox values
    const mergedData = { ...data, ...checkboxValues };
    console.log('Merged data:', mergedData);
    
    try {
      // Generate a simple visitor ID (in production, you might want to use a proper tracking system)
      const visitor_id = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      const response = await fetch(`${baseURL}/api/campaigns/1/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers: mergedData,
          visitor_id: visitor_id
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }
      
                    toast({
         title: "🎉 Registration Successful!",
         description: `You have successfully registered for the Scalixity UI/UX Competition. We will contact you soon with further details.`,
         duration: 5000,
       });
       setIsSuccess(true);
       reset();
       setCheckboxValues({});
       // Close modal after 3 seconds to show success message
       setTimeout(() => {
         setOpen(false);
         setIsSuccess(false);
       }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Failed to submit registration. Please try again.",
        variant: "destructive"
      });
    }
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
          <DialogContent className="max-w-2xl w-full max-h-[80vh] flex flex-col" style={{ backgroundColor: '#fefcfd' }}>
                      <DialogHeader className="flex-shrink-0 pb-4">
             <DialogTitle className="text-black text-lg sm:text-xl lg:text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>Register for Scalixity UI/UX Competition</DialogTitle>
             <DialogDescription className="text-gray-900 text-sm sm:text-base" style={{ fontFamily: 'Playfair Display, serif' }}>Fill the form below to participate in the competition.</DialogDescription>
           </DialogHeader>
                      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1 min-h-0">
             {loading ? (
               <div className="text-center py-8 flex-1">
                 <div className="text-gray-500">Loading form...</div>
               </div>
             ) : isSuccess ? (
               <div className="text-center py-8 flex-1 flex flex-col items-center justify-center">
                 <div className="text-6xl mb-4">🎉</div>
                 <div className="text-2xl font-bold text-green-600 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                   Registration Successful!
                 </div>
                 <div className="text-gray-600 text-center max-w-md" style={{ fontFamily: 'Playfair Display, serif' }}>
                   You have successfully registered for the Scalixity UI/UX Competition. We will contact you soon with further details.
                 </div>
               </div>
             ) : error ? (
               <div className="text-center py-8 flex-1">
                 <div className="text-red-500">{error}</div>
                 <Button 
                   type="button" 
                   onClick={fetchCampaignQuestions}
                   className="mt-4 bg-amber-600 hover:bg-amber-700 text-white"
                 >
                   Retry
                 </Button>
               </div>
                           ) : questions.length === 0 ? (
                <div className="text-center py-8 flex-1">
                  <div className="text-gray-500">No form questions available.</div>
                </div>
                           ) : (
                                  <div className="flex flex-col flex-1 min-h-0">
                    <div className="flex-1 dialog-scrollable space-y-4 px-6 pb-4" style={{ maxHeight: 'calc(80vh - 200px)' }}>
                     {questions.map((question) => {
           
                       return (
                       <div key={question.id}>
                         <Label htmlFor={`question_${question.id}`} style={{ fontFamily: 'Playfair Display, serif' }}>
                           {question.label}
                         </Label>
                        
                                           {question.type === 'short' && question.label.toLowerCase().includes('email') && (
                           <Input 
                             id={`question_${question.id}`}
                             type="email"
                             placeholder="you@example.com"
                             {...register(`question_${question.id}`, { required: `${question.label} is required` })}
                           />
                         )}
                         
                         {question.type === 'short' && question.label.toLowerCase().includes('phone') && (
                           <Input 
                             id={`question_${question.id}`}
                             type="tel"
                             placeholder="Phone Number"
                             {...register(`question_${question.id}`, { required: `${question.label} is required` })}
                           />
                         )}
                         
                         {question.type === 'short' && !question.label.toLowerCase().includes('email') && !question.label.toLowerCase().includes('phone') && (
                           <Input 
                             id={`question_${question.id}`}
                             placeholder={`Enter ${question.label.toLowerCase()}...`}
                             {...register(`question_${question.id}`, { required: `${question.label} is required` })}
                           />
                         )}
                         
                         {question.type === 'paragraph' && (
                           <Textarea 
                             id={`question_${question.id}`}
                             placeholder={`Tell us about ${question.label.toLowerCase()}...`}
                             {...register(`question_${question.id}`, { required: `${question.label} is required` })}
                           />
                         )}
                        
                                           {question.type === 'multiple' && question.options && question.options.length > 0 && (
                           <div className="space-y-2">
                             {question.options.map((option, optionIndex) => (
                               <div key={optionIndex} className="flex items-center space-x-2">
                                 <input 
                                   type="radio" 
                                   id={`question_${question.id}_option_${optionIndex}`}
                                   value={option}
                                   {...register(`question_${question.id}`, { required: `${question.label} is required` })}
                                   className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 focus:ring-amber-500"
                                 />
                                 <Label htmlFor={`question_${question.id}_option_${optionIndex}`} className="text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                                   {option}
                                 </Label>
                               </div>
                             ))}
                           </div>
                         )}
                        
                        {question.type === 'checkbox' && question.options && question.options.length > 0 && (
                          <div className="space-y-2">
                            {question.options.map((option, optionIndex) => (
                              <div key={optionIndex} className="flex items-center space-x-2">
                                <input 
                                  type="checkbox" 
                                  id={`question_${question.id}_option_${optionIndex}`}
                                  value={option}
                                  checked={checkboxValues[`question_${question.id}`]?.includes(option) || false}
                                  onChange={(e) => handleCheckboxChange(question.id, option, e.target.checked)}
                                  className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500"
                                />
                                <Label htmlFor={`question_${question.id}_option_${optionIndex}`} className="text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>
                                  {option}
                                </Label>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {question.type === 'checkbox' && (!question.options || question.options.length === 0) && (
                          <div className="flex items-center space-x-2">
                            <Checkbox 
                              id={`question_${question.id}`}
                              {...register(`question_${question.id}`, { required: `You must agree to ${question.label}` })}
                            />
                            <Label htmlFor={`question_${question.id}`} className="text-xs" style={{ fontFamily: 'Playfair Display, serif' }}>
                              {question.label}
                            </Label>
                          </div>
                        )}
                        
                                           {errors[`question_${question.id}`] && (
                             <span className="text-destructive text-xs">
                               {errors[`question_${question.id}`]?.message as string}
                             </span>
                           )}
                         </div>
                       );
                     })}
                   </div>
                   
                                                            <div className="flex-shrink-0 pt-4 border-t px-6 pb-6 mt-auto">
                       <Button 
                         type="submit" 
                         className="w-full bg-amber-700 text-white py-3 sm:py-4 text-sm sm:text-base" 
                         style={{ fontFamily: 'Playfair Display, serif' }} 
                         disabled={isSubmitting || isSuccess}
                       >
                         {isSubmitting ? "Submitting..." : isSuccess ? "Registration Successful!" : "Submit Registration"}
                       </Button>
                     </div>
                 </div>
               )}
             </form>
        </DialogContent>
      </Dialog>
    </div>
  );
} 
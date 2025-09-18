"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/src/app/components/ui/card";
import { CheckCircle, Users, Target, Upload, Brain, Calendar, Mail, Linkedin } from "lucide-react";

export function CompetitionAbout() {
  return (
          <section className="pb-2 -mt-8 sm:-mt-12 lg:-mt-16">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          {/* About the Competition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden">
              <CardHeader className="p-4 sm:p-6 lg:p-8">
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                  About the Competition
                </CardTitle>
                <CardDescription className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Design is more than visuals — it&rsquo;s a tool for change. Scalixity is hosting its first international UI/UX Design Competition to celebrate purposeful, human-centered design. Whether you&rsquo;re a student just discovering the craft or a seasoned designer solving real-world challenges, this competition is your platform to shine.
                </CardDescription>
                <CardDescription className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4 text-justify" style={{ fontFamily: 'Playfair Display, serif' }}>
                  We invite participants from around the world to submit creative, functional, and impactful digital design solutions.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Who Can Participate */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden">
            <CardHeader className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Who Can Participate
                </CardTitle>
              </div>
              <div className="space-y-3 sm:space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-base sm:text-lg text-justify" style={{ fontFamily: 'Playfair Display, serif' }}><strong>Open to Everyone:</strong> Students, freelancers, and professionals</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-base sm:text-lg text-justify" style={{ fontFamily: 'Playfair Display, serif' }}><strong>Solo Participation Only:</strong> Individual entries exclusively</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-base sm:text-lg text-justify" style={{ fontFamily: 'Playfair Display, serif' }}><strong>No entry fees.</strong> Just your best creativity.</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-0 shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden">
            <CardHeader className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Theme: &ldquo;Design for Impact&rdquo;
                </CardTitle>
              </div>
              <CardDescription className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify" style={{ fontFamily: 'Playfair Display, serif' }}>
                Think beyond aesthetics. This year&rsquo;s theme challenges you to create UI/UX solutions that make a tangible difference. It could be social, environmental, educational, or even healthcare-based — but your idea should bring clarity, empathy, and innovation to life.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        {/* How to Submit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden">
            <CardHeader className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Upload className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                  How to Submit
                </CardTitle>
              </div>
              <div className="space-y-3 sm:space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg text-justify" style={{ fontFamily: 'Playfair Display, serif' }}>Share your design through a <strong>Figma, Adobe XD, or PDF link</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg text-justify" style={{ fontFamily: 'Playfair Display, serif' }}>Include <strong>screens, flows, and a short case summary</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-base sm:text-lg text-justify" style={{ fontFamily: 'Playfair Display, serif' }}>Accompany your submission with a <strong>brief write-up (200–300 words)</strong> explaining your design process, the problem, and your solution</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Judging Criteria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden">
            <CardHeader className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Judging Criteria
                </CardTitle>
              </div>
              <CardDescription className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 text-justify" style={{ fontFamily: 'Playfair Display, serif' }}>
                Your work will be evaluated on:
              </CardDescription>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-amber-50 p-3 sm:p-4 rounded-xl">
                    <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base" style={{ fontFamily: 'Playfair Display, serif' }}>Creativity</h4>
                    <p className="text-gray-700 text-sm sm:text-base text-justify" style={{ fontFamily: 'Playfair Display, serif' }}>How original is your idea and approach?</p>
                  </div>
                  <div className="bg-amber-50 p-3 sm:p-4 rounded-xl">
                    <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base" style={{ fontFamily: 'Playfair Display, serif' }}>User Experience</h4>
                    <p className="text-gray-700 text-sm sm:text-base text-justify" style={{ fontFamily: 'Playfair Display, serif' }}>Is the solution intuitive and accessible?</p>
                  </div>
                  <div className="bg-amber-50 p-3 sm:p-4 rounded-xl">
                    <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base" style={{ fontFamily: 'Playfair Display, serif' }}>Aesthetic Design</h4>
                    <p className="text-gray-700 text-sm sm:text-base text-justify" style={{ fontFamily: 'Playfair Display, serif' }}>Clean, modern, and aligned with the theme?</p>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-amber-50 p-3 sm:p-4 rounded-xl">
                    <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base" style={{ fontFamily: 'Playfair Display, serif' }}>Problem-Solving</h4>
                    <p className="text-gray-700 text-sm sm:text-base text-justify" style={{ fontFamily: 'Playfair Display, serif' }}>Is there a clear challenge and resolution?</p>
                  </div>
                  <div className="bg-amber-50 p-3 sm:p-4 rounded-xl">
                    <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base" style={{ fontFamily: 'Playfair Display, serif' }}>Impact</h4>
                    <p className="text-gray-700 text-sm sm:text-base text-justify" style={{ fontFamily: 'Playfair Display, serif' }}>Could this solution realistically improve lives?</p>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Prizes & Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-0 shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden">
            <CardHeader className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Prizes & Opportunities
                </CardTitle>
              </div>
              <CardDescription className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 text-justify" style={{ fontFamily: 'Playfair Display, serif' }}>
                Top 3 Winners Will Receive:
              </CardDescription>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-4 sm:p-6 rounded-xl border border-amber-200">
                  <h4 className="font-bold text-amber-800 mb-2 sm:mb-3 text-base sm:text-lg" style={{ fontFamily: 'Playfair Display, serif' }}> 1st Place</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-gray-700 text-sm sm:text-base text-justify" style={{ fontFamily: 'Playfair Display, serif' }}><strong>Monetary Reward:</strong> Substantial prize money</p>
                    <p className="text-gray-700 text-sm sm:text-base text-justify" style={{ fontFamily: 'Playfair Display, serif' }}><strong>Career Opportunity:</strong> Full-time Figma Designer position at Scalixity</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-2 sm:mb-3 text-base sm:text-lg" style={{ fontFamily: 'Playfair Display, serif' }}> 2nd Place</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-gray-700 text-sm sm:text-base text-justify" style={{ fontFamily: 'Playfair Display, serif' }}><strong>Professional Development:</strong> Internship opportunity at Scalixity</p>
                    <p className="text-gray-700 text-sm sm:text-base text-justify" style={{ fontFamily: 'Playfair Display, serif' }}><strong>Mentorship:</strong> Direct guidance from industry experts</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-6 rounded-xl border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-2 sm:mb-3 text-base sm:text-lg" style={{ fontFamily: 'Playfair Display, serif' }}> 3rd Place</h4>
                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-gray-700 text-sm sm:text-base text-justify" style={{ fontFamily: 'Playfair Display, serif' }}><strong>Recognition:</strong> Honorable mention and certificate</p>
                    <p className="text-gray-700 text-sm sm:text-base text-justify" style={{ fontFamily: 'Playfair Display, serif' }}><strong>Consolation Prize:</strong> Exclusive Scalixity merchandise package</p>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Key Dates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden">
            <CardHeader className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600" />
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Key Dates
                </CardTitle>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="bg-amber-50 p-4 sm:p-6 rounded-xl">
                  <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base" style={{ fontFamily: 'Playfair Display, serif' }}>Submission Deadline</h4>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>9th August 2025, 12:00 PM IST</p>
                </div>
                <div className="bg-amber-50 p-4 sm:p-6 rounded-xl">
                  <h4 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base" style={{ fontFamily: 'Playfair Display, serif' }}>Results Announced</h4>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Mid-August via email & official social channels</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-0 shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden">
            <CardHeader className="p-4 sm:p-6 lg:p-8">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Have Questions?
              </CardTitle>
              <CardDescription className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 text-justify" style={{ fontFamily: 'Playfair Display, serif' }}>
                Feel free to reach out:
              </CardDescription>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  <a href="mailto:info@scalixity.com" className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base">
                    info@scalixity.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  <a href="https://linkedin.com/company/scalixity" className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base">
                    Connect with us via LinkedIn
                  </a>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </section>
      );
  } 
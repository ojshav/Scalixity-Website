"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/src/app/components/ui/card";
import { CheckCircle, Users, Target, Upload, Brain, Gift, Calendar, Mail, Linkedin } from "lucide-react";

export function CompetitionAbout() {
  return (
          <section className="pb-2 -mt-16">
        <div className="w-full px-6 lg:px-12 xl:px-16">
          {/* About the Competition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="p-8">
                <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About the Competition
                </CardTitle>
                <CardDescription className="text-gray-700 text-lg leading-relaxed">
                  Design is more than visuals — it's a tool for change. Scalixity is hosting its first international UI/UX Design Competition to celebrate purposeful, human-centered design. Whether you're a student just discovering the craft or a seasoned designer solving real-world challenges, this competition is your platform to shine.
                </CardDescription>
                <CardDescription className="text-gray-700 text-lg leading-relaxed mt-4">
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
          className="mb-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-8 w-8 text-amber-600" />
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                  Who Can Participate
                </CardTitle>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg"><strong>Open to Everyone:</strong> Students, freelancers, and professionals</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg"><strong>Solo Participation Only:</strong> Individual entries exclusively</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-lg"><strong>No entry fees.</strong> Just your best creativity.</p>
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
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-amber-600" />
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                  Theme: "Design for Impact"
                </CardTitle>
              </div>
              <CardDescription className="text-gray-700 text-lg leading-relaxed">
                Think beyond aesthetics. This year's theme challenges you to create UI/UX solutions that make a tangible difference. It could be social, environmental, educational, or even healthcare-based — but your idea should bring clarity, empathy, and innovation to life.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        {/* How to Submit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Upload className="h-8 w-8 text-amber-600" />
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                  How to Submit
                </CardTitle>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">Share your design through a <strong>Figma, Adobe XD, or PDF link</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">Include <strong>screens, flows, and a short case summary</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">Accompany your submission with a <strong>brief write-up (200–300 words)</strong> explaining your design process, the problem, and your solution</p>
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
          className="mb-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="h-8 w-8 text-amber-600" />
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                  Judging Criteria
                </CardTitle>
              </div>
              <CardDescription className="text-gray-700 text-lg mb-6">
                Your work will be evaluated on:
              </CardDescription>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-amber-800 mb-2">Creativity</h4>
                    <p className="text-gray-700">How original is your idea and approach?</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-amber-800 mb-2">User Experience</h4>
                    <p className="text-gray-700">Is the solution intuitive and accessible?</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-amber-800 mb-2">Aesthetic Design</h4>
                    <p className="text-gray-700">Clean, modern, and aligned with the theme?</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-amber-800 mb-2">Problem-Solving</h4>
                    <p className="text-gray-700">Is there a clear challenge and resolution?</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-amber-800 mb-2">Impact</h4>
                    <p className="text-gray-700">Could this solution realistically improve lives?</p>
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
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="h-8 w-8 text-purple-600" />
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                  Prizes & Opportunities
                </CardTitle>
              </div>
              <CardDescription className="text-gray-700 text-lg mb-6">
                Top 3 Winners Will Receive:
              </CardDescription>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border border-amber-200">
                  <h4 className="font-bold text-amber-800 mb-3 text-lg">🥇 1st Place</h4>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Monetary Reward:</strong> Substantial prize money</p>
                    <p className="text-gray-700"><strong>Career Opportunity:</strong> Full-time Figma Designer position at Scalixity</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-3 text-lg">🥈 2nd Place</h4>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Professional Development:</strong> Internship opportunity at Scalixity</p>
                    <p className="text-gray-700"><strong>Mentorship:</strong> Direct guidance from industry experts</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-3 text-lg">🥉 3rd Place</h4>
                  <div className="space-y-3">
                    <p className="text-gray-700"><strong>Recognition:</strong> Honorable mention and certificate</p>
                    <p className="text-gray-700"><strong>Consolation Prize:</strong> Exclusive Scalixity merchandise package</p>
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
          className="mb-16"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="h-8 w-8 text-amber-600" />
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                  Key Dates
                </CardTitle>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-amber-800 mb-2">Submission Deadline</h4>
                  <p className="text-gray-700 text-lg">9th August 2025, 12:00 PM IST</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-amber-800 mb-2">Results Announced</h4>
                  <p className="text-gray-700 text-lg">Mid-August via email & official social channels</p>
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
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Have Questions?
              </CardTitle>
              <CardDescription className="text-gray-700 text-lg mb-6">
                Feel free to reach out:
              </CardDescription>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <a href="mailto:info@scalixity.com" className="text-blue-600 hover:text-blue-700 font-medium">
                    info@scalixity.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-6 w-6 text-blue-600" />
                  <a href="https://linkedin.com/company/scalixity" className="text-blue-600 hover:text-blue-700 font-medium">
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
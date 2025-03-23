"use client"

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Globe, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [state, handleSubmit] = useForm("mgvaklno");

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a collaboration? Let's
            connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {state.succeeded ? (
              <Card className="bg-black/50 border border-gray-800 h-full flex flex-col" style={{gap: 130}}>
                <CardHeader>
                  <CardTitle className="text-primary font-bold">
                    Contact Form
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Card className="bg-secondary/30 border border-primary/50 flex items-center justify-center flex-col p-4">
                    <CardTitle className="text-primary/70 font-bold">
                      Thank you for your message!
                    </CardTitle>
                    <CardContent className="text-primary/50 font-semibold p-1">
                      I'll get back to you as soon as possible.
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-black/50 border border-gray-800 h-full">
                <CardHeader>
                  <CardTitle className="text-primary font-bold">
                    Contact Form
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-300"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-gray-900/50 border-gray-700 focus:border-primary focus:ring-primary/50 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <div className="space-y-2">
                      s
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-300"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-gray-900/50 border-gray-700 focus:border-primary focus:ring-primary/50 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-300"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        required
                        className="min-h-[150px] bg-gray-900/50 border-gray-700 focus:border-primary focus:ring-primary/50 text-white placeholder:text-gray-500"
                      />
                    </div>

                    {state.submitting ? (
                      <Button
                        type="submit"
                        className="w-full bg-primary/50 text-black font-bold"
                        disabled
                      >
                        Sending...
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/80 text-black font-bold"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    )}
                  </form>
                </CardContent>
              </Card>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-black/50 border border-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-primary font-bold">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <p className="text-gray-300">
                    I'm always open to discussing new projects, creative ideas,
                    or opportunities to be part of your vision.
                  </p>

                  <div className="space-y-6">
                    <a
                      href="https://github.com/njeeevan2216"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="p-3 rounded-full bg-gray-800 mr-4">
                        <Github className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h1 className="text-primary font-bold">GitHub</h1>
                        <p className="text-gray-400">
                        Here lies my weekend projects and abandoned dreams
                        </p>
                      </div>
                    </a>

                    <a
                      href="https://linkedin.com/in/nj2216"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="p-3 rounded-full bg-gray-800 mr-4">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-primary font-bold">LinkedIn</h3>
                        <p className="text-gray-400">
                        Because even tech geeks need networking
                        </p>
                      </div>
                    </a>

                    <a
                      href="/"
                      className="flex items-center p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="p-3 rounded-full bg-gray-800 mr-4">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-primary font-bold">+91 81481 12502</h3>
                        <p className="text-gray-400">
                           Tech support, life advice, and bad jokes included.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

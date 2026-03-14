"use client";

import { useState } from "react"; // Izbačen useRef
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslations } from "next-intl";
import { sendEmail } from "@/app/actions/sendEmail"; // Importuj akciju

// VALIDACIJA (Ostaje ista, prilagodio sam poruke da budu generičke ili koristi t)
const contactSchema = z.object({
  user_name: z.string().min(2, "Ime mora imati bar 2 karaktera"),
  user_email: z.string().email("Neispravna email adresa"),
  message: z.string().min(10, "Poruka mora imati bar 10 karaktera"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Social links ostaju isti...
const socialLinks = [
  { name: "LinkedIn", icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/dusan-strbac-978561315/", color: "hover:text-blue-500" },
  { name: "GitHub", icon: <Github size={24} />, link: "https://github.com/dusanstrbac", color: "hover:text-neutral-400 text-neutral-900 dark:text-white" },
  { name: "Email", icon: <Mail size={24} />, link: "mailto:dusan.strbac01@gmail.com", color: "hover:text-cyan-500" },
];

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations('ContactPage');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSending(true);
    setError(null);
    
    // POZIV SERVER ACTION-A
    const result = await sendEmail(data);

    if (result.success) {
      setIsSent(true);
      reset();
      setTimeout(() => setIsSent(false), 5000);
    } else {
      setError(result.error || "Greška pri slanju.");
    }
    
    setIsSending(false);
  };

  return (
    <main className="min-h-screen pt-32 pb-16 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent italic">
            {t('LestConnect')}
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
            {t('LetsConnectLabel')}
          </p>

          <div className="flex justify-center gap-6 mt-10">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className={`p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 ${social.color} transition-all shadow-sm`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-xl border border-neutral-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Izbačen formRef, dodat handleSubmit */}
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest ml-1">{t('Username')}</label>
              <input 
                {...register("user_name")}
                placeholder="Marko Marković"
                className={`w-full px-5 py-4 rounded-xl bg-white dark:bg-black/40 border ${errors.user_name ? 'border-red-500' : 'border-neutral-200 dark:border-white/10'} focus:border-indigo-500 outline-none transition-all text-neutral-900 dark:text-white`}
              />
              {errors.user_name && <span className="text-red-500 text-xs ml-1">{errors.user_name.message}</span>}
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest ml-1">{t('Email')}</label>
              <input 
                {...register("user_email")}
                placeholder="marko@email.com"
                className={`w-full px-5 py-4 rounded-xl bg-white dark:bg-black/40 border ${errors.user_email ? 'border-red-500' : 'border-neutral-200 dark:border-white/10'} focus:border-indigo-500 outline-none transition-all text-neutral-900 dark:text-white`}
              />
              {errors.user_email && <span className="text-red-500 text-xs ml-1">{errors.user_email.message}</span>}
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest ml-1">{t('Message')}</label>
              <textarea 
                {...register("message")}
                rows={5}
                placeholder={t('MessagePlaceholder')}
                className={`w-full px-5 py-4 rounded-xl bg-white dark:bg-black/40 border ${errors.message ? 'border-red-500' : 'border-neutral-200 dark:border-white/10'} focus:border-indigo-500 outline-none transition-all text-neutral-900 dark:text-white resize-none`}
              />
              {errors.message && <span className="text-red-500 text-xs ml-1">{errors.message.message}</span>}
            </div>

            <button 
              disabled={isSending || isSent}
              type="submit"
              className={`md:col-span-2 mt-4 flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold text-lg transition-all shadow-lg active:scale-95 ${
                isSent 
                ? 'bg-green-500 text-white shadow-green-500/20' 
                : 'bg-linear-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90 shadow-indigo-500/20'
              }`}
            >
              {isSending ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t('Sending')}...
                </div>
              ) : isSent ? (
                <>{t('Sent')}! <CheckCircle2 size={20} /></>
              ) : (
                <>{t('SendMessageBtn')} <Send size={20} /></>
              )}
            </button>

            <AnimatePresence>
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="md:col-span-2 flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-xl border border-red-500/20"
                >
                  <AlertCircle size={18} />
                  <span className="text-sm font-medium">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
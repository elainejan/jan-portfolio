import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, CheckCircle, Linkedin, Clock, Download, Code, ArrowRight } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [localTime, setLocalTime] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [usingDemo, setUsingDemo] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setLocalTime(new Date().toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setLoading(true);
    setErrorMsg('');
    setUsingDemo(false);

    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY;

    // Check if key is configured, not empty, and not the placeholder value
    if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE' || accessKey.includes('MY_')) {
      // Simulate successful submission for presentation/development, but flag as demo
      setTimeout(() => {
        setLoading(false);
        setUsingDemo(true);
        setSubmitted(true);
      }, 1000);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact Form Submission',
          message: formData.message,
          from_name: 'Portfolio Contact'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(result.message || 'Submission failed. Please check your Access Key.');
      }
    } catch (err) {
      setErrorMsg('Failed to send message. Please verify your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-view" className="pb-24 pt-24 text-left">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Headings, Info Cards, Actions */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-6">
            <span className="font-mono text-[10px] text-muted font-medium tracking-[0.2em] uppercase block">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Let's build<br />something<br />extraordinary<br />together.
            </h1>
            <p className="text-sm text-muted leading-relaxed max-w-md font-sans">
              I'm currently open to new opportunities, collaborations, or just a friendly chat about design and code.
            </p>
          </div>

          <div className="space-y-4 max-w-md">
            {/* Email Card */}
            <div className="p-5 rounded-xl border border-border bg-card flex items-center space-x-4 shadow-sm">
              <div className="p-2.5 rounded-lg bg-subtle-bg text-brand-light dark:text-brand-bright" aria-hidden="true">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-sm text-foreground">Email</h4>
                <a 
                  href="mailto:elainejan1999@gmail.com" 
                  className="text-xs text-muted hover:text-foreground transition-colors mt-0.5 block font-sans focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none rounded"
                >
                  elainejan1999@gmail.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-xl border border-border bg-card flex items-center space-x-4 shadow-sm">
              <div className="p-2.5 rounded-lg bg-subtle-bg text-brand-light dark:text-brand-bright" aria-hidden="true">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-display font-semibold text-sm text-foreground">Location</h4>
                <p className="text-xs text-muted font-sans">
                  Mandaluyong City, Philippines (Available Remotely)
                </p>
                {localTime && (
                  <p className="font-mono text-[10px] text-muted/80 flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3 text-brand-light" />
                    PH Time: {localTime}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Download & Social Links row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <motion.a
              href="/resume.pdf"
              download="resume.pdf"
              whileHover={{ scale: 1.015, y: -0.5 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-card hover:bg-subtle-bg border border-border text-foreground hover:text-foreground text-xs font-semibold tracking-wide cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
              aria-label="Download Resume"
            >
              <Download className="w-3.5 h-3.5 text-brand-light" />
              <span>Download Resume</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/elaine-jan-almario-037b1125b/"
              target="_blank"
              referrerPolicy="no-referrer"
              whileHover={{ scale: 1.05, y: -0.5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="p-2.5 text-muted hover:text-foreground rounded-lg bg-card border border-border hover:border-brand-light/30 transition-all flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="https://github.com/elainejan/"
              target="_blank"
              referrerPolicy="no-referrer"
              whileHover={{ scale: 1.05, y: -0.5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="p-2.5 text-muted hover:text-foreground rounded-lg bg-card border border-border hover:border-brand-light/30 transition-all flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <Code className="w-4 h-4" />
            </motion.a>
          </div>
        </div>

        {/* Right Column: Beautiful Contact Form Card */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                id="contact-form"
                key="contact-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="space-y-6 p-6 sm:p-10 rounded-2xl border border-border bg-card shadow-xl"
              >
                {/* Name & Email input row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="input-name" className="block text-xs font-semibold text-muted tracking-wide">
                      Full Name
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-subtle-bg focus:border-brand-light/50 focus-visible:ring-2 focus-visible:ring-brand-light text-foreground placeholder-muted/40 text-xs sm:text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="input-email" className="block text-xs font-semibold text-muted tracking-wide">
                      Email Address
                    </label>
                    <input
                      id="input-email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-subtle-bg focus:border-brand-light/50 focus-visible:ring-2 focus-visible:ring-brand-light text-foreground placeholder-muted/40 text-xs sm:text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label htmlFor="input-subject" className="block text-xs font-semibold text-muted tracking-wide">
                    Subject
                  </label>
                  <input
                    id="input-subject"
                    type="text"
                    required
                    placeholder="Let's collaborate on a project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-subtle-bg focus:border-brand-light/50 focus-visible:ring-2 focus-visible:ring-brand-light text-foreground placeholder-muted/40 text-xs sm:text-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="input-message" className="block text-xs font-semibold text-muted tracking-wide">
                    Your Message
                  </label>
                  <textarea
                    id="input-message"
                    required
                    rows={6}
                    placeholder="Tell me about your vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-subtle-bg focus:border-brand-light/50 focus-visible:ring-2 focus-visible:ring-brand-light text-foreground placeholder-muted/40 text-xs sm:text-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Feedback */}
                {errorMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-rose-600 dark:text-rose-400 font-sans leading-relaxed bg-rose-500/10 border border-rose-500/20 px-4 py-3 rounded-lg"
                  >
                    {errorMsg}
                  </motion.div>
                )}

                <motion.button
                  id="form-submit-btn"
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.015, y: -0.5 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="w-full py-3.5 px-4 rounded-xl bg-foreground hover:bg-foreground/90 text-background text-xs font-semibold tracking-wide flex items-center justify-center space-x-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                id="contact-success"
                key="contact-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 sm:p-12 rounded-2xl border border-border bg-card text-center space-y-6 flex flex-col items-center justify-center min-h-[450px] shadow-xl"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-brand-light dark:text-brand-bright" aria-hidden="true">
                  <CheckCircle className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="space-y-2 max-w-sm">
                  <h3 className="font-display font-semibold text-lg text-foreground">Message Transmitted</h3>
                  <p className="text-xs text-muted leading-relaxed font-sans">
                    Thank you for reaching out! Your specifications have been received successfully. I review details and respond within 24 business hours.
                  </p>
                </div>

                {usingDemo && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="p-4 rounded-xl border border-dashed border-brand/25 bg-brand-soft/20 text-left space-y-2 max-w-sm shadow-sm"
                  >
                    <p className="font-mono text-[10px] text-brand-light dark:text-brand-bright uppercase font-bold tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-light dark:bg-brand-bright animate-ping" />
                      🛠️ Dev Integration Tip
                    </p>
                    <p className="text-[11px] text-muted font-sans leading-relaxed">
                      To route actual messages straight to <span className="text-foreground font-semibold">elainejan1999@gmail.com</span>, fetch an access key at <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-brand-light dark:text-brand-bright hover:underline font-semibold">web3forms.com</a> and place it inside your workspace environment file under <code className="font-mono text-foreground font-semibold">VITE_WEB3FORMS_ACCESS_KEY</code>.
                    </p>
                  </motion.div>
                )}

                <button
                  id="success-reset-btn"
                  onClick={() => {
                    setFormData({
                      name: '',
                      email: '',
                      subject: '',
                      message: ''
                    });
                    setSubmitted(false);
                    setErrorMsg('');
                    setUsingDemo(false);
                  }}
                  className="px-5 py-2.5 rounded-lg border border-border hover:bg-subtle-bg text-foreground text-xs font-semibold tracking-wide transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

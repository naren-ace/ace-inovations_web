import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send, CheckCircle } from "lucide-react";

export const ContactModal = ({ open, onOpenChange }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    // Mock submission
    setSubmitted(true);
    toast.success("Your project inquiry has been submitted!");
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
      onOpenChange(false);
    }, 2500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
              style={{ background: 'hsl(216 100% 50% / 0.08)' }}
            >
              <CheckCircle className="w-7 h-7" style={{ color: 'hsl(var(--primary))' }} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Inquiry Received
            </h3>
            <p className="text-sm" style={{ color: 'hsl(var(--body))' }}>
              We&apos;ll review your project details and get back to you
              within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold text-foreground">
                Start a Project
              </DialogTitle>
              <DialogDescription style={{ color: 'hsl(var(--caption))' }}>
                Tell us about your vision and we&apos;ll craft a blueprint.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name <span style={{ color: 'hsl(var(--destructive))' }}>*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email <span style={{ color: 'hsl(var(--destructive))' }}>*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium text-foreground">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company"
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">
                  Project Details <span style={{ color: 'hsl(var(--destructive))' }}>*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, and goals..."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>
              <Button variant="premium" size="lg" type="submit" className="w-full mt-2">
                Submit Inquiry
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

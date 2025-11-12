import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface DonationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const donationAmounts = [10, 15, 20, 30, 40, 50, 100];

export const DonationModal = ({ open, onOpenChange }: DonationModalProps) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [name, setName] = useState("");
  const [reference, setReference] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Donation Notification from ${name}`);
    const body = encodeURIComponent(
      `Donation Information:\n\n` +
      `Amount: $${selectedAmount}\n` +
      `Name: ${name}\n` +
      `Reference/Purpose: ${reference || 'General Fund'}\n\n` +
      `This donor has completed or will complete their donation via Zelle.\n\n` +
      `Thank you!`
    );
    
    window.location.href = `mailto:kdufloridainc@gmail.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setShowThankYou(true);
    }, 500);
  };

  const handleClose = () => {
    setShowThankYou(false);
    setSelectedAmount(null);
    setName("");
    setReference("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {!showThankYou ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-3xl text-primary-green">Make a Donation</DialogTitle>
            </DialogHeader>
            <p className="text-center text-muted-foreground mb-6">
              Thank you for considering a donation to KDU Florida Inc. Your generosity helps us serve our community in Florida and Sierra Leone. Every contribution, large or small, makes a meaningful difference in the lives we touch.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="text-lg mb-3 block">Donation Amount: *</Label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setSelectedAmount(amount)}
                      className={`p-4 text-center border-2 rounded-lg font-bold text-lg transition-all hover:scale-105 ${
                        selectedAmount === amount
                          ? "bg-kdu-gradient text-white border-primary"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="name">Name: *</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="reference">Reference:</Label>
                <Textarea
                  id="reference"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  placeholder="e.g., Water Well Project, Annual Gala, General Fund, etc."
                  rows={3}
                  className="mt-2"
                />
              </div>

              <div className="bg-muted p-4 rounded-lg border-l-4 border-primary">
                <p className="font-bold text-primary-green mb-2">Pay to:</p>
                <p className="text-lg mb-2">
                  Zelle Account: <strong>kdufloridainc@gmail.com</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  Please complete your payment via Zelle, then submit this form to notify us of your donation.
                </p>
              </div>

              <Button
                type="submit"
                disabled={!selectedAmount || !name}
                className="w-full bg-kdu-gradient text-white font-bold text-lg py-6 rounded-full hover:scale-105 transition-transform"
              >
                Submit Donation Information
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-4 py-8">
            <h3 className="text-3xl font-bold text-primary-green">🌟 Thank You for Your Generosity! 🌟</h3>
            <p className="text-xl font-bold">Your donation has been received with heartfelt gratitude.</p>
            <p>
              On behalf of KDU Florida Inc., we extend our deepest appreciation for your generous contribution. Your support makes a tangible difference in the lives of people in our Florida community and in Sierra Leone.
            </p>
            <p>
              Through your kindness, we are able to continue our mission of providing education, clean water, health services, and preserving our rich Krio culture for future generations.
            </p>
            <p className="text-xl font-bold italic text-primary-green">LEH WI SHAYN - Let Us Shine Together!</p>
            <p className="text-muted-foreground">May God bless you abundantly for your compassion and generosity.</p>
            <Button
              onClick={handleClose}
              className="mt-6 bg-kdu-gradient text-white font-bold text-lg py-6 px-8 rounded-full hover:scale-105 transition-transform"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

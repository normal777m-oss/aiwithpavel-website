import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  description: string;
  budget: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    description: "",
    budget: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Име е задължително";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email е задължителен";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Невалиден email адрес";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Телефон е задължителен";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Моля, изберете тип услуга";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Описание е задължително";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Описанието трябва да бъде поне 10 символа";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Моля, попълнете всички задължителни полета");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission - in production, this would send to a backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Create mailto link with form data
      const mailtoLink = `mailto:pavel@aiwithpavel.com?subject=Нова заявка за ${formData.serviceType}&body=Име: ${formData.name}%0AEmail: ${formData.email}%0AТелефон: ${formData.phone}%0AТип услуга: ${formData.serviceType}%0AБюджет: ${formData.budget || "Не е посочен"}%0A%0AОписание:%0A${formData.description}`;

      // Open email client
      window.location.href = mailtoLink;

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        description: "",
        budget: "",
      });

      toast.success("Благодаря! Вашата заявка е изпратена успешно.");

      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      toast.error("Възникна грешка при изпращане на формуляра");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center py-12">
        <Card className="max-w-md w-full p-8 text-center space-y-4">
          <div className="flex justify-center">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h3 className="font-display text-2xl font-bold">Благодаря!</h3>
          <p className="text-muted-foreground">
            Вашата заявка е изпратена успешно. Ще се свържем с вас скоро.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            className="w-full"
          >
            Затвори
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Contact Information */}
      <div className="space-y-6">
        <div>
          <h3 className="font-display text-2xl font-bold mb-6">Свържете се с нас</h3>
          <p className="text-muted-foreground mb-8">
            Имате въпроси? Готови сте да стартирате вашия проект? Свържете се с нас днес!
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <a
                href="mailto:pavel@aiwithpavel.com"
                className="text-muted-foreground hover:text-primary transition"
              >
                pavel@aiwithpavel.com
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Телефон</p>
              <a
                href="tel:+359896840604"
                className="text-muted-foreground hover:text-primary transition"
              >
                +359 896 840 604
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-semibold">Локация</p>
              <p className="text-muted-foreground">България</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Име <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Вашето име"
              className={`w-full px-4 py-2 rounded-lg border transition ${
                errors.name
                  ? "border-red-500 bg-red-50"
                  : "border-border bg-background hover:border-primary/50"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={`w-full px-4 py-2 rounded-lg border transition ${
                errors.email
                  ? "border-red-500 bg-red-50"
                  : "border-border bg-background hover:border-primary/50"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Телефон <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+359 896 840 604"
              className={`w-full px-4 py-2 rounded-lg border transition ${
                errors.phone
                  ? "border-red-500 bg-red-50"
                  : "border-border bg-background hover:border-primary/50"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Service Type */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Тип услуга <span className="text-red-500">*</span>
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border transition ${
                errors.serviceType
                  ? "border-red-500 bg-red-50"
                  : "border-border bg-background hover:border-primary/50"
              }`}
            >
              <option value="">Изберете услуга</option>
              <option value="AI Портрет">Персонализиран AI Портрет</option>
              <option value="Реставрация">Реставрация на Снимки</option>
              <option value="Бизнес Визии">Бизнес Визии и Маркетинг</option>
              <option value="Други">Други</option>
            </select>
            {errors.serviceType && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.serviceType}
              </p>
            )}
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Бюджет (опционално)
          </label>
          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="напр. 100-500 лв"
            className="w-full px-4 py-2 rounded-lg border border-border bg-background hover:border-primary/50 transition"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Описание на проекта <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Опишете вашата идея, желаната визия, стил и други детайли..."
            rows={5}
            className={`w-full px-4 py-2 rounded-lg border transition resize-none ${
              errors.description
                ? "border-red-500 bg-red-50"
                : "border-border bg-background hover:border-primary/50"
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              {errors.description}
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            {formData.description.length}/500 символа
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto"
          size="lg"
        >
          {isSubmitting ? "Изпращане..." : "Изпрати заявка"}
        </Button>

        <p className="text-xs text-muted-foreground">
          Вашите данни ще бъдат обработени конфиденциално и ще се свържем с вас в рамките на 24 часа.
        </p>
      </form>
    </div>
  );
}

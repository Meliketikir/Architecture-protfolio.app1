import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required('Ad Soyad alanı zorunludur.'),
    email: Yup.string().email('Geçersiz e-posta adresi.').required('E-posta alanı zorunludur.'),
    phone: Yup.string().matches(/^[0-9]+$/, "Telefon numarası sadece rakamlardan oluşmalıdır.").min(10, 'Telefon numarası en az 10 haneli olmalıdır.').max(15, 'Telefon numarası en fazla 15 haneli olmalıdır.'),
    subject: Yup.string().required('Konu alanı zorunludur.'),
    message: Yup.string().required('Mesaj alanı zorunludur.').min(10, 'Mesaj en az 10 karakter olmalıdır.'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        // Simulate API call with loading animation
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Form verileri:', values);
        setSubmitStatus('success');
        resetForm();
      } catch (error) {
        console.error('Form gönderilirken hata oluştu:', error);
        setSubmitStatus('error');
      } finally {
        setSubmitting(false);
        setIsSubmitting(false);
      }
    },
  });

  const inputClasses = (fieldName: keyof ContactFormData) => {
    const hasError = formik.touched[fieldName] && formik.errors[fieldName];
    const hasValue = formik.values[fieldName];
    
    return `
      relative w-full px-4 py-4 bg-white/50 backdrop-blur-sm border-2 rounded-2xl
      transition-all duration-300 focus:outline-none resize-none
      placeholder-gray-400 text-gray-700
      ${hasError 
        ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/20' 
        : hasValue
        ? 'border-green-300 focus:border-green-500 focus:ring-4 focus:ring-green-500/20'
        : 'border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20'
      }
      hover:border-blue-300
    `;
  };

  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl"></div>
      
      <form onSubmit={formik.handleSubmit} className="relative bg-white/60 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-2xl space-y-8">
        {/* Form Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-2">
            Bizimle İletişime Geçin
          </h3>
          <p className="text-gray-600">Projeniz hakkında konuşalım</p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 ml-1">
              Ad Soyad *
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                {...formik.getFieldProps('name')}
                className={inputClasses('name')}
                placeholder="Adınız ve soyadınız"
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                {formik.touched.name && !formik.errors.name && formik.values.name && (
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            {formik.touched.name && formik.errors.name && (
              <div className="flex items-center space-x-2 text-red-500 text-sm ml-1">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{formik.errors.name}</span>
              </div>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 ml-1">
              E-posta *
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                {...formik.getFieldProps('email')}
                className={inputClasses('email')}
                placeholder="ornek@email.com"
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                {formik.touched.email && !formik.errors.email && formik.values.email && (
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="flex items-center space-x-2 text-red-500 text-sm ml-1">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{formik.errors.email}</span>
              </div>
            )}
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 ml-1">
              Telefon
            </label>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                {...formik.getFieldProps('phone')}
                className={inputClasses('phone')}
                placeholder="+90 5XX XXX XX XX"
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                {formik.touched.phone && !formik.errors.phone && formik.values.phone && (
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <div className="flex items-center space-x-2 text-red-500 text-sm ml-1">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{formik.errors.phone}</span>
              </div>
            )}
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 ml-1">
              Konu *
            </label>
            <div className="relative">
              <select
                id="subject"
                {...formik.getFieldProps('subject')}
                className={inputClasses('subject')}
              >
                <option value="">Konu seçiniz</option>
                <option value="project">🏗️ Proje Teklifi</option>
                <option value="consultation">💭 Danışmanlık</option>
                <option value="partnership">🤝 İş Birliği</option>
                <option value="other">📧 Diğer</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center">
                {formik.touched.subject && !formik.errors.subject && formik.values.subject && (
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            {formik.touched.subject && formik.errors.subject && (
              <div className="flex items-center space-x-2 text-red-500 text-sm ml-1">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{formik.errors.subject}</span>
              </div>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 ml-1">
            Mesaj *
          </label>
          <div className="relative">
            <textarea
              id="message"
              {...formik.getFieldProps('message')}
              rows={5}
              className={inputClasses('message')}
              placeholder="Projeniz hakkında detaylı bilgi verin..."
            />
            <div className="absolute top-4 right-4">
              {formik.touched.message && !formik.errors.message && formik.values.message && (
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          {formik.touched.message && formik.errors.message && (
            <div className="flex items-center space-x-2 text-red-500 text-sm ml-1">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{formik.errors.message}</span>
            </div>
          )}
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="relative overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-800 rounded-2xl p-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Mesajınız başarıyla gönderildi!</h4>
                <p className="text-sm text-green-700">En kısa sürede size dönüş yapacağız.</p>
              </div>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="relative overflow-hidden bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 text-red-800 rounded-2xl p-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Mesaj gönderilemedi</h4>
                <p className="text-sm text-red-700">Lütfen daha sonra tekrar deneyin.</p>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={formik.isSubmitting || isSubmitting}
            className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center justify-center gap-3">
              {isSubmitting ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Gönderiliyor...
                </>
              ) : (
                <>
                  Mesajı Gönder
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </span>
          </button>
        </div>

        {/* Additional Info */}
        <div className="text-center pt-4">
          <p className="text-sm text-gray-600">
            📞 Acil durumlar için: <span className="font-semibold text-blue-600">+90 212 123 45 67</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
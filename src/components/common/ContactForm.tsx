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
      setSubmitting(true);
      setSubmitStatus(null);

      try {
        // Burada gerçek bir API çağrısı yapılacak
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('Form verileri:', values);
        setSubmitStatus('success');
        resetForm();
      } catch (error) {
        console.error('Form gönderilirken hata oluştu:', error);
        setSubmitStatus('error');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Ad Soyad
          </label>
          <input
            type="text"
            id="name"
            {...formik.getFieldProps('name')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-posta
          </label>
          <input
            type="email"
            id="email"
            {...formik.getFieldProps('email')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            {...formik.getFieldProps('phone')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Konu
          </label>
          <select
            id="subject"
            {...formik.getFieldProps('subject')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
          >
            <option value="">Seçiniz</option>
            <option value="project">Proje Teklifi</option>
            <option value="consultation">Danışmanlık</option>
            <option value="other">Diğer</option>
          </select>
          {formik.touched.subject && formik.errors.subject ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.subject}</div>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Mesaj
        </label>
        <textarea
          id="message"
          {...formik.getFieldProps('message')}
          rows={4}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
        ) : null}
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 text-green-700 rounded-md">
          Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md">
          Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formik.isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm; 
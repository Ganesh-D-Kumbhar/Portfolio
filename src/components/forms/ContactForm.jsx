import { useMemo } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { toast } from "react-toastify"
import { Send, MessageSquare, User, Mail, Phone, FileText, MessageCircle, Loader2, Sparkles } from "lucide-react"

const ContactForm = () => {
  // Memoize validation schema for better performance
  const validationSchema = useMemo(
    () =>
      Yup.object({
        fullName: Yup.string()
          .min(2, "Name must be at least 2 characters")
          .max(50, "Name must be less than 50 characters")
          .required("Full name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        mobNo: Yup.string()
          .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
          .required("Mobile number is required"),
        city: Yup.string()
          .min(5, "City must be at least 3 characters")
          .max(100, "City must be less than 20 characters")
          .required("City is required"),
        msg: Yup.string()
          .min(10, "Message must be at least 10 characters")
          .max(500, "Message must be less than 500 characters")
          .required("Message is required"),
      }),
    [],
  )

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobNo: "",
      city: "",
      msg: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true)

        const response = await axios.post("https://portfolio-form-backend-t69y.onrender.com/api/contact-form", values, {
          timeout: 10000,
        })

        toast.success("Form submitted successfully.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })

        resetForm()
      } catch (error) {
        console.error("Contact form error:", error)

        const errorMessage = error.response?.data?.message || "Something went wrong. Please try again."

        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      } finally {
        setSubmitting(false)
      }
    },
  })

  return (
    <div className="relative opacity-0 animate-fade-in">
      {/* Decorative Elements */}
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-indigo-500/20 rounded-full blur-2xl" />

      <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-8 shadow-2xl shadow-indigo-500/10">
        {/* Header */}
        <div className="text-center mb-8 opacity-0 animate-slide-in" style={{ animationDelay: "200ms" }}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl mb-4 shadow-lg shadow-indigo-500/30">
            <MessageSquare className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Let's Connect</h2>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="opacity-0 animate-slide-in" style={{ animationDelay: "300ms" }}>
              <label className="block text-indigo-300 font-semibold mb-3">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-indigo-400 group-focus-within:text-indigo-300 transition-colors" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your full name"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                  className={`w-full bg-gray-800/60 border-2 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                    formik.touched.fullName && formik.errors.fullName
                      ? "border-red-400 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
                      : "border-indigo-500/30 focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400/50"
                  }`}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <p className="text-red-400 text-sm mt-2 opacity-0 animate-fade-in">{formik.errors.fullName}</p>
                )}
              </div>
            </div>

            <div className="opacity-0 animate-slide-in" style={{ animationDelay: "400ms" }}>
              <label className="block text-indigo-300 font-semibold mb-3">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-indigo-400 group-focus-within:text-indigo-300 transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                  className={`w-full bg-gray-800/60 border-2 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-400 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
                      : "border-indigo-500/30 focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400/50"
                  }`}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-400 text-sm mt-2 opacity-0 animate-fade-in">{formik.errors.email}</p>
                )}
              </div>
            </div>
          </div>

          {/* Phone and Subject Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="opacity-0 animate-slide-in" style={{ animationDelay: "500ms" }}>
              <label className="block text-indigo-300 font-semibold mb-3">Mobile Number</label>
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-indigo-400 group-focus-within:text-indigo-300 transition-colors" />
                <input
                  type="tel"
                  name="mobNo"
                  placeholder="Your mobile number"
                  value={formik.values.mobNo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                  className={`w-full bg-gray-800/60 border-2 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                    formik.touched.mobNo && formik.errors.mobNo
                      ? "border-red-400 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
                      : "border-indigo-500/30 focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400/50"
                  }`}
                />
                {formik.touched.mobNo && formik.errors.mobNo && (
                  <p className="text-red-400 text-sm mt-2 opacity-0 animate-fade-in">{formik.errors.mobNo}</p>
                )}
              </div>
            </div>

            <div className="opacity-0 animate-slide-in" style={{ animationDelay: "600ms" }}>
              <label className="block text-indigo-300 font-semibold mb-3">Subject</label>
              <div className="relative group">
                <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-indigo-400 group-focus-within:text-indigo-300 transition-colors" />
                <input
                  type="text"
                  name="city"
                  placeholder="What's this about?"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled={formik.isSubmitting}
                  className={`w-full bg-gray-800/60 border-2 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${
                    formik.touched.city && formik.errors.city
                      ? "border-red-400 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
                      : "border-indigo-500/30 focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400/50"
                  }`}
                />
                {formik.touched.city && formik.errors.city && (
                  <p className="text-red-400 text-sm mt-2 opacity-0 animate-fade-in">{formik.errors.city}</p>
                )}
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="opacity-0 animate-slide-in" style={{ animationDelay: "700ms" }}>
            <label className="block text-indigo-300 font-semibold mb-3">Message</label>
            <div className="relative group">
              <MessageCircle className="absolute left-4 top-6 w-5 h-5 text-indigo-400 group-focus-within:text-indigo-300 transition-colors" />
              <textarea
                name="msg"
                rows={5}
                placeholder="Tell me about your project or just say hello..."
                value={formik.values.msg}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
                className={`w-full bg-gray-800/60 border-2 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none resize-none transition-all duration-200 ${
                  formik.touched.msg && formik.errors.msg
                    ? "border-red-400 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
                    : "border-indigo-500/30 focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400/50"
                }`}
              />
              {formik.touched.msg && formik.errors.msg && (
                <p className="text-red-400 text-sm mt-2 opacity-0 animate-fade-in">{formik.errors.msg}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="opacity-0 animate-slide-in" style={{ animationDelay: "800ms" }}>
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
            >
              {formik.isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-6 h-6" />
                  <span>Send Message</span>
                  <Sparkles className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm

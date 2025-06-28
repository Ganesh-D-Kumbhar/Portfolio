import { useMemo } from "react"
import { motion } from "framer-motion"
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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Decorative Elements */}
      <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-indigo-500/20 rounded-full blur-2xl" />

      <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-8 shadow-2xl shadow-indigo-500/10">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl mb-4 shadow-lg shadow-indigo-500/30">
            <MessageSquare className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Let's Connect</h2>
        </motion.div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
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
                  className={`w-full bg-gray-800/60 border-2 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${formik.touched.fullName && formik.errors.fullName
                      ? "border-red-400 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
                      : "border-indigo-500/30 focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400/50"
                    }`}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {formik.errors.fullName}
                  </motion.p>
                )}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
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
                  className={`w-full bg-gray-800/60 border-2 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${formik.touched.email && formik.errors.email
                      ? "border-red-400 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
                      : "border-indigo-500/30 focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400/50"
                    }`}
                />
                {formik.touched.email && formik.errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {formik.errors.email}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>

          {/* Phone and Subject Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
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
                  className={`w-full bg-gray-800/60 border-2 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${formik.touched.mobNo && formik.errors.mobNo
                      ? "border-red-400 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
                      : "border-indigo-500/30 focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400/50"
                    }`}
                />
                {formik.touched.mobNo && formik.errors.mobNo && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {formik.errors.mobNo}
                  </motion.p>
                )}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              <label className="block text-indigo-300 font-semibold mb-3">City</label>
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
                  className={`w-full bg-gray-800/60 border-2 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-200 ${formik.touched.city && formik.errors.city
                      ? "border-red-400 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
                      : "border-indigo-500/30 focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400/50"
                    }`}
                />
                {formik.touched.city && formik.errors.city && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2"
                  >
                    {formik.errors.city}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>

          {/* Message Field */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <label className="block text-indigo-300 font-semibold mb-3">Your Message</label>
            <div className="relative group">
              <MessageCircle className="absolute left-4 top-6 w-5 h-5 text-indigo-400 group-focus-within:text-indigo-300 transition-colors" />
              <textarea
                name="msg"
                rows={6}
                placeholder="Enter your message here..."
                value={formik.values.msg}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
                className={`w-full bg-gray-800/60 border-2 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-200 resize-none ${formik.touched.msg && formik.errors.msg
                    ? "border-red-400 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
                    : "border-indigo-500/30 focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400/50"
                  }`}
              />
              {formik.touched.msg && formik.errors.msg && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2"
                >
                  {formik.errors.msg}
                </motion.p>
              )}
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={formik.isSubmitting || !formik.isValid}
            className="w-full relative overflow-hidden bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-6 rounded-2xl font-bold text-lg shadow-2xl shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 group hover:scale-[1.02] active:scale-[0.98]"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.4)" }}
          >
            <div className="relative flex items-center justify-center">
              {formik.isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Send Message</span>
                  <Sparkles className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-200" />
                </>
              )}
            </div>
          </motion.button>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactForm

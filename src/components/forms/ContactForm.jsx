import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import {
  Send,
  MessageSquare,
  CheckCircle,
  XCircle,
  X,
  User,
  Mail,
  Phone,
  FileText,
  MessageCircle,
  Loader2,
  Sparkles,
} from "lucide-react"

// Validation Schema
const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Full name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  mobNo: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits")
    .required("Mobile number is required"),
  sub: Yup.string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters")
    .required("Subject is required"),
  msg: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters")
    .required("Message is required"),
})

// Enhanced Toast Component
const Toast = ({ type, message, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -100, scale: 0.3 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="fixed top-20 right-[2px] z-[400] max-w-md w-full"
    >
      <div
        className={`relative bg-white overflow-hidden rounded-sm  border-2 shadow-2xl ${type === "success"
          ? " text-green-950"
          : "text-red-500"
          }`}
      >
        {/* Animated Background */}
        {/* <motion.div
          className={`absolute inset-0 ${type === "success"
            ? "bg-gradient-to-r from-green-400/10 to-emerald-400/10"
            : "bg-gradient-to-r from-red-400/10 to-rose-400/10"
            }`}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        /> */}

        <div className="relative">
          <div className="flex items-start mx-2">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className={`flex-shrink-0 w-6 h-6 mt-4 rounded-full flex items-center justify-center ${type === "success" ? "bg-green-700" : "bg-red-500"
                }`}
            >
              {type === "success" ? (
                <CheckCircle className="w-7 h-7 text-white" />
              ) : (
                <XCircle className="w-7 h-7 text-white" />
              )}
            </motion.div>

            <div className="ml-4 flex-1">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-lg font-semibold ${type === "success" ? "text-green-700" : "text-red-500"}`}
              >
                {type === "success" ? "Message Sent Successfully!" : "Failed to Send Message"}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-black mt-1 text-sm"
              >
                {message}
              </motion.p>
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={onClose}
              className="flex-shrink-0 ml-4 p-2 rounded-xl  transition-colors duration-200"
            >
              <X className="w-5 h-5 text-black" />
            </motion.button>
          </div>

          {/* Enhanced Progress Bar */}
          <motion.div className={`mt-4 h-2 w-full rounded-full ${type === "success" ? "bg-green-200" : "bg-red-200"}`}>
            <motion.div
              className={`h-full ${type === "success" ? "bg-green-700" : "bg-red-700"}`}
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

const ContactForm = () => {
  const [toast, setToast] = useState(null)

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobNo: "",
      sub: "",
      msg: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const response = await axios.post("/api/contact-form", values)

        setToast({
          type: "success",
          message: "Thank you! I'll get back to you within 24 hours.",
        })
        resetForm()
      } catch (error) {
        setToast({
          type: "error",
          message: error.response?.data?.message || "Something went wrong. Please try again.",
        })
      } finally {
        setSubmitting(false)
      }
    },
  })

  const closeToast = () => setToast(null)
  if (toast) setTimeout(closeToast, 4000)

  return (
    <>
      <AnimatePresence>
        {toast && <Toast type={toast.type} message={toast.message} onClose={closeToast} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Decorative Elements */}
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-indigo-400/20 to-indigo-500/20 rounded-full blur-2xl" />

        <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-8 shadow-2xl shadow-indigo-500/10">
          {/* Animated Header */}
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
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
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
                    className={`w-full bg-gray-800/60 border-2 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${formik.touched.fullName && formik.errors.fullName
                      ? "border-red-400 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
                      : "border-indigo-500/30 focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400/50"
                      }`}
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center"
                    >

                      {formik.errors.fullName}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
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
                    className={`w-full bg-gray-800/60 border-2 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${formik.touched.email && formik.errors.email
                      ? "border-red-400 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
                      : "border-indigo-500/30 focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400/50"
                      }`}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center"
                    >

                      {formik.errors.email}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Phone and Subject Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
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
                    className={`w-full bg-gray-800/60 border-2 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${formik.touched.mobNo && formik.errors.mobNo
                      ? "border-red-400 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
                      : "border-indigo-500/30 focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400/50"
                      }`}
                  />
                  {formik.touched.mobNo && formik.errors.mobNo && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center"
                    >

                      {formik.errors.mobNo}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-indigo-300 font-semibold mb-3">Subject</label>
                <div className="relative group">
                  <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-indigo-400 group-focus-within:text-indigo-300 transition-colors" />
                  <input
                    type="text"
                    name="sub"
                    placeholder="What's this about?"
                    value={formik.values.sub}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full bg-gray-800/60 border-2 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${formik.touched.sub && formik.errors.sub
                      ? "border-red-400 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
                      : "border-indigo-500/30 focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400/50"
                      }`}
                  />
                  {formik.touched.sub && formik.errors.sub && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 flex items-center"
                    >

                      {formik.errors.sub}
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
                  placeholder="Tell me about your project, goals, timeline, and how I can help bring your vision to life..."
                  value={formik.values.msg}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full bg-gray-800/60 border-2 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none transition-all duration-300 resize-none ${formik.touched.msg && formik.errors.msg
                    ? "border-red-400 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
                    : "border-indigo-500/30 focus:border-indigo-400 focus:shadow-lg focus:shadow-indigo-500/20 hover:border-indigo-400/50"
                    }`}
                />
                {formik.touched.msg && formik.errors.msg && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-2 flex items-center"
                  >

                    {formik.errors.msg}
                  </motion.p>
                )}
              </div>
            </motion.div>

            {/* Submit Button */}
            <div>
              <motion.button
                type="submit"
                disabled={formik.isSubmitting || !formik.isValid}
                className="w-full relative overflow-hidden bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-6 rounded-2xl font-bold text-lg shadow-2xl shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
                whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Button Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <div className="relative flex items-center justify-center">
                  {formik.isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Submit</span>
                      <Sparkles className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300" />
                    </>
                  )}
                </div>
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  )
}

export default ContactForm

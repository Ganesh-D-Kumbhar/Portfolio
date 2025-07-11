import { useState, useEffect, useMemo } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { toast } from "react-toastify"
import { X, User, Mail, Phone, FileText, MessageSquare, Send, Loader2 } from "lucide-react"



const ContactPopUpForm = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [userIP, setUserIP] = useState("")
  const [pageUrl, setPageUrl] = useState("")

  // Memoize validation schema to prevent recreation on every render
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
          .max(20, "City must be less than 20 characters")
          .required("City is required"),
        msg: Yup.string()
          .min(10, "Message must be at least 10 characters")
          .max(500, "Message must be less than 500 characters")
          .required("Message is required"),
      }),
    [],
  )

  // Fetch User's IP Address with error handling
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json", {
          timeout: 5000,
        })
        setUserIP(response.data.ip)
      } catch (error) {
        console.error("Failed to fetch IP address:", error)
        setUserIP("Unknown")
      }
    }

    if (isOpen) {
      fetchIP()
      if (typeof window !== "undefined") {
        setPageUrl(window.location.href)
      }
    }
  }, [isOpen])

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      mobNo: "",
      city: "",
      msg: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true)

      const submissionData = {
        fullName: values.fullName,
        email: values.email,
        mobNo: values.mobNo,
        city: values.city,
        msg: values.msg,
      }

      try {
        await axios.post(`https://portfolio-form-backend-t69y.onrender.com/api/contact-form`, submissionData, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        })

        toast.success("Form submitted successfully.", {
          position: "top-right",
          autoClose: 5000,
        })

        resetForm()
        setTimeout(() => {
          onClose()
        }, 2000)
      } catch (error) {
        console.error("Contact form error:", error)
        toast.error("Oops! Something went wrong. Please try submitting the form again.", {
          position: "top-right",
          autoClose: 6000,
        })
      } finally {
        setIsSubmitting(false)
      }
    },
  })

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[9999] p-4 opacity-0 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-auto max-h-[90vh] overflow-y-auto transform opacity-0 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[rgb(117,78,249)] text-white rounded-full z-10 border border-white hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
          aria-label="Close form"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[rgb(117,78,249)] to-[rgb(147,108,255)] rounded-2xl mb-4 shadow-lg shadow-[rgb(117,78,249)]/30">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[rgb(117,78,249)] to-[rgb(147,108,255)] bg-clip-text text-transparent mb-2">
              Get In Touch
            </h3>
            <p className="text-gray-600 text-sm">I'd love to hear from you. Send me a message!</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute top-3 left-3 text-[rgb(117,78,249)]">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(117,78,249)] focus:border-transparent transition-all duration-200"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fullName}
                  disabled={isSubmitting}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <div className="text-red-500 text-xs mt-1 ml-2">{formik.errors.fullName}</div>
                )}
              </div>

              <div className="relative">
                <div className="absolute top-3 left-3 text-[rgb(117,78,249)]">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(117,78,249)] focus:border-transparent transition-all duration-200"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  disabled={isSubmitting}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-xs mt-1 ml-2">{formik.errors.email}</div>
                )}
              </div>
            </div>

            {/* Phone and Subject Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute top-3 left-3 text-[rgb(117,78,249)]">
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  type="tel"
                  name="mobNo"
                  placeholder="Mobile Number"
                  className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(117,78,249)] focus:border-transparent transition-all duration-200"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobNo}
                  disabled={isSubmitting}
                />
                {formik.touched.mobNo && formik.errors.mobNo && (
                  <div className="text-red-500 text-xs mt-1 ml-2">{formik.errors.mobNo}</div>
                )}
              </div>

              <div className="relative">
                <div className="absolute top-3 left-3 text-[rgb(117,78,249)]">
                  <FileText className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="city"
                  placeholder="Subject"
                  className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(117,78,249)] focus:border-transparent transition-all duration-200"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  disabled={isSubmitting}
                />
                {formik.touched.city && formik.errors.city && (
                  <div className="text-red-500 text-xs mt-1 ml-2">{formik.errors.city}</div>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <div className="absolute top-3 left-3 text-[rgb(117,78,249)]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <textarea
                name="msg"
                placeholder="Your message here..."
                rows={4}
                className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(117,78,249)] focus:border-transparent transition-all duration-200 resize-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.msg}
                disabled={isSubmitting}
              />
              {formik.touched.msg && formik.errors.msg && (
                <div className="text-red-500 text-xs mt-1 ml-2">{formik.errors.msg}</div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[rgb(117,78,249)] to-[rgb(147,108,255)] text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-[rgb(117,78,249)]/25 hover:shadow-[rgb(117,78,249)]/40 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPopUpForm

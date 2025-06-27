import { useState, useEffect, useCallback, useMemo } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { toast } from "react-toastify"
import { motion, AnimatePresence } from "framer-motion"
import { X, User, Mail, Phone, MapPin, MessageSquare, Download, Loader2 } from "lucide-react"

const PopUpForm = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [userIP, setUserIP] = useState("")
  const [pageUrl, setPageUrl] = useState("")

  // Memoize validation schema to prevent recreation on every render
  const validationSchema = useMemo(
    () =>
      Yup.object({
        name: Yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
        email: Yup.string().required("Email is required").email("Invalid email"),
        phoneNumber: Yup.string()
          .matches(/^\d+$/, "Phone must contain only numbers")
          .test("valid-length", "Phone number must be 10 digits", (value) => value?.length === 10)
          .required("Phone number is required"),
        city: Yup.string().required("City is required"),
        message: Yup.string().required("Message is required"),
      }),
    [],
  )

  // Fetch User's IP Address with error handling
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json", {
          timeout: 5000, // Add timeout for better performance
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

  // Optimized download function
  const downloadResume = useCallback(() => {
    try {
      const link = document.createElement("a")
      link.href = "/assets/pdfs/resume.pdf"
      link.download = "Ganesh-Kumbhar-Resume.pdf"
      link.style.display = "none"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast.success("Resume download started!", {
        position: "top-right",
        autoClose: 3000,
      })
    } catch (error) {
      toast.error("Failed to download resume. Please try again.", {
        position: "top-right",
        autoClose: 5000,
      })
    }
  }, [])

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      city: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true)

      const submissionData = {
        formData: {
          Name: values.name,
          Email: values.email,
          PhoneNumber: values.phoneNumber,
          City: values.city,
          Message: values.message,
          PageUrl: pageUrl,
          IP_Address: userIP,
        },
        to: "ganeshhh2003@gmail.com",
        mailSubject: "Resume Download Request",
        userEmailSubject: "Thank you for downloading my resume",
        contactNo: "+919096378354",
        bannerTitle: "Resume Download",
      }

      try {
        await axios.post(
          `/api/contact-form`,
          { submissionData },
          {
            headers: {
              "Content-Type": "application/json",
            },
            timeout: 10000, // Add timeout
          },
        )

        toast.success("Thank you! Your submission was received. Download will start shortly.", {
          position: "top-right",
          autoClose: 4000,
        })

        resetForm()

        // Start download after a short delay
        setTimeout(() => {
          downloadResume()
          onClose()
        }, 1500)
      } catch (error) {
        console.error("Submission error:", error)
        toast.error("Oops! Something went wrong. Please try submitting the form again.", {
          position: "top-right",
          autoClose: 5000,
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
    <AnimatePresence>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[9999] p-4 animate-in fade-in duration-200"
        onClick={onClose}
      >
        <div
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl mx-auto transform transition-all duration-200 animate-in slide-in-from-bottom-4"
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
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[rgb(117,78,249)] to-[rgb(147,108,255)] bg-clip-text text-transparent mb-2">
                Download Resume
              </h3>
              <p className="text-gray-600 text-sm">Please fill out this form to download my resume</p>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute top-3 left-3 text-[rgb(117,78,249)]">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(117,78,249)] focus:border-transparent transition-all duration-200"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    disabled={isSubmitting}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div className="text-red-500 text-xs mt-1 ml-2">{formik.errors.name}</div>
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

              {/* Phone & City Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute top-3 left-3 text-[rgb(117,78,249)]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(117,78,249)] focus:border-transparent transition-all duration-200"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                    disabled={isSubmitting}
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                    <div className="text-red-500 text-xs mt-1 ml-2">{formik.errors.phoneNumber}</div>
                  )}
                </div>

                <div className="relative">
                  <div className="absolute top-3 left-3 text-[rgb(117,78,249)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
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
                  name="message"
                  placeholder="Enter your message here"
                  rows={3}
                  className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(117,78,249)] focus:border-transparent transition-all duration-200 resize-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  disabled={isSubmitting}
                />
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500 text-xs mt-1 ml-2">{formik.errors.message}</div>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[rgb(117,78,249)] to-[rgb(147,108,255)] text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-[rgb(117,78,249)]/25 hover:shadow-[rgb(117,78,249)]/40 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed transform cursor-pointer "
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default PopUpForm

import { useState, useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  User,
  Mail,
  Phone,
  Building,
  MapPin,
  Briefcase,
  MessageSquare,
  Download,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react"

const PopUpForm = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [userIP, setUserIP] = useState("")
  const [pageUrl, setPageUrl] = useState("")

  // Fetch User's IP Address
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json")
        setUserIP(response.data.ip)
      } catch (error) {
        console.error("Failed to fetch IP address:", error)
      }
    }
    fetchIP()
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false)
      setSubmissionMessage("")
      setIsSuccess(false)
    }
  }, [isOpen])

  useEffect(() => {
    if (isSubmitted && isSuccess) {
      // Auto download resume after successful submission
      const timer = setTimeout(() => {
        downloadResume()
        onClose()
      }, 2000)
      return () => clearTimeout(timer)
    } else if (isSubmitted && !isSuccess) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isSubmitted, isSuccess, onClose])

  const downloadResume = () => {
    // Create a temporary link to download the resume
    const link = document.createElement("a")
    link.href = "/resume/Ganesh-Kumbhar-Resume.pdf" // Update with your actual resume path
    link.download = "Ganesh-Kumbhar-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      designation: "",
      company: "",
      city: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
      email: Yup.string().required("Email is required").email("Invalid email"),
      phoneNumber: Yup.string()
        .matches(/^\d+$/, "Phone must contain only numbers")
        .test("valid-length", "Phone number must be 10 digits", (value) => value?.length === 10)
        .required("Phone number is required"),
      designation: Yup.string().required("Designation is required"),
      company: Yup.string().required("Company name is required"),
      city: Yup.string().required("City is required"),
      message: Yup.string().required("Message is required"),
    }),
    // onSubmit: async (values, { resetForm }) => {
    //   try {
    //     const submissionData = {
    //       formData: {
    //         Name: values.name,
    //         Email: values.email,
    //         PhoneNumber: values.phoneNumber,
    //         Company_Name: values.company,
    //         City: values.city,
    //         Designation: values.designation,
    //         Message: values.message,
    //         PageUrl: pageUrl,
    //         IP_Address: userIP,
    //       },
    //       to: "ganeshhh2003@gmail.com",
    //       mailSubject: "Resume Download Request",
    //       userEmailSubject: "Thank you for downloading my resume",
    //       contactNo: "+919096378354",
    //       bannerTitle: "Resume Download",
    //     }

    //     // Simulate API call - replace with your actual endpoint
    //     await new Promise((resolve) => setTimeout(resolve, 2000))

    //     setSubmissionMessage(
    //       "Thank you! Your request was received successfully. Your resume download will start shortly.",
    //     )
    //     setIsSubmitted(true)
    //     setIsSuccess(true)
    //     resetForm()
    //   } catch (error) {
    //     setSubmissionMessage("Oops! Something went wrong. Please try again or contact me directly.")
    //     setIsSubmitted(true)
    //     setIsSuccess(false)
    //     resetForm()
    //   }
    // },
    onSubmit: (values, { resetForm }) => {

      const submissionData = {
        formData: {
          // ...values,
          Name: values.Name,
          Email: values.email,
          PhoneNumber: values.phoneNumber,
          Company_Name: values.company,
          City: values.city,
          Designation: values.designation,
          Message: values.message,
          PageUrl: pageUrl,
          IP_Address: userIP,
        },
        to: "ganeshhh2003@gmail.com",
        mailSubject: "Resume Download Request",
        userEmailSubject: "Thank you for downloading my resume",
        contactNo: "+919096378354",
        bannerTitle: "Resume Download",
      };

      axios
        .post(
          `/api/contact-form`,
          { submissionData },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          setSubmissionMessage(
            "Thank you! Your submission was received, and we will get back to you shortly."
          );
          setIsSubmitted(true);
          setIsSuccess(true);
          resetForm();
        })
        .catch(() => {
          setSubmissionMessage(
            "Oops! Something went wrong. Please try submitting the form again."
          );
          setIsSubmitted(true);
          setIsSuccess(false);
          resetForm();
        });
    },
  })

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[9999] p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Enhanced Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-[rgb(117,78,249)] text-white rounded-full z-10 border border-white cursor-pointer hover:!bg-red-700 transition-all duration-200 "
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

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col justify-center items-center py-12 text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${isSuccess ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                    }`}
                >
                  {isSuccess ? <CheckCircle className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />}
                </div>
                <div className={`text-lg font-semibold mb-2 ${isSuccess ? "text-green-600" : "text-red-600"}`}>
                  {isSuccess ? "Success!" : "Error!"}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{submissionMessage}</p>
                {isSuccess && (
                  <div className="flex items-center space-x-2 mt-4 text-[rgb(117,78,249)] text-sm">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Preparing download...</span>
                  </div>
                )}
              </motion.div>
            ) : (
              <form onSubmit={formik.handleSubmit} className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-[rgb(117,78,249)]">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(117,78,249)] focus:border-transparent transition-all duration-300"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
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
                      className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(117,78,249)] focus:border-transparent transition-all duration-300"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-red-500 text-xs mt-1 ml-2">{formik.errors.email}</div>
                    )}
                  </div>
                </div>

                {/* Phone & City Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-[rgb(117,78,249)]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(117,78,249)] focus:border-transparent transition-all duration-300"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phoneNumber}
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
                      className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(117,78,249)] focus:border-transparent transition-all duration-300"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.city}
                    />
                    {formik.touched.city && formik.errors.city && (
                      <div className="text-red-500 text-xs mt-1 ml-2">{formik.errors.city}</div>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div className="relative">
                  <div className="absolute top-3 left-3 text-[rgb(117,78,249)]">
                    <Building className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(117,78,249)] focus:border-transparent transition-all duration-300"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.company}
                  />
                  {formik.touched.company && formik.errors.company && (
                    <div className="text-red-500 text-xs mt-1 ml-2">{formik.errors.company}</div>
                  )}
                </div>

                {/* Designation */}
                <div className="relative">
                  <div className="absolute top-3 left-3 text-[rgb(117,78,249)]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    name="designation"
                    placeholder="Your Designation"
                    className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(117,78,249)] focus:border-transparent transition-all duration-300"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.designation}
                  />
                  {formik.touched.designation && formik.errors.designation && (
                    <div className="text-red-500 text-xs mt-1 ml-2">{formik.errors.designation}</div>
                  )}
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
                    className="w-full pl-12 pr-4 py-3 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[rgb(117,78,249)] focus:border-transparent transition-all duration-300 resize-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <div className="text-red-500 text-xs mt-1 ml-2">{formik.errors.message}</div>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formik.isSubmitting}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer w-full bg-gradient-to-r from-[rgb(117,78,249)] to-[rgb(147,108,255)] text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-[rgb(117,78,249)]/25 hover:shadow-[rgb(117,78,249)]/40 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formik.isSubmitting ? (
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
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PopUpForm

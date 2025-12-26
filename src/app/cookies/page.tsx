import { Cookie, Shield, CheckCircle, XCircle, Settings, Info } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    icon: Cookie,
    title: "What Are Cookies?",
    content: (
      <div className="space-y-3">
        <p>
          Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Remembering your preferences and settings</li>
          <li>Keeping you logged in to your account</li>
          <li>Understanding how you use our service</li>
          <li>Improving website performance and functionality</li>
          <li>Providing personalized content and recommendations</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Shield,
    title: "Types of Cookies We Use",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
            <CheckCircle className="inline h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
            Essential Cookies
          </h3>
          <p className="ml-7 text-gray-700 dark:text-gray-300">
            These cookies are necessary for the website to function properly. They enable core functionality such as:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-7 mt-2">
            <li>Account authentication and security</li>
            <li>Shopping cart and checkout processes</li>
            <li>Remembering your consent preferences</li>
          </ul>
          <p className="ml-7 text-sm text-gray-600 dark:text-gray-400 mt-2">
            These cookies cannot be disabled as they are essential for the service to operate.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
            <CheckCircle className="inline h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
            Preference Cookies
          </h3>
          <p className="ml-7 text-gray-700 dark:text-gray-300">
            These cookies remember your choices and preferences to provide a more personalized experience:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-7 mt-2">
            <li>Theme preference (light/dark mode)</li>
            <li>Language settings</li>
            <li>Display preferences</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
            <CheckCircle className="inline h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
            Analytics Cookies
          </h3>
          <p className="ml-7 text-gray-700 dark:text-gray-300">
            These cookies help us understand how visitors interact with our website:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-7 mt-2">
            <li>Tracking page views and user journeys</li>
            <li>Measuring website performance</li>
            <li>Identifying popular features and content</li>
            <li>Detecting and fixing technical issues</li>
          </ul>
          <p className="ml-7 text-sm text-gray-600 dark:text-gray-400 mt-2">
            We use this data to improve our service and user experience. No personally identifiable information is collected.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: XCircle,
    title: "Cookies We Don't Use",
    content: (
      <div className="space-y-3">
        <p>
          At Plushify, we prioritize your privacy. We do NOT use:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Advertising Cookies:</strong> We don't track you across other websites for targeted advertising</li>
          <li><strong>Third-Party Tracking Cookies:</strong> We don't allow third parties to track your activity on our site</li>
          <li><strong>Cross-Site Tracking:</strong> We don't share your data with advertising networks</li>
          <li><strong>Social Media Cookies:</strong> We don't embed social media tracking pixels</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          Your browsing experience on Plushify remains private and focused on our service only.
        </p>
      </div>
    ),
  },
  {
    icon: Settings,
    title: "Managing Your Cookie Preferences",
    content: (
      <div className="space-y-3">
        <p>
          You have several options to manage cookies:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            <strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings. You can:
            <ul className="list-disc list-inside space-y-1 ml-6 mt-1">
              <li>Block all cookies</li>
              <li>Delete existing cookies</li>
              <li>Set notifications when cookies are set</li>
              <li>Block third-party cookies</li>
            </ul>
          </li>
          <li>
            <strong>Cookie Banner:</strong> When you first visit our site, you'll see a cookie consent banner where you can:
            <ul className="list-disc list-inside space-y-1 ml-6 mt-1">
              <li>Accept all cookies</li>
              <li>Accept only essential cookies</li>
              <li>Manage individual cookie categories</li>
            </ul>
          </li>
        </ul>
        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900/30 rounded-lg">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            <Info className="inline h-4 w-4 mr-1" />
            <strong>Note:</strong> Blocking essential cookies may prevent certain features of our website from working properly, such as logging in or using the plushie generation service.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: Info,
    title: "Third-Party Services",
    content: (
      <div className="space-y-3">
        <p>
          We may use third-party services that set their own cookies. These include:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            <strong>Payment Processors:</strong> When you make a purchase, our payment partners (e.g., Stripe, PayPal) may set cookies to process your payment securely
          </li>
          <li>
            <strong>Analytics Services:</strong> We may use analytics tools (e.g., Google Analytics) to understand website usage and improve our service
          </li>
          <li>
            <strong>Cloud Services:</strong> Our hosting provider may set technical cookies for website performance and security
          </li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          These third parties have their own privacy policies and cookie policies. We encourage you to review their policies to understand how they use cookies.
        </p>
      </div>
    ),
  },
];

const lastUpdated = "December 25, 2024";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Cookie Policy"
          description="How we use cookies and how you can manage them"
        />

        {/* Last Updated */}
        <Card className="mb-8 border-2 border-pink-200 dark:border-pink-900/30">
          <CardContent className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Last Updated: <strong>{lastUpdated}</strong>
            </p>
          </CardContent>
        </Card>

        {/* Introduction */}
        <Card className="mb-8 border-2 border-pink-200 dark:border-pink-900/30 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/10 dark:to-purple-950/10">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex-shrink-0">
                <Cookie className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  This Cookie Policy explains how Plushify uses cookies and similar technologies to enhance your experience. We believe in transparency and giving you control over your privacy.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  By continuing to use our website, you agree to our use of cookies as described in this policy. You can manage your cookie preferences at any time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Sections */}
        <div className="space-y-6 mb-12">
          {sections.map((section, index) => (
            <Card key={index} className="border-2 border-pink-200 dark:border-pink-900/30 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950/20 dark:to-purple-950/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <section.icon className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-gray-700 dark:text-gray-300">
                {section.content}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Reference Table */}
        <Card className="mb-8 border-2 border-pink-200 dark:border-pink-900/30">
          <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950/20 dark:to-purple-950/20">
            <CardTitle className="text-xl">Cookie Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-pink-200 dark:border-pink-900/30">
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Cookie Type</th>
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Purpose</th>
                    <th className="text-left p-3 font-semibold text-gray-900 dark:text-gray-100">Can Be Disabled?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-pink-100 dark:border-pink-900/20">
                    <td className="p-3 font-medium">Essential</td>
                    <td className="p-3">Core functionality and security</td>
                    <td className="p-3">
                      <span className="text-red-600 dark:text-red-400 font-medium">No</span>
                    </td>
                  </tr>
                  <tr className="border-b border-pink-100 dark:border-pink-900/20">
                    <td className="p-3 font-medium">Preference</td>
                    <td className="p-3">Remember your settings</td>
                    <td className="p-3">
                      <span className="text-green-600 dark:text-green-400 font-medium">Yes</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Analytics</td>
                    <td className="p-3">Improve our service</td>
                    <td className="p-3">
                      <span className="text-green-600 dark:text-green-400 font-medium">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="border-2 border-pink-200 dark:border-pink-900/30">
          <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950/20 dark:to-purple-950/20">
            <CardTitle className="text-xl">Questions About Cookies?</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Email:</strong> privacy@plushify.com
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Support:</strong> support@plushify.com
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

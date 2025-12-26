import { FileText, UserCheck, AlertTriangle, Shield, CreditCard, MessageSquare, Gavel } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: (
      <div className="space-y-3">
        <p>
          By accessing and using Plushify, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
        </p>
        <p>
          We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the updated terms.
        </p>
      </div>
    ),
  },
  {
    icon: UserCheck,
    title: "Account Responsibilities",
    content: (
      <div className="space-y-3">
        <p>
          When you create an account with Plushify, you agree to:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Provide accurate, current, and complete information</li>
          <li>Maintain the security of your account credentials</li>
          <li>Accept responsibility for all activities under your account</li>
          <li>Notify us immediately of any unauthorized access</li>
          <li>Not share your account with others</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          You are responsible for maintaining the confidentiality of your account and password.
        </p>
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    title: "Acceptable Use Policy",
    content: (
      <div className="space-y-3">
        <p>
          You agree to use Plushify only for lawful purposes and in accordance with these Terms. You may not:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Upload images that are illegal, harmful, threatening, or offensive</li>
          <li>Upload images containing nudity, violence, or hate speech</li>
          <li>Infringe on the intellectual property rights of others</li>
          <li>Use the service to create deepfakes or misleading content</li>
          <li>Attempt to reverse engineer or hack our systems</li>
          <li>Use automated tools to abuse our service</li>
          <li>Violate any applicable laws or regulations</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          We reserve the right to suspend or terminate accounts that violate these policies.
        </p>
      </div>
    ),
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    content: (
      <div className="space-y-3">
        <p>
          <strong>Your Content:</strong> You retain ownership of all images you upload and plushies you generate. You grant us a license to process, store, and display your content solely to provide the service.
        </p>
        <p>
          <strong>Our Content:</strong> Plushify, including our technology, designs, and branding, is protected by intellectual property laws. You may not copy, modify, or distribute our content without permission.
        </p>
        <p>
          <strong>Commercial Use:</strong> Pro and Elite plan users receive commercial usage rights for generated plushies. Basic plan users may use generated plushies for personal purposes only.
        </p>
      </div>
    ),
  },
  {
    icon: CreditCard,
    title: "Payment and Credits",
    content: (
      <div className="space-y-3">
        <p>
          <strong>Credit System:</strong> Plushify operates on a credit-based system. Each plushie generation consumes one credit.
        </p>
        <p>
          <strong>Pricing:</strong> Credit packages are priced as follows:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Basic: 30 credits for $9</li>
          <li>Pro: 100 credits for $19</li>
          <li>Elite: 200 credits for $29</li>
        </ul>
        <p>
          <strong>Non-Expiring:</strong> Credits never expire and can be used at any time.
        </p>
        <p>
          <strong>Refunds:</strong> We offer a 14-day satisfaction guarantee. Contact support for refund requests.
        </p>
        <p>
          <strong>Payment Processing:</strong> Payments are processed securely through third-party providers. We do not store your payment information.
        </p>
      </div>
    ),
  },
  {
    icon: MessageSquare,
    title: "User Content and Feedback",
    content: (
      <div className="space-y-3">
        <p>
          <strong>Content Ownership:</strong> You own all content you upload to Plushify. We do not claim ownership of your images or generated plushies.
        </p>
        <p>
          <strong>License to Use:</strong> By uploading content, you grant us a limited, non-exclusive license to process, store, and display your content for the purpose of providing our services.
        </p>
        <p>
          <strong>Feedback:</strong> Any feedback, suggestions, or ideas you provide become our property and may be used to improve our services without compensation.
        </p>
        <p>
          <strong>Content Removal:</strong> You may delete your content at any time. Upon account deletion, all your content will be removed from our servers.
        </p>
      </div>
    ),
  },
  {
    icon: Gavel,
    title: "Termination",
    content: (
      <div className="space-y-3">
        <p>
          We reserve the right to suspend or terminate your account at any time, with or without cause, including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Violation of these Terms of Service</li>
          <li>Violation of our Acceptable Use Policy</li>
          <li>Suspicious or fraudulent activity</li>
          <li>Extended periods of inactivity (12+ months)</li>
          <li>Failure to pay for services</li>
        </ul>
        <p>
          <strong>Effect of Termination:</strong> Upon termination, your access to the service will be revoked, and your account data may be deleted. You will not be entitled to any refunds for unused credits.
        </p>
      </div>
    ),
  },
];

const additionalSections = [
  {
    icon: Shield,
    title: "Disclaimer of Warranties",
    content: (
      <div className="space-y-3">
        <p>
          Plushify is provided "as is" without warranties of any kind, either express or implied. We do not guarantee:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Uninterrupted or error-free service</li>
          <li>That the service will meet your requirements</li>
          <li>The accuracy or quality of generated plushies</li>
          <li>That defects will be corrected</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          Generated plushies are AI-created artistic interpretations and may not perfectly resemble the original image.
        </p>
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content: (
      <div className="space-y-3">
        <p>
          To the fullest extent permitted by law, Plushify shall not be liable for:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Any indirect, incidental, special, or consequential damages</li>
          <li>Loss of data, profits, or business opportunities</li>
          <li>Damages arising from use or inability to use the service</li>
          <li>Damages exceeding the amount you paid for credits</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          Some jurisdictions do not allow the exclusion of certain warranties, so the above exclusions may not apply to you.
        </p>
      </div>
    ),
  },
  {
    icon: Gavel,
    title: "Governing Law and Dispute Resolution",
    content: (
      <div className="space-y-3">
        <p>
          These Terms of Service are governed by the laws of the jurisdiction in which Plushify is established.
        </p>
        <p>
          <strong>Dispute Resolution:</strong> Any disputes arising from these terms shall be resolved through good faith negotiation. If negotiation fails, disputes may be resolved through binding arbitration.
        </p>
        <p>
          <strong>Waiver of Class Action:</strong> You agree to resolve disputes individually and waive any right to participate in class action lawsuits.
        </p>
      </div>
    ),
  },
];

const lastUpdated = "December 25, 2024";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Terms of Service"
          description="Rules and guidelines for using Plushify"
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
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Welcome to Plushify! These Terms of Service govern your use of our AI-powered plushie generation service. By using Plushify, you agree to these terms and our Privacy Policy.
            </p>
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

        {/* Additional Sections */}
        <div className="space-y-6 mb-12">
          {additionalSections.map((section, index) => (
            <Card key={index} className="border-2 border-pink-200 dark:border-pink-900/30 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/20 dark:to-pink-950/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <section.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
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

        {/* Contact Section */}
        <Card className="border-2 border-pink-200 dark:border-pink-900/30">
          <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950/20 dark:to-purple-950/20">
            <CardTitle className="text-xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Email:</strong> legal@plushify.com
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

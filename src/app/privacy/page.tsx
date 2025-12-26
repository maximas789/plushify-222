import { Shield, Eye, Lock, UserCheck, Trash2, Mail, FileText } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    icon: Shield,
    title: "Information We Collect",
    content: (
      <div className="space-y-3">
        <p>
          At Plushify, we collect information to provide you with the best possible experience. The types of information we collect include:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Account Information:</strong> Name, email address, and profile picture when you create an account</li>
          <li><strong>Uploaded Images:</strong> Photos you upload for plushie generation</li>
          <li><strong>Generated Plushies:</strong> Plushie designs created from your photos</li>
          <li><strong>Usage Data:</strong> How you use our service, including generation history and preferences</li>
          <li><strong>Payment Information:</strong> Processed securely through our payment partners (we never store card details)</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: (
      <div className="space-y-3">
        <p>We use your information for the following purposes:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>To generate plushie designs from your uploaded images</li>
          <li>To provide and improve our services</li>
          <li>To process payments and manage your account</li>
          <li>To communicate with you about your account and service updates</li>
          <li>To analyze usage patterns and enhance user experience</li>
          <li>To comply with legal obligations</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Lock,
    title: "Data Security",
    content: (
      <div className="space-y-3">
        <p>
          We take data security seriously and implement industry-standard measures to protect your information:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
          <li><strong>Secure Storage:</strong> Your images and generated plushies are stored securely</li>
          <li><strong>Access Control:</strong> Strict access controls limit who can view your data</li>
          <li><strong>Regular Audits:</strong> We regularly review our security practices</li>
          <li><strong>Payment Security:</strong> Payments are processed through PCI-compliant partners</li>
        </ul>
      </div>
    ),
  },
  {
    icon: UserCheck,
    title: "Data Sharing and Third Parties",
    content: (
      <div className="space-y-3">
        <p>
          We respect your privacy and do not sell your personal information. We may share your data only in the following circumstances:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Service Providers:</strong> With trusted partners who help us operate our service (e.g., cloud hosting, payment processing)</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
          <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          We never share your uploaded images or generated plushies with third parties for marketing or advertising purposes.
        </p>
      </div>
    ),
  },
  {
    icon: Trash2,
    title: "Data Retention and Deletion",
    content: (
      <div className="space-y-3">
        <p>
          You have control over your data. Here's how we handle data retention and deletion:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Account Deletion:</strong> You can request deletion of your account and all associated data at any time</li>
          <li><strong>Image Deletion:</strong> You can delete individual plushies from your gallery</li>
          <li><strong>Automatic Deletion:</strong> Unused accounts may be deleted after 12 months of inactivity</li>
          <li><strong>Data Backup:</strong> We maintain backups for disaster recovery, which are securely deleted after their retention period</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          To request deletion of your account, please contact our support team.
        </p>
      </div>
    ),
  },
  {
    icon: Mail,
    title: "Your Rights and Choices",
    content: (
      <div className="space-y-3">
        <p>
          You have the following rights regarding your personal information:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Access:</strong> Request a copy of your personal data</li>
          <li><strong>Correction:</strong> Update or correct inaccurate information</li>
          <li><strong>Deletion:</strong> Request deletion of your personal data</li>
          <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
          <li><strong>Objection:</strong> Object to processing of your personal data</li>
          <li><strong>Restriction:</strong> Request restriction of processing your personal data</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          To exercise these rights, please contact our support team at support@plushify.com
        </p>
      </div>
    ),
  },
  {
    icon: FileText,
    title: "Cookies and Tracking",
    content: (
      <div className="space-y-3">
        <p>
          We use cookies and similar technologies to improve your experience:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
          <li><strong>Preference Cookies:</strong> Remember your settings (e.g., theme preference)</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how you use our service</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          You can manage your cookie preferences through your browser settings. For more details, see our Cookie Policy.
        </p>
      </div>
    ),
  },
];

const lastUpdated = "December 25, 2024";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20">
      <div className="container mx-auto px-4 py-12">
        <PageHeader
          title="Privacy Policy"
          description="How we collect, use, and protect your information"
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
              Your privacy is important to us. This Privacy Policy explains how Plushify collects, uses, and protects your personal information. By using our service, you agree to the terms outlined in this policy.
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

        {/* Contact Section */}
        <Card className="border-2 border-pink-200 dark:border-pink-900/30">
          <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-950/20 dark:to-purple-950/20">
            <CardTitle className="text-xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us:
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

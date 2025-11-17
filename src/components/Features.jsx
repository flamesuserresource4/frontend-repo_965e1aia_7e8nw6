import { Workflow, ShieldCheck, Clock, FileCheck, BarChart3, Users2 } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Workflow className="w-5 h-5 text-blue-600" />,
      title: 'Hiring pipeline',
      desc: 'Drag-and-drop candidates across stages with email templates and scorecards.',
    },
    {
      icon: <Users2 className="w-5 h-5 text-indigo-600" />,
      title: 'Onboarding',
      desc: 'Automate pre-boarding, document collection, and first-week checklists.',
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      title: 'Time off & attendance',
      desc: 'Policies, approvals, and calendars with Slack notifications.',
    },
    {
      icon: <FileCheck className="w-5 h-5 text-indigo-600" />,
      title: 'Compliance',
      desc: 'E-sign, document storage, and audit trails that keep you compliant.',
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-blue-600" />,
      title: 'People analytics',
      desc: 'Dashboards for headcount, attrition, DEI, and compensation insights.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      title: 'Permissions',
      desc: 'Granular roles for HR, managers, and employees with SSO support.',
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Everything your HR team needs</h2>
          <p className="mt-3 text-gray-600">Bring recruiting, onboarding, PTO, and performance into a single streamlined system.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group relative rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

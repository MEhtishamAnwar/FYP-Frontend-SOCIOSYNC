import React from 'react';
import Card from '../components/ui/Card';
import StatCard from '../components/ui/StatCard';
import Button from '../components/ui/Button';
import {
  ShieldCheck,
  Users,
  BarChart3,
  Sparkles,
  BellDot,
  CircleCheckBig,
  AlertTriangle,
  Settings,
} from 'lucide-react';

const adminStats = [
  {
    title: 'Active Team Members',
    value: '12',
    change: '+3 this week',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Pending Approvals',
    value: '7',
    change: '2 urgent',
    trend: 'up',
    icon: ShieldCheck,
  },
  {
    title: 'Automation Health',
    value: '98%',
    change: 'stable',
    trend: 'up',
    icon: Sparkles,
  },
  {
    title: 'Campaign Reach',
    value: '1.4M',
    change: '+12%',
    trend: 'up',
    icon: BarChart3,
  },
];

const queueItems = [
  {
    title: 'Approve new publisher onboarding',
    detail: '3 accounts need review before publishing goes live.',
    status: 'Urgent',
  },
  {
    title: 'Review AI-generated content',
    detail: '2 drafts are waiting for brand compliance approval.',
    status: 'Pending',
  },
  {
    title: 'Schedule weekly reporting',
    detail: 'The monday summary is ready and needs final confirmation.',
    status: 'Ready',
  },
];

const alerts = [
  {
    title: 'Integration sync delayed',
    detail: 'One audience sync is running 8 minutes behind.',
    icon: AlertTriangle,
  },
  {
    title: 'Campaign milestone reached',
    detail: 'The latest launch has already crossed 80% of its goal.',
    icon: CircleCheckBig,
  },
];

const Admin = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight">Admin Overview</h1>
          <p className="text-on-surface-variant mt-1">
            Monitor system health, manage team workflows, and keep every launch on track.
          </p>
        </div>
        <Button variant="primary" className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          Review Requests
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {adminStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1.35fr_0.8fr] gap-6">
        <Card level="highest" className="border border-ghost">
          <div className="flex flex-col gap-3 md:flex-row md:items-center justify-between">
            <div>
              <h2 className="text-xl font-display font-semibold text-on-surface">Team queue</h2>
              <p className="text-sm text-on-surface-variant mt-1">Priority actions awaiting your attention.</p>
            </div>
            <Button variant="surface" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Manage Workflows
            </Button>
          </div>

          <div className="mt-6 space-y-3">
            {queueItems.map((item) => (
              <div key={item.title} className="rounded-xl border border-ghost bg-surface-container-low p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-on-surface">{item.title}</h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {item.status}
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant">{item.detail}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card level="high" className="border border-ghost">
          <div className="flex items-center gap-2">
            <BellDot className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-display font-semibold text-on-surface">Live alerts</h2>
          </div>

          <div className="mt-6 space-y-3">
            {alerts.map((alert) => {
              const Icon = alert.icon;
              return (
                <div key={alert.title} className="rounded-xl bg-surface-container-lowest p-4 flex gap-3">
                  <div className="mt-0.5">
                    <Icon className={`w-5 h-5 ${alert.icon === AlertTriangle ? 'text-warning' : 'text-success'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-on-surface">{alert.title}</h3>
                    <p className="text-sm text-on-surface-variant mt-1">{alert.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Admin;

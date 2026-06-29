export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface MetricCard {
  title: string;
  value: string;
  sub: string;
  icon: string;
  description: string;
}

export interface AchievementItem {
  text: string;
  highlight?: string;
}

export interface MicroserviceNode {
  id: string;
  name: string;
  role: string;
  tech: string;
  description: string;
  latency: string;
  status: 'idle' | 'active' | 'error';
}

export interface PipelineStep {
  id: string;
  label: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  duration: string;
}

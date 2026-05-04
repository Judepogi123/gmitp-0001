export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  dotColor: string;
  count: string;
  features: string[];
}

export interface Role {
  name: string;
  access: string;
  color: string;
}

export interface Workflow {
  title: string;
  steps: string[];
  label: string;
}

export type TabType = 'modules' | 'workflow' | 'roles' | 'reports';

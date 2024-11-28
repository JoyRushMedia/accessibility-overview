export interface WCAGItem {
  criterion: string;
  level: 'A' | 'AA' | 'AAA';
  roles: string[];
}

export interface RoleDefinition {
  label: string;
  description: string;
  examples: string[];
}

export interface WCAGDescription {
  title: string;
  description: string;
}

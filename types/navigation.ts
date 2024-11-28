import { LucideIcon } from 'lucide-react'

export interface NavigationItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

export interface NavigationData {
  navMain: NavigationItem[];
} 
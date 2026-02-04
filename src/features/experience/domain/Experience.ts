export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: Date;
  endDate: Date | null;
  current: boolean;
  createdAt: Date;
  updatedAt: Date;
}

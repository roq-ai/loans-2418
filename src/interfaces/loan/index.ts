import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface LoanInterface {
  id?: string;
  amount: number;
  status: string;
  cashback: number;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface LoanGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  organization_id?: string;
}

export interface PartNumber {
  id: number;
  partNo: string,
  wireType: string;
  description: string;
  customerId?: string;
}

export interface ProgramNumber {
  machineId: number;
  programId: number;
  turns: number;
  offset?: number;
  tension?: number;
  speed?: number;
  mandrelId?: string;
  partN0: PartNumber;
}

export interface ticketUpdate {
    id: number;
    title: string;
    status: string;
    description: string;
    updatedData: {
      id: number;
      title: string;
      status: string;
      description: string;
    };
  }
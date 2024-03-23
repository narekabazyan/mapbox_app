export interface Stop {
  sequence_number: number;
  eta: string;
  time_window: string;
  street: string;
  zip: string;
  city: string;
  lat: number;
  lng: number;
}

export interface StopWithCompleted extends Stop {
  completed: boolean;
}

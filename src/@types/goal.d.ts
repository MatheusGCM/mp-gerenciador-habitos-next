export type Status = "default" | "success" | "fail";

export interface GoalProps {
  id: string;
  title: string;
  progress: Record<string, Status>;
}

export interface GoalStateData {
  id: string;
  dateString: string;
  nextState: Status;
}

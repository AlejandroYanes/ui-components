export interface ViewProps {
  value: Date | Date[];
  showOptions?: boolean;
  onChange: (vale) => void;
  onClose: () => void;
}

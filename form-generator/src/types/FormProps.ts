export interface FormProps {
  title: string;
  description?: string;
  fields: {
    label: string;
    attrs: {
      name: string;
      type: string;
      variants?: { value: string; label: string }[];
    };
  }[];
  buttons: string[];
}

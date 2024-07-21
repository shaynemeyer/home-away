import { Label } from "../ui/label";
import { Input } from "../ui/input";

type ImageInputProps = {
  name?: string;
};

function ImageInput({ name = "image" }: ImageInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        Image
      </Label>
      <Input
        id={name}
        name={name}
        type="file"
        required
        accept="image/*"
        className="max-w-xs"
      />
    </div>
  );
}
export default ImageInput;

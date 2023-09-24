import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
  isOpen: boolean;
  imageSrc: string;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, imageSrc, title }) => {
  if (!isOpen) return null;

  const downloadImage = () => {
    const anchor = document.createElement("a");
    anchor.href = imageSrc;
    anchor.download = "your-generated-image.png";
    anchor.click();
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" className="w-full" type="button">
          View Generated Image
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <Image
          src={imageSrc}
          alt="Your AI generated image"
          width={512}
          height={512}
          placeholder="blur"
          blurDataURL={imageSrc}
        />
        <DialogFooter>
          <Button type="button" className="w-full" onClick={downloadImage}>
            Download
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

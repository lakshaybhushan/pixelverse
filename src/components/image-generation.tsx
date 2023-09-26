"use client";
import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Modal from "./modal";

const ImageGenerator: React.FC = () => {
  const API_TOKEN = process.env.NEXT_PUBLIC_HUGGINGFACE_API_TOKEN;
  const [loading, setLoading] = useState<boolean>(false);
  const [output, setOutput] = useState<string | null>(null);
  const [inputText, setInputText] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputText) {
      toast({
        title: "Uh oh! You forgot something.",
        description: "Please enter a prompt to generate an image.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
          body: JSON.stringify({ inputs: inputText }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const blob = await response.blob();
      setOutput(URL.createObjectURL(blob));
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    if (output) {
      setIsModalOpen(true);
      toast({
        title: "Success! Image generated",
        description:
          "View your generated image by clicking the button `View Generated Image`.",
      });
    }
  }, [output]);

  return (
    <section className="flex w-screen items-center justify-center md:w-full">
      <form
        onSubmit={handleSubmit}
        className="grid w-screen gap-2.5 px-10 md:w-1/2 md:px-0">
        <Textarea
          name="input"
          value={inputText}
          onChange={handleTextareaChange}
          placeholder="Type your image prompt here..."
          className="h-48 resize-none"
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Generating your artwork..." : "Generate"}
        </Button>
        {output && (
          <Modal isOpen={isModalOpen} imageSrc={output} title={inputText} />
        )}
      </form>
    </section>
  );
};

export default ImageGenerator;
